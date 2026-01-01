import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Compare Equity Perps - Best Equity Perpetual Trading Platforms';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#030712',
          backgroundImage: 'linear-gradient(to bottom right, #030712, #111827)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 0,
            }}
          >
            Compare{' '}
            <span style={{ color: '#22d3ee' }}>Equity Perps</span>
          </h1>
          <p
            style={{
              fontSize: 32,
              color: '#9ca3af',
              marginTop: 20,
              maxWidth: 800,
            }}
          >
            Find the best equity perpetual trading platforms
          </p>
          <div
            style={{
              display: 'flex',
              gap: 16,
              marginTop: 40,
            }}
          >
            {['Hyperliquid', 'Lighter', 'Ostium', 'Avantis'].map((name) => (
              <div
                key={name}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#1f2937',
                  borderRadius: 8,
                  color: '#d1d5db',
                  fontSize: 20,
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
