const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
  });

  return response.json();
};

export const getPlaylist = async (playlistId: string) => {
  const { access_token } = await getAccessToken();

  return fetch(`https://api.spotify.com/v1/playlists/${playlistId}?fields=tracks.items(track(name,artists(name),external_urls.spotify))`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
}; 