import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  if (error) {
    return Response.json({ 
      error: `Spotify authorization error: ${error}`,
      message: 'Authorization was denied or failed'
    });
  }

  if (!code) {
    return Response.json({ 
      error: 'No authorization code received',
      message: 'Please try the authorization process again'
    });
  }

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: 'https://tanmay.cloud/api/spotify/callback',
        client_id: process.env.SPOTIFY_CLIENT_ID!,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
      }),
    });

    const data = await response.json();

    if (data.error) {
      return Response.json({ 
        error: data.error_description || data.error,
        message: 'Failed to exchange authorization code for tokens'
      });
    }

    return Response.json({
      success: true,
      message: '🎉 Authorization successful! Copy the refresh_token below to your .env.local file:',
      refresh_token: data.refresh_token,
      access_token: data.access_token,
      expires_in: data.expires_in,
      instructions: 'Add SPOTIFY_REFRESH_TOKEN=your_refresh_token_here to your .env.local file'
    });

  } catch (error) {
    console.error('Error exchanging code for tokens:', error);
    return Response.json({ 
      error: 'Internal server error',
      message: 'Failed to exchange code for tokens. Please try again.'
    });
  }
} 