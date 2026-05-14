import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--green-deep)',
      color: 'var(--white)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Decorative top wave */}
      <div style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none"
          style={{ width: '100%', height: '80px', display: 'block' }}>
          <path d="M0,80 C360,0 1080,0 1440,80 L1440,0 L0,0 Z"
            fill="var(--cream)" />
        </svg>
      </div>

      {/* Background leaf decorations */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', bottom: '-20px', right: '-20px', opacity: 0.05 }}
          width="280" height="280" viewBox="0 0 200 200" fill="none">
          <path d="M100 10 C140 10 190 50 190 100 C190 150 150 190 100 190 C50 190 10 150 10 100 C10 50 60 10 100 10Z"
            fill="white"/>
          <path d="M100 10 L100 190 M10 100 C50 80 150 80 190 100"
            stroke="white" strokeWidth="3"/>
        </svg>
        <svg style={{ position: 'absolute', top: '20px', left: '-30px', opacity: 0.04, transform: 'rotate(-40deg)' }}
          width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path d="M100 10 C140 10 190 50 190 100 C190 150 150 190 100 190 C50 190 10 150 10 100 C10 50 60 10 100 10Z"
            fill="white"/>
        </svg>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 24px 40px',
        position: 'relative',
        zIndex: 1,
      }}>

        {/* ── Top Section ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
          marginBottom: '56px',
        }}>

          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '42px', height: '42px',
                background: 'rgba(255,255,255,0.12)',
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '22px',
                border: '1px solid rgba(255,255,255,0.15)',
              }}>🌿</div>
              <div>
                <div style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  letterSpacing: '-0.02em',
                }}>
                  Leaf<span style={{ color: 'var(--green-light)' }}>Scan</span>
                </div>
                <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Plant Disease AI
                </div>
              </div>
            </div>
            <p style={{
              fontSize: '0.88rem',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: '1.7',
              maxWidth: '260px',
            }}>
              AI-powered plant disease detection helping farmers identify and treat crop diseases early, reducing losses and improving yield.
            </p>

            {/* Tagline badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginTop: '20px',
              padding: '7px 14px',
              background: 'rgba(82,183,136,0.15)',
              border: '1px solid rgba(82,183,136,0.3)',
              borderRadius: '20px',
              fontSize: '0.78rem',
              color: 'var(--green-light)',
              fontWeight: '500',
            }}>
              <span>🌱</span> Scan a leaf. Save a crop.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '0.75rem',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '20px',
              fontFamily: 'DM Sans, sans-serif',
            }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { href: '/', label: 'Home', icon: '🏠' },
                { href: '/detect', label: 'Detect Disease', icon: '🔍' },
                { href: '/diseases', label: 'Disease Library', icon: '📚' },
                { href: '/about', label: 'About Project', icon: 'ℹ️' },
              ].map(link => (
                <Link key={link.href} href={link.href} style={{
                  textDecoration: 'none',
                  color: 'rgba(255,255,255,0.65)',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'color 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--green-light)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.65)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}>
                  <span style={{ fontSize: '0.85rem' }}>{link.icon}</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Supported Crops */}
          <div>
            <h4 style={{
              fontSize: '0.75rem',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '20px',
              fontFamily: 'DM Sans, sans-serif',
            }}>
              Supported Crops
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Tomato', icon: '🍅', diseases: '9 diseases' },
                { label: 'Potato', icon: '🥔', diseases: '3 diseases' },
                { label: 'Pepper', icon: '🫑', diseases: '2 diseases' },
              ].map(crop => (
                <div key={crop.label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                    <span>{crop.icon}</span> {crop.label}
                  </div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--green-light)', background: 'rgba(82,183,136,0.12)', padding: '2px 8px', borderRadius: '10px' }}>
                    {crop.diseases}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 style={{
              fontSize: '0.75rem',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '20px',
              fontFamily: 'DM Sans, sans-serif',
            }}>
              Built With
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                'Next.js', 'Tailwind CSS', 'FastAPI',
                'TensorFlow', 'EfficientNetB0', 'OpenCV',
              ].map(tech => (
                <span key={tech} style={{
                  padding: '5px 12px',
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  color: 'rgba(255,255,255,0.65)',
                  fontWeight: '500',
                }}>
                  {tech}
                </span>
              ))}
            </div>

            {/* University badge */}
            <div style={{
              marginTop: '24px',
              padding: '14px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>Final Year Project</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', fontWeight: '500' }}>🎓 University of Agriculture</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>Faisalabad, Pakistan</div>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
          marginBottom: '28px',
        }} />

        {/* ── Bottom Bar ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>
            © {currentYear} LeafScan · M. Haseeb Younas · BS Computer Science
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.82rem',
            color: 'rgba(255,255,255,0.4)',
          }}>
            <span>Made with</span>
            <span style={{ color: '#e74c3c' }}>❤️</span>
            <span>for farmers of Pakistan</span>
            <span>🇵🇰</span>
          </div>
        </div>
      </div>
    </footer>
  )
}