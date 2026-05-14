'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/detect', label: 'Detect Disease' },
    { href: '/diseases', label: 'Disease Library' },
    { href: '/about', label: 'About' },
  ]

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(250, 247, 242, 0.96)' : 'rgba(250, 247, 242, 0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      boxShadow: scrolled ? '0 4px 24px rgba(26,61,43,0.07)' : 'none',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* ── Logo ── */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, var(--green-deep), var(--green-mid))',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            boxShadow: '0 4px 12px rgba(26,61,43,0.25)',
            flexShrink: 0,
          }}>
            🌿
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.35rem',
              fontWeight: '700',
              color: 'var(--green-deep)',
              letterSpacing: '-0.02em',
            }}>
              Leaf<span style={{ color: 'var(--green-leaf)' }}>Scan</span>
            </span>
            <span style={{
              fontSize: '0.62rem',
              color: 'var(--text-muted)',
              fontWeight: '500',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              Plant Disease AI
            </span>
          </div>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }} className="desktop-nav">
          {links.map(link => {
            const isActive = pathname === link.href
            return (
              <Link key={link.href} href={link.href} style={{
                textDecoration: 'none',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '0.88rem',
                fontWeight: isActive ? '600' : '500',
                color: isActive ? 'var(--green-deep)' : 'var(--text-mid)',
                background: isActive ? 'var(--green-mist)' : 'transparent',
                border: isActive ? '1px solid var(--green-light)' : '1px solid transparent',
                transition: 'all 0.2s ease',
                position: 'relative',
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  e.currentTarget.style.background = 'var(--cream-dark)'
                  e.currentTarget.style.color = 'var(--green-deep)'
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'var(--text-mid)'
                }
              }}>
                {link.label}
              </Link>
            )
          })}

          {/* CTA Button */}
          <Link href="/detect" style={{
            textDecoration: 'none',
            marginLeft: '12px',
            padding: '10px 22px',
            borderRadius: '10px',
            fontSize: '0.88rem',
            fontWeight: '600',
            color: 'var(--white)',
            background: 'linear-gradient(135deg, var(--green-deep), var(--green-mid))',
            boxShadow: '0 4px 14px rgba(26,61,43,0.3)',
            transition: 'all 0.25s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(26,61,43,0.4)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(26,61,43,0.3)'
          }}>
            <span>🔍</span> Scan a Leaf
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            cursor: 'pointer',
            padding: '8px',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
          }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: 'var(--green-deep)',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                : i === 1 ? 'scaleX(0)'
                : 'rotate(-45deg) translate(5px, -5px)'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div style={{
        maxHeight: menuOpen ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.35s ease',
        background: 'var(--cream)',
        borderTop: menuOpen ? '1px solid var(--border)' : 'none',
      }}>
        <div style={{ padding: '12px 20px 20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {links.map(link => (
            <Link key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: 'none',
                padding: '11px 16px',
                borderRadius: '8px',
                fontSize: '0.95rem',
                fontWeight: pathname === link.href ? '600' : '500',
                color: pathname === link.href ? 'var(--green-deep)' : 'var(--text-mid)',
                background: pathname === link.href ? 'var(--green-mist)' : 'transparent',
              }}>
              {link.label}
            </Link>
          ))}
          <Link href="/detect"
            onClick={() => setMenuOpen(false)}
            style={{
              textDecoration: 'none',
              marginTop: '8px',
              padding: '12px 16px',
              borderRadius: '10px',
              fontSize: '0.95rem',
              fontWeight: '600',
              color: 'var(--white)',
              background: 'linear-gradient(135deg, var(--green-deep), var(--green-mid))',
              textAlign: 'center',
            }}>
            🔍 Scan a Leaf
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}