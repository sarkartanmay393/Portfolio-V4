import { ImageResponse } from 'next/og';

// const origin = process.env.NEXT_PUBLIC_ORIGIN;

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* <img
          src={origin + `/screenshot.png`}
          alt="me_screenshot"
          width={890}
          height={454}
          style={{ display: 'block', width: '100%', height: '100%' }}
        /> */}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
