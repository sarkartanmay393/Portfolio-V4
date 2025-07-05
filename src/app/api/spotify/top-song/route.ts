import { getPlaylist } from '@/lib/spotify';

const CACHE_DURATION = 24;

let cache: {
  data: any;
  timestamp: number;
} | null = null;

async function getCachedTopSong() {
  const now = new Date().getTime();
  
  if (cache && (now - cache.timestamp) < CACHE_DURATION) {
    console.log('Serving from cache');
    return cache.data;
  }

  console.log('Cache miss or expired, fetching from Spotify');
  
  const playlistId = process.env.SPOTIFY_PLAYLIST_ID;
  
  if (!playlistId) {
    throw new Error('Playlist ID not configured');
  }

  const response = await getPlaylist(playlistId);
  
  if (response.status !== 200) {
    throw new Error('Failed to fetch playlist');
  }

  const data = await response.json();
  const topTrack = data.tracks?.items?.[0]?.track;
  
  if (!topTrack) {
    throw new Error('No tracks found in playlist');
  }

  const songData = {
    title: topTrack.name,
    artist: topTrack.artists.map((artist: any) => artist.name).join(', '),
    spotifyUrl: topTrack.external_urls.spotify,
    cachedAt: new Date().toISOString(),
  };

  cache = {
    data: songData,
    timestamp: now,
  };

  return songData;
}

export async function GET() {
  try {
    const songData = await getCachedTopSong();
    
    return Response.json(songData, {
      headers: {
        'Cache-Control': 'public, s-maxage=7200, stale-while-revalidate=3600', // 2 hours cache, 1 hour stale
      },
    });
  } catch (error) {
    console.error('Error fetching top song:', error);
    if (cache && cache.data) {
      console.log('Serving stale cache due to error');
      return Response.json({
        ...cache.data,
        stale: true,
        error: 'Using cached data due to API error'
      }, {
        headers: {
          'Cache-Control': 'public, s-maxage=300', // 5 minutes for error responses
        },
      });
    }
    
    return Response.json({ error: 'Internal server error' });
  }
} 