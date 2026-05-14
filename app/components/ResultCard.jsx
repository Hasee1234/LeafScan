'use client'
import { useState } from 'react'

export default function ResultCard({ result }) {
  const [activeTab, setActiveTab] = useState('symptoms')

  if (!result) return null

  const {
    name,
    plant,
    plantIcon,
    scientificName,
    type,
    typeColor,
    severity,
    severityColor,
    description,
    symptoms,
    causes,
    treatment,
    prevention,
    confidence,
  } = result

  const tabs = [
    { id: 'symptoms', label: 'Symptoms', icon: '🔍' },
    { id: 'causes', label: 'Causes', icon: '⚠️' },
    { id: 'treatment', label: 'Treatment', icon: '💊' },
    { id: 'prevention', label: 'Prevention', icon: '🛡️' },
  ]

  const tabContent = { symptoms, causes, treatment, prevention }

  const severityConfig = {
    Low:      { bg: '#dcfce7', color: '#16a34a', bar: '#22c55e', width: '25%' },
    Medium:   { bg: '#fef9c3', color: '#ca8a04', bar: '#eab308', width: '50%' },
    High:     { bg: '#fee2e2', color: '#dc2626', bar: '#ef4444', width: '75%' },
    Critical: { bg: '#fce7f3', color: '#be185d', bar: '#ec4899', width: '100%' },
  }
  const sev = severityConfig[severity] || severityConfig['Medium']

  const confidencePct = Math.round((confidence || 0.92) * 100)
  const confidenceColor =
    confidencePct >= 85 ? '#22c55e' :
    confidencePct >= 65 ? '#f59e0b' : '#ef4444'

  return (
    <div style={{
      background: 'var(--white)',
      borderRadius: '24px',
      overflow: 'hidden',
      border: '1px solid var(--border)',
      boxShadow: '0 16px 48px rgba(26,61,43,0.12)',
    }}>

      {/* ── Header Banner ── */}
      <div style={{
        background: 'linear-gradient(135deg, var(--green-deep) 0%, var(--green-mid) 100%)',
        padding: '28px 32px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative leaf */}
        <div aria-hidden style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.08 }}>
          <svg width="160" height="200" viewBox="0 0 200 280">
            <path d="M100 270 C100 270 10 200 10 110 C10 30 90 5 100 5 C110 5 190 30 190 110 C190 200 100 270 100 270Z" fill="white"/>
            <line x1="100" y1="5" x2="100" y2="270" stroke="white" strokeWidth="3"/>
            <line x1="100" y1="80" x2="55" y2="115" stroke="white" strokeWidth="2"/>
            <line x1="100" y1="130" x2="148" y2="158" stroke="white" strokeWidth="2"/>
            <line x1="100" y1="180" x2="60" y2="205" stroke="white" strokeWidth="2"/>
          </svg>
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Top row */}
          <div style={{
            display: 'flex', alignItems: 'flex-start',
            justifyContent: 'space-between', gap: '16px',
            flexWrap: 'wrap', marginBottom: '20px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {/* Plant icon */}
              <div style={{
                width: '60px', height: '60px',
                background: 'rgba(255,255,255,0.12)',
                borderRadius: '18px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '30px',
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(8px)',
                flexShrink: 0,
              }}>{plantIcon}</div>

              <div>
                <div style={{
                  fontSize: '0.7rem', fontWeight: '700',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.55)',
                  marginBottom: '4px',
                }}>{plant} Disease</div>
                <h2 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
                  color: '#ffffff',
                  fontWeight: '700',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2',
                }}>{name}</h2>
                <div style={{
                  fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)',
                  fontStyle: 'italic', marginTop: '4px',
                }}>{scientificName}</div>
              </div>
            </div>

            {/* Confidence badge */}
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '16px',
              padding: '14px 20px',
              textAlign: 'center',
              minWidth: '100px',
            }}>
              <div style={{
                fontSize: '1.8rem', fontWeight: '800',
                fontFamily: 'Playfair Display, serif',
                color: confidenceColor,
                lineHeight: 1,
              }}>{confidencePct}%</div>
              <div style={{
                fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)',
                marginTop: '4px', fontWeight: '600',
                textTransform: 'uppercase', letterSpacing: '0.08em',
              }}>Confidence</div>
            </div>
          </div>

          {/* Tags row */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {/* Type badge */}
            <span style={{
              padding: '5px 14px',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '20px',
              fontSize: '0.75rem', fontWeight: '700',
              color: '#ffffff',
              display: 'flex', alignItems: 'center', gap: '5px',
            }}>
              {type === 'Fungal' ? '🍄' : type === 'Bacterial' ? '🦠' : '🔬'} {type}
            </span>

            {/* Severity badge */}
            <span style={{
              padding: '5px 14px',
              background: sev.bg + '22',
              border: `1px solid ${sev.bar}44`,
              borderRadius: '20px',
              fontSize: '0.75rem', fontWeight: '700',
              color: sev.bar,
              display: 'flex', alignItems: 'center', gap: '5px',
            }}>
              {severity === 'Critical' ? '🚨' :
               severity === 'High' ? '⚠️' :
               severity === 'Medium' ? '🔶' : '✅'} {severity} Severity
            </span>
          </div>
        </div>
      </div>

      {/* ── Confidence + Severity Bars ── */}
      <div style={{
        padding: '24px 32px',
        background: 'var(--cream)',
        borderBottom: '1px solid var(--border)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px',
      }} className="result-bars">
        {/* Confidence */}
        <div>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            marginBottom: '8px',
          }}>
            <span style={{ fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-mid)' }}>
              Detection Confidence
            </span>
            <span style={{ fontSize: '0.78rem', fontWeight: '700', color: confidenceColor }}>
              {confidencePct}%
            </span>
          </div>
          <div style={{
            height: '8px', background: 'var(--cream-dark)',
            borderRadius: '4px', overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: `${confidencePct}%`,
              background: `linear-gradient(90deg, ${confidenceColor}88, ${confidenceColor})`,
              borderRadius: '4px',
              transition: 'width 1s ease',
            }} />
          </div>
        </div>

        {/* Severity */}
        <div>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            marginBottom: '8px',
          }}>
            <span style={{ fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-mid)' }}>
              Disease Severity
            </span>
            <span style={{ fontSize: '0.78rem', fontWeight: '700', color: sev.color }}>
              {severity}
            </span>
          </div>
          <div style={{
            height: '8px', background: 'var(--cream-dark)',
            borderRadius: '4px', overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: sev.width,
              background: `linear-gradient(90deg, ${sev.bar}88, ${sev.bar})`,
              borderRadius: '4px',
              transition: 'width 1s ease',
            }} />
          </div>
        </div>
      </div>

      {/* ── Description ── */}
      <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--border)' }}>
        <p style={{
          fontSize: '0.92rem',
          color: 'var(--text-mid)',
          lineHeight: '1.8',
        }}>{description}</p>
      </div>

      {/* ── Tabs ── */}
      <div>
        {/* Tab headers */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid var(--border)',
          overflowX: 'auto',
          scrollbarWidth: 'none',
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1,
                padding: '16px 12px',
                background: activeTab === tab.id ? 'var(--white)' : 'var(--cream)',
                border: 'none',
                borderBottom: activeTab === tab.id
                  ? '3px solid var(--green-leaf)'
                  : '3px solid transparent',
                cursor: 'pointer',
                fontSize: '0.82rem',
                fontWeight: '600',
                color: activeTab === tab.id ? 'var(--green-deep)' : 'var(--text-muted)',
                transition: 'all 0.2s ease',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: '6px',
                whiteSpace: 'nowrap',
                minWidth: '100px',
              }}
              onMouseEnter={e => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = 'var(--cream-dark)'
                  e.currentTarget.style.color = 'var(--green-mid)'
                }
              }}
              onMouseLeave={e => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = 'var(--cream)'
                  e.currentTarget.style.color = 'var(--text-muted)'
                }
              }}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div style={{ padding: '28px 32px' }}>
          <div style={{
            display: 'flex', flexDirection: 'column', gap: '12px',
          }}>
            {(tabContent[activeTab] || []).map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: '14px', alignItems: 'flex-start',
                padding: '14px 18px',
                background: 'var(--cream)',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--green-mist)'
                e.currentTarget.style.borderColor = 'var(--green-light)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--cream)'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}>
                <div style={{
                  width: '26px', height: '26px', flexShrink: 0,
                  background: 'var(--green-deep)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontSize: '0.7rem', fontWeight: '800',
                  marginTop: '1px',
                }}>{i + 1}</div>
                <p style={{
                  fontSize: '0.88rem', color: 'var(--text-mid)',
                  lineHeight: '1.7', margin: 0,
                }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer action ── */}
      <div style={{
        padding: '20px 32px',
        background: 'var(--green-mist)',
        borderTop: '1px solid var(--green-light)',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '12px',
      }}>
        <div style={{ fontSize: '0.82rem', color: 'var(--text-mid)' }}>
          🌿 Always consult a plant specialist for severe infections
        </div>
        <button
          onClick={() => window.print()}
          style={{
            padding: '9px 20px',
            background: 'var(--green-deep)',
            color: 'white', border: 'none',
            borderRadius: '8px', cursor: 'pointer',
            fontSize: '0.82rem', fontWeight: '600',
            display: 'flex', alignItems: 'center', gap: '6px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--green-mid)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--green-deep)'}
        >
          🖨️ Print Report
        </button>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .result-bars {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}