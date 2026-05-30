'use client'
import { useState, useMemo } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { diseases, getAllPlants, getAllTypes } from '../lib/diseases'

export default function DiseasesPage() {
  const [search, setSearch] = useState('')
  const [selectedPlant, setSelectedPlant] = useState('All')
  const [selectedType, setSelectedType] = useState('All')
  const [selectedDisease, setSelectedDisease] = useState(null)

  const plants = ['All', ...getAllPlants()]
  const types = ['All', ...getAllTypes()]

  const filtered = useMemo(() => {
    return diseases.filter(d => {
      const matchSearch =
        d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.plant.toLowerCase().includes(search.toLowerCase()) ||
        d.scientificName.toLowerCase().includes(search.toLowerCase())
      const matchPlant = selectedPlant === 'All' || d.plant === selectedPlant
      const matchType = selectedType === 'All' || d.type === selectedType
      return matchSearch && matchPlant && matchType
    })
  }, [search, selectedPlant, selectedType])

  const severityConfig = {
    Low:      { bg: '#dcfce7', color: '#16a34a', dot: '#22c55e' },
    Medium:   { bg: '#fef9c3', color: '#ca8a04', dot: '#eab308' },
    High:     { bg: '#fee2e2', color: '#dc2626', dot: '#ef4444' },
    Critical: { bg: '#fce7f3', color: '#be185d', dot: '#ec4899' },
  }

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--cream)', paddingBottom: '80px' }}>

        {/* ── Header ── */}
        <div style={{
          background: 'linear-gradient(135deg, var(--green-deep), var(--green-mid))',
          padding: '64px 24px 80px',
          position: 'relative', overflow: 'hidden',
          textAlign: 'center',
        }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(rgba(82,183,136,0.1) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }} />
            <svg style={{ position: 'absolute', right: '-20px', top: '-20px', opacity: 0.07 }}
              width="240" height="300" viewBox="0 0 200 280">
              <path d="M100 270 C100 270 10 200 10 110 C10 30 90 5 100 5 C110 5 190 30 190 110 C190 200 100 270 100 270Z" fill="white"/>
              <line x1="100" y1="5" x2="100" y2="270" stroke="white" strokeWidth="3"/>
              <line x1="100" y1="80" x2="55" y2="115" stroke="white" strokeWidth="2"/>
              <line x1="100" y1="130" x2="148" y2="158" stroke="white" strokeWidth="2"/>
            </svg>
            <svg style={{ position: 'absolute', left: '-20px', bottom: '-10px', opacity: 0.05, transform: 'scaleX(-1)' }}
              width="180" height="220" viewBox="0 0 200 280">
              <path d="M100 270 C100 270 10 200 10 110 C10 30 90 5 100 5 C110 5 190 30 190 110 C190 200 100 270 100 270Z" fill="white"/>
            </svg>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 16px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '20px',
              fontSize: '0.75rem', fontWeight: '700',
              color: 'rgba(255,255,255,0.8)',
              marginBottom: '20px',
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
              📚 Plant Disease Encyclopedia
            </div>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#ffffff', letterSpacing: '-0.03em',
              marginBottom: '14px',
            }}>
              Disease Library
            </h1>
            <p style={{
              fontSize: '1rem', color: 'rgba(255,255,255,0.65)',
              maxWidth: '500px', margin: '0 auto', lineHeight: '1.7',
            }}>
              Browse our complete encyclopedia of plant diseases —
              symptoms, causes, treatments and prevention all in one place.
            </p>

            {/* Stats strip */}
            <div style={{
              display: 'flex', justifyContent: 'center', gap: '32px',
              marginTop: '32px', flexWrap: 'wrap',
            }}>
              {[
                { value: diseases.length, label: 'Total Diseases' },
                { value: getAllPlants().length, label: 'Plant Species' },
                { value: getAllTypes().length, label: 'Disease Types' },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '1.8rem', fontWeight: '700',
                    fontFamily: 'Playfair Display, serif',
                    color: '#52b788',
                  }}>{s.value}+</div>
                  <div style={{
                    fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)',
                    fontWeight: '600', letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          maxWidth: '1200px', margin: '-40px auto 0',
          padding: '0 24px', position: 'relative', zIndex: 2,
        }}>

          {/* ── Search & Filters ── */}
          <div style={{
            background: 'var(--white)',
            borderRadius: '20px',
            padding: '24px 28px',
            border: '1px solid var(--border)',
            boxShadow: '0 8px 32px rgba(26,61,43,0.08)',
            marginBottom: '32px',
          }}>
            {/* Search bar */}
            <div style={{ position: 'relative', marginBottom: '20px' }}>
              <span style={{
                position: 'absolute', left: '16px', top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '1.1rem', pointerEvents: 'none',
              }}>🔍</span>
              <input
                type="text"
                placeholder="Search diseases, plants, scientific names..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 16px 14px 46px',
                  borderRadius: '12px',
                  border: '1px solid var(--border)',
                  background: 'var(--cream)',
                  fontSize: '0.92rem',
                  color: 'var(--text-dark)',
                  outline: 'none',
                  transition: 'all 0.2s',
                  fontFamily: 'DM Sans, sans-serif',
                  boxSizing: 'border-box',
                }}
                onFocus={e => {
                  e.target.style.borderColor = 'var(--green-leaf)'
                  e.target.style.boxShadow = '0 0 0 3px rgba(82,183,136,0.12)'
                }}
                onBlur={e => {
                  e.target.style.borderColor = 'var(--border)'
                  e.target.style.boxShadow = 'none'
                }}
              />
              {search && (
                <button onClick={() => setSearch('')} style={{
                  position: 'absolute', right: '14px', top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none', border: 'none',
                  cursor: 'pointer', fontSize: '1rem',
                  color: 'var(--text-muted)',
                }}>✕</button>
              )}
            </div>

            {/* Filters row */}
            <div style={{
              display: 'flex', gap: '16px', flexWrap: 'wrap',
              alignItems: 'center',
            }}>
              {/* Plant filter */}
              <div>
                <div style={{
                  fontSize: '0.7rem', fontWeight: '700',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--text-muted)', marginBottom: '8px',
                }}>Plant</div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {plants.map(p => (
                    <button key={p} onClick={() => setSelectedPlant(p)} style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      border: `1px solid ${selectedPlant === p ? 'var(--green-leaf)' : 'var(--border)'}`,
                      background: selectedPlant === p ? 'var(--green-mist)' : 'transparent',
                      color: selectedPlant === p ? 'var(--green-deep)' : 'var(--text-muted)',
                      fontSize: '0.8rem', fontWeight: '600',
                      cursor: 'pointer', transition: 'all 0.2s',
                    }}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type filter */}
              <div>
                <div style={{
                  fontSize: '0.7rem', fontWeight: '700',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--text-muted)', marginBottom: '8px',
                }}>Type</div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {types.map(t => (
                    <button key={t} onClick={() => setSelectedType(t)} style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      border: `1px solid ${selectedType === t ? 'var(--green-leaf)' : 'var(--border)'}`,
                      background: selectedType === t ? 'var(--green-mist)' : 'transparent',
                      color: selectedType === t ? 'var(--green-deep)' : 'var(--text-muted)',
                      fontSize: '0.8rem', fontWeight: '600',
                      cursor: 'pointer', transition: 'all 0.2s',
                    }}>
                      {t === 'Fungal' ? '🍄' : t === 'Bacterial' ? '🦠' : t === 'Viral' ? '🔬' : ''} {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results count */}
              <div style={{ marginLeft: 'auto', fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                {filtered.length} result{filtered.length !== 1 ? 's' : ''}
              </div>
            </div>
          </div>

          {/* ── Disease Grid + Detail Panel ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: selectedDisease ? '1fr 1.4fr' : '1fr',
            gap: '28px',
            alignItems: 'start',
          }} className="disease-layout">

            {/* Disease cards grid */}
            <div>
              {filtered.length === 0 ? (
                <div style={{
                  background: 'var(--white)', borderRadius: '20px',
                  padding: '60px 32px', textAlign: 'center',
                  border: '1px solid var(--border)',
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>🌿</div>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--green-deep)', marginBottom: '8px',
                  }}>No diseases found</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                    Try adjusting your search or filters
                  </p>
                  <button onClick={() => { setSearch(''); setSelectedPlant('All'); setSelectedType('All') }}
                    style={{
                      marginTop: '20px', padding: '10px 24px',
                      background: 'var(--green-deep)', color: 'white',
                      border: 'none', borderRadius: '10px',
                      fontSize: '0.88rem', fontWeight: '600', cursor: 'pointer',
                    }}>
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: selectedDisease ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '16px',
                }}>
                  {filtered.map(disease => {
                    const sev = severityConfig[disease.severity] || severityConfig['Medium']
                    const isActive = selectedDisease?.id === disease.id
                    return (
                      <div
                        key={disease.id}
                        onClick={() => setSelectedDisease(isActive ? null : disease)}
                        className="card-hover"
                        style={{
                          background: isActive ? 'var(--green-mist)' : 'var(--white)',
                          borderRadius: '16px',
                          padding: '20px',
                          border: `1px solid ${isActive ? 'var(--green-light)' : 'var(--border)'}`,
                          cursor: 'pointer',
                          transition: 'all 0.25s ease',
                          boxShadow: isActive ? '0 4px 20px rgba(82,183,136,0.15)' : '0 2px 12px rgba(26,61,43,0.05)',
                        }}
                      >
                        {/* Card top */}
                        <div style={{
                          display: 'flex', alignItems: 'flex-start',
                          justifyContent: 'space-between', gap: '12px',
                          marginBottom: '14px',
                        }}>
                          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            <div style={{
                              width: '44px', height: '44px', flexShrink: 0,
                              background: isActive ? 'var(--white)' : 'var(--cream)',
                              borderRadius: '12px',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: '22px',
                              border: '1px solid var(--border)',
                            }}>{disease.plantIcon}</div>
                            <div>
                              <div style={{
                                fontSize: '0.68rem', fontWeight: '700',
                                color: 'var(--text-muted)',
                                textTransform: 'uppercase', letterSpacing: '0.08em',
                                marginBottom: '3px',
                              }}>{disease.plant}</div>
                              <h3 style={{
                                fontFamily: 'Playfair Display, serif',
                                fontSize: '0.95rem',
                                color: 'var(--green-deep)',
                                lineHeight: '1.3',
                              }}>{disease.name}</h3>
                            </div>
                          </div>

                          {/* Severity dot */}
                          <div style={{
                            display: 'flex', alignItems: 'center', gap: '5px',
                            padding: '4px 10px',
                            background: sev.bg,
                            borderRadius: '20px', flexShrink: 0,
                          }}>
                            <div style={{
                              width: '6px', height: '6px',
                              background: sev.dot, borderRadius: '50%',
                            }} />
                            <span style={{
                              fontSize: '0.68rem', fontWeight: '700',
                              color: sev.color,
                            }}>{disease.severity}</span>
                          </div>
                        </div>

                        {/* Scientific name */}
                        <div style={{
                          fontSize: '0.75rem', color: 'var(--text-muted)',
                          fontStyle: 'italic', marginBottom: '12px',
                        }}>{disease.scientificName}</div>

                        {/* Description excerpt */}
                        <p style={{
                          fontSize: '0.82rem', color: 'var(--text-muted)',
                          lineHeight: '1.6',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          marginBottom: '14px',
                        }}>{disease.description}</p>

                        {/* Type badge + arrow */}
                        <div style={{
                          display: 'flex', alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                          <span style={{
                            padding: '4px 12px',
                            background: disease.type === 'Fungal' ? '#ede9fe' :
                                        disease.type === 'Bacterial' ? '#fef3c7' : '#e8f0fe',
                            color: disease.type === 'Fungal' ? '#7c3aed' :
                                   disease.type === 'Bacterial' ? '#d97706' : '#4f46e5',
                            borderRadius: '20px',
                            fontSize: '0.72rem', fontWeight: '700',
                          }}>
                            {disease.type === 'Fungal' ? '🍄' :
                             disease.type === 'Bacterial' ? '🦠' : '🔬'} {disease.type}
                          </span>
                          <span style={{
                            fontSize: '0.78rem', fontWeight: '600',
                            color: isActive ? 'var(--green-mid)' : 'var(--text-muted)',
                          }}>
                            {isActive ? '✕ Close' : 'View details →'}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* ── Detail Panel ── */}
            {selectedDisease && (
              <div style={{
                background: 'var(--white)',
                borderRadius: '20px',
                border: '1px solid var(--border)',
                overflow: 'hidden',
                boxShadow: '0 12px 40px rgba(26,61,43,0.1)',
                position: 'sticky',
                top: '90px',
              }}>
                {/* Detail header */}
                <div style={{
                  background: 'linear-gradient(135deg, var(--green-deep), var(--green-mid))',
                  padding: '24px 28px',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div aria-hidden style={{
                    position: 'absolute', right: '-10px', bottom: '-10px', opacity: 0.08,
                  }}>
                    <svg width="120" height="150" viewBox="0 0 200 280">
                      <path d="M100 270 C100 270 10 200 10 110 C10 30 90 5 100 5 C110 5 190 30 190 110 C190 200 100 270 100 270Z" fill="white"/>
                      <line x1="100" y1="5" x2="100" y2="270" stroke="white" strokeWidth="3"/>
                    </svg>
                  </div>

                  <button onClick={() => setSelectedDisease(null)} style={{
                    position: 'absolute', top: '16px', right: '16px',
                    background: 'rgba(255,255,255,0.15)', border: 'none',
                    color: 'white', width: '32px', height: '32px',
                    borderRadius: '50%', cursor: 'pointer',
                    fontSize: '0.9rem', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                  >✕</button>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                    <div style={{
                      width: '52px', height: '52px',
                      background: 'rgba(255,255,255,0.12)',
                      borderRadius: '14px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '26px', border: '1px solid rgba(255,255,255,0.2)',
                    }}>{selectedDisease.plantIcon}</div>
                    <div>
                      <div style={{
                        fontSize: '0.68rem', color: 'rgba(255,255,255,0.55)',
                        fontWeight: '700', textTransform: 'uppercase',
                        letterSpacing: '0.1em', marginBottom: '4px',
                      }}>{selectedDisease.plant}</div>
                      <h3 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '1.25rem', color: 'white',
                        letterSpacing: '-0.02em',
                      }}>{selectedDisease.name}</h3>
                      <div style={{
                        fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)',
                        fontStyle: 'italic', marginTop: '3px',
                      }}>{selectedDisease.scientificName}</div>
                    </div>
                  </div>
                </div>

                {/* Detail body */}
                <div style={{ padding: '24px 28px', maxHeight: '70vh', overflowY: 'auto' }}>
                  <p style={{
                    fontSize: '0.88rem', color: 'var(--text-mid)',
                    lineHeight: '1.8', marginBottom: '24px',
                  }}>{selectedDisease.description}</p>

                  {[
                    { label: 'Symptoms', icon: '🔍', data: selectedDisease.symptoms },
                    { label: 'Causes', icon: '⚠️', data: selectedDisease.causes },
                    { label: 'Treatment', icon: '💊', data: selectedDisease.treatment },
                    { label: 'Prevention', icon: '🛡️', data: selectedDisease.prevention },
                  ].map(section => (
                    <div key={section.label} style={{ marginBottom: '20px' }}>
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        marginBottom: '10px',
                      }}>
                        <span>{section.icon}</span>
                        <h4 style={{
                          fontSize: '0.8rem', fontWeight: '700',
                          letterSpacing: '0.1em', textTransform: 'uppercase',
                          color: 'var(--green-deep)',
                        }}>{section.label}</h4>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {section.data.map((item, i) => (
                          <div key={i} style={{
                            display: 'flex', gap: '10px',
                            fontSize: '0.82rem', color: 'var(--text-mid)',
                            lineHeight: '1.6',
                            padding: '10px 14px',
                            background: 'var(--cream)',
                            borderRadius: '10px',
                            border: '1px solid var(--border)',
                          }}>
                            <span style={{
                              color: 'var(--green-leaf)',
                              fontWeight: '800', flexShrink: 0,
                            }}>→</span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .disease-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
