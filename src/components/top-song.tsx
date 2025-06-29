"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface TopSong {
  title: string;
  artist: string;
  spotifyUrl: string;
}

export function TopSong() {
  const [song, setSong] = useState<TopSong | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopSong = async () => {
      try {
        const response = await fetch('/api/spotify/top-song');
        const data = await response.json();
        
        if (!data.error) {
          setSong(data);
        }
      } catch (error) {
        console.error('Failed to fetch top song:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopSong();
  }, []);

  if (loading) {
    return (
      <span className="text-sm text-muted-foreground italic">
        🎵 Loading current vibe...
      </span>
    );
  }

  if (!song) {
    return (
      <span className="text-sm text-muted-foreground">
        🎵 Always coding with music on
      </span>
    );
  }

  return (
    <span className="text-sm text-muted-foreground">
      🎵 Currently vibing to{" "}
      <Link 
        href={song.spotifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-500 transition-colors"
      >
        "{song.title}" by {song.artist}
      </Link>
    </span>
  );
} 