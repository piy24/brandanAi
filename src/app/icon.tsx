import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#4f80e0',
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="16"
            cy="16"
            r="4"
            fill="currentColor"
            fillOpacity="0.8"
          ></circle>
          <circle
            cx="16"
            cy="16"
            r="8"
            stroke="currentColor"
            strokeOpacity="0.6"
            strokeWidth="2"
          ></circle>
          <circle
            cx="16"
            cy="16"
            r="13"
            stroke="currentColor"
            strokeOpacity="0.4"
            strokeWidth="2"
          ></circle>
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}
