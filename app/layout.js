import './globals.css'

export const metadata = {
  title: 'LeafScan — AI Plant Disease Detection',
  description: 'Upload a leaf image and get instant AI-powered disease detection with cure recommendations. Supporting tomato, potato, and pepper crops.',
  keywords: 'plant disease detection, leaf scan, crop disease AI, agriculture AI, EfficientNetB0',
  authors: [{ name: 'M. Haseeb Younas' }],
  openGraph: {
    title: 'LeafScan — AI Plant Disease Detection',
    description: 'Scan a leaf. Save a crop.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌿</text></svg>" />
      </head>
      <body className="grain">
        {/* Decorative background blobs — plant themed */}
        <div aria-hidden="true" style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}>
          {/* Top-left soft green blob */}
          <div style={{
            position: 'absolute',
            top: '-120px',
            left: '-120px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(149,213,178,0.18) 0%, transparent 70%)',
          }} />
          {/* Top-right earth blob */}
          <div style={{
            position: 'absolute',
            top: '60px',
            right: '-80px',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.10) 0%, transparent 70%)',
          }} />
          {/* Bottom-left deep green */}
          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(82,183,136,0.10) 0%, transparent 70%)',
          }} />
          {/* Bottom-right */}
          <div style={{
            position: 'absolute',
            bottom: '-60px',
            right: '5%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(26,61,43,0.08) 0%, transparent 70%)',
          }} />

          {/* Decorative leaf SVGs scattered */}
          <svg style={{ position: 'absolute', top: '15%', right: '3%', opacity: 0.04 }}
            width="180" height="180" viewBox="0 0 200 200" fill="none">
            <path d="M100 10 C140 10 190 50 190 100 C190 150 150 190 100 190 C50 190 10 150 10 100 C10 50 60 10 100 10Z"
              fill="#1a3d2b"/>
            <path d="M100 10 L100 190 M10 100 C50 80 150 80 190 100"
              stroke="#1a3d2b" strokeWidth="3"/>
          </svg>

          <svg style={{ position: 'absolute', bottom: '20%', left: '2%', opacity: 0.04, transform: 'rotate(-30deg)' }}
            width="140" height="140" viewBox="0 0 200 200" fill="none">
            <path d="M100 10 C140 10 190 50 190 100 C190 150 150 190 100 190 C50 190 10 150 10 100 C10 50 60 10 100 10Z"
              fill="#2d6a4f"/>
            <path d="M100 10 L100 190" stroke="#2d6a4f" strokeWidth="3"/>
          </svg>

          <svg style={{ position: 'absolute', top: '45%', right: '1%', opacity: 0.03, transform: 'rotate(15deg)' }}
            width="100" height="100" viewBox="0 0 200 200" fill="none">
            <path d="M100 10 C140 10 190 50 190 100 C190 150 150 190 100 190 C50 190 10 150 10 100 C10 50 60 10 100 10Z"
              fill="#52b788"/>
          </svg>
        </div>

        {/* Page content sits above background */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  )
}