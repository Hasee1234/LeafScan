"use client"
import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(150deg, #071a0f 0%, #0d2b1a 35%, #1a3d2b 70%, #2d6a4f 100%)',
          padding: '120px 24px 100px',
        }}>
          {/* Background atmosphere */}
          <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            {/* Radial glows */}
            <div style={{
              position: 'absolute', top: '-10%', right: '-5%',
              width: '65vw', height: '65vw', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(82,183,136,0.12) 0%, transparent 65%)',
            }} />
            <div style={{
              position: 'absolute', bottom: '-10%', left: '-5%',
              width: '50vw', height: '50vw', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(149,213,178,0.08) 0%, transparent 65%)',
            }} />
            {/* Subtle dot grid */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(rgba(82,183,136,0.15) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              opacity: 0.4,
            }} />
            {/* Large botanical leaf SVGs */}
            <svg style={{ position: 'absolute', top: '-30px', right: '-30px', opacity: 0.07 }}
              width="380" height="500" viewBox="0 0 200 280">
              <path d="M100 270 C100 270 10 200 10 110 C10 30 90 5 100 5 C110 5 190 30 190 110 C190 200 100 270 100 270Z" fill="#52b788"/>
              <line x1="100" y1="5" x2="100" y2="270" stroke="#95d5b2" strokeWidth="2.5"/>
              <line x1="100" y1="60" x2="55" y2="95" stroke="#95d5b2" strokeWidth="1.5"/>
              <line x1="100" y1="95" x2="145" y2="125" stroke="#95d5b2" strokeWidth="1.5"/>
              <line x1="100" y1="130" x2="50" y2="160" stroke="#95d5b2" strokeWidth="1.5"/>
              <line x1="100" y1="165" x2="148" y2="190" stroke="#95d5b2" strokeWidth="1.5"/>
              <line x1="100" y1="200" x2="60" y2="225" stroke="#95d5b2" strokeWidth="1.5"/>
            </svg>
            <svg style={{ position: 'absolute', bottom: '-40px', left: '-20px', opacity: 0.06, transform: 'rotate(-20deg) scaleX(-1)' }}
              width="260" height="340" viewBox="0 0 200 280">
              <path d="M100 270 C100 270 10 200 10 110 C10 30 90 5 100 5 C110 5 190 30 190 110 C190 200 100 270 100 270Z" fill="#95d5b2"/>
              <line x1="100" y1="5" x2="100" y2="270" stroke="#d8f3dc" strokeWidth="2"/>
              <line x1="100" y1="80" x2="55" y2="115" stroke="#d8f3dc" strokeWidth="1.5"/>
              <line x1="100" y1="130" x2="148" y2="158" stroke="#d8f3dc" strokeWidth="1.5"/>
              <line x1="100" y1="180" x2="58" y2="208" stroke="#d8f3dc" strokeWidth="1.5"/>
            </svg>
            <svg style={{ position: 'absolute', top: '40%', left: '2%', opacity: 0.04, transform: 'rotate(15deg)' }}
              width="120" height="160" viewBox="0 0 200 280">
              <path d="M100 270 C100 270 10 200 10 110 C10 30 90 5 100 5 C110 5 190 30 190 110 C190 200 100 270 100 270Z" fill="#d8f3dc"/>
            </svg>
          </div>

          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'center',
            }} className="hero-grid">

              {/* Left — Text */}
              <div>
                <div className="animate-fade-up" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '8px 20px',
                  background: 'rgba(82,183,136,0.12)',
                  border: '1px solid rgba(82,183,136,0.35)',
                  borderRadius: '30px',
                  fontSize: '0.75rem', fontWeight: '700',
                  color: '#95d5b2',
                  marginBottom: '36px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  <span style={{
                    width: '7px', height: '7px', background: '#52b788',
                    borderRadius: '50%', display: 'inline-block',
                    boxShadow: '0 0 10px #52b788',
                  }} className="animate-pulse-green" />
                  AI · Deep Learning · EfficientNetB0
                </div>

                <h1 className="animate-fade-up delay-100" style={{
                  fontSize: 'clamp(3.2rem, 5.5vw, 5rem)',
                  fontWeight: '700',
                  color: '#ffffff',
                  letterSpacing: '-0.04em',
                  lineHeight: '1.0',
                  marginBottom: '16px',
                }}>
                  Every Leaf
                </h1>
                <h1 className="animate-fade-up delay-200" style={{
                  fontSize: 'clamp(3.2rem, 5.5vw, 5rem)',
                  fontWeight: '700',
                  letterSpacing: '-0.04em',
                  lineHeight: '1.0',
                  marginBottom: '32px',
                  background: 'linear-gradient(135deg, #52b788 0%, #95d5b2 45%, #c9a84c 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Tells a Story.
                </h1>

                <p className="animate-fade-up delay-300" style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: '1.9',
                  marginBottom: '48px',
                  maxWidth: '480px',
                }}>
                  Photograph your plant — flowers, trees, houseplants, anything green.
Our AI scans the image, identifies the disease, and gives you a
complete treatment plan in seconds.
                </p>

                <div className="animate-fade-up delay-400" style={{
                  display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '56px',
                }}>
                  <Link href="/detect" style={{
                    textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    padding: '17px 38px',
                    background: 'linear-gradient(135deg, #52b788 0%, #2d6a4f 100%)',
                    color: 'white', borderRadius: '14px',
                    fontSize: '1rem', fontWeight: '700',
                    boxShadow: '0 10px 40px rgba(82,183,136,0.45)',
                    border: '1px solid rgba(82,183,136,0.5)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 18px 50px rgba(82,183,136,0.55)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(82,183,136,0.45)'
                  }}>
                    🔬 Diagnose a Plant
                  </Link>
                  <Link href="/diseases" style={{
                    textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    padding: '17px 32px',
                    background: 'rgba(255,255,255,0.06)',
                    color: 'rgba(255,255,255,0.85)',
                    borderRadius: '14px',
                    fontSize: '1rem', fontWeight: '600',
                    border: '1px solid rgba(255,255,255,0.14)',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.11)'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}>
                    🌿 Browse Diseases
                  </Link>
                </div>

                {/* Stats glass panel */}
                <div className="animate-fade-up delay-500" style={{
                  display: 'flex',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  backdropFilter: 'blur(12px)',
                  maxWidth: '440px',
                }}>
                  {[
                    { value: '95%+', label: 'Accuracy', icon: '🎯' },
                    { value: '38+', label: 'Plant Diseases', icon: '🌱' },
                    { value: '2s', label: 'Diagnosis Time', icon: '⚡' },
                  ].map((stat, i) => (
                    <div key={i} style={{
                      flex: 1, padding: '22px 12px', textAlign: 'center',
                      borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                    }}>
                      <div style={{ fontSize: '1.3rem', marginBottom: '6px' }}>{stat.icon}</div>
                      <div style={{
                        fontSize: '1.55rem', fontWeight: '700',
                        fontFamily: 'Playfair Display, serif',
                        color: '#52b788', lineHeight: 1,
                      }}>{stat.value}</div>
                      <div style={{
                        fontSize: '0.7rem', color: 'rgba(255,255,255,0.38)',
                        marginTop: '6px', fontWeight: '600',
                        textTransform: 'uppercase', letterSpacing: '0.06em',
                      }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Floating Analysis Card */}
              <div className="animate-fade-in delay-300 hero-visual" style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
              }}>
                <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>

                  {/* Outer glow ring */}
                  <div style={{
                    position: 'absolute', inset: '-30px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(82,183,136,0.18) 0%, transparent 65%)',
                    zIndex: 0,
                  }} />

                  {/* Main glass card */}
                  <div className="animate-float" style={{
                    background: 'rgba(13,43,26,0.7)',
                    backdropFilter: 'blur(24px)',
                    borderRadius: '28px',
                    padding: '24px',
                    border: '1px solid rgba(82,183,136,0.2)',
                    boxShadow: '0 40px 100px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
                    position: 'relative', zIndex: 2,
                  }}>

                    {/* Window bar */}
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      marginBottom: '18px', paddingBottom: '14px',
                      borderBottom: '1px solid rgba(255,255,255,0.07)',
                    }}>
                      {['#ff5f57','#ffbd2e','#28c840'].map(c => (
                        <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
                      ))}
                      <span style={{ marginLeft: '8px', fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', fontWeight: '600', letterSpacing: '0.04em' }}>
                        leafscan · diagnosis
                      </span>
                    </div>

                    {/* Upload zone */}
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(82,183,136,0.1), rgba(13,43,26,0.5))',
                      borderRadius: '16px',
                      padding: '32px 20px',
                      textAlign: 'center',
                      border: '2px dashed rgba(82,183,136,0.35)',
                      marginBottom: '18px',
                    }}>
                      <div style={{ fontSize: '52px', marginBottom: '10px' }}>🌺</div>
                      <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', fontWeight: '600' }}>
                        Upload plant photo
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', marginTop: '4px' }}>
                        Full plant · flowers · trees · houseplants
                      </div>
                    </div>

                    {/* Progress */}
                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '7px' }}>
                        <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontWeight: '600', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                          AI Analysis
                        </span>
                        <span style={{ fontSize: '0.7rem', color: '#52b788', fontWeight: '700' }}>92%</span>
                      </div>
                      <div style={{ height: '5px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{
                          height: '100%', width: '92%',
                          background: 'linear-gradient(90deg, #2d6a4f, #52b788, #95d5b2)',
                          borderRadius: '3px',
                          boxShadow: '0 0 12px rgba(82,183,136,0.5)',
                        }} />
                      </div>
                    </div>

                    {/* Result */}
                    <div style={{
                      background: 'rgba(82,183,136,0.1)',
                      borderRadius: '14px', padding: '14px',
                      display: 'flex', alignItems: 'center', gap: '12px',
                      marginBottom: '12px',
                      border: '1px solid rgba(82,183,136,0.2)',
                    }}>
                      <div style={{
                        width: '42px', height: '42px', flexShrink: 0,
                        background: 'linear-gradient(135deg, #1a3d2b, #2d6a4f)',
                        borderRadius: '12px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '22px',
                        border: '1px solid rgba(82,183,136,0.3)',
                      }}>🌿</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#fff', marginBottom: '2px' }}>
                          Rose Black Spot
                        </div>
                        <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>
                          Diplocarpon rosae · Fungal
                        </div>
                      </div>
                      <div style={{
                        background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                        color: 'white', fontSize: '0.72rem', fontWeight: '800',
                        padding: '5px 11px', borderRadius: '20px',
                        boxShadow: '0 4px 14px rgba(34,197,94,0.4)',
                      }}>92%</div>
                    </div>

                    {/* Treatment tags */}
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {['🧪 Fungicide spray', '✂️ Prune leaves', '🌬️ Improve airflow'].map(tag => (
                        <span key={tag} style={{
                          padding: '5px 10px',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.09)',
                          borderRadius: '7px',
                          fontSize: '0.68rem', color: 'rgba(255,255,255,0.55)',
                          fontWeight: '500',
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Floating chips */}
                  <div style={{
                    position: 'absolute', top: '-18px', right: '-10px',
                    background: 'linear-gradient(135deg, #52b788, #2d6a4f)',
                    color: 'white', borderRadius: '12px',
                    padding: '9px 16px', fontSize: '0.75rem', fontWeight: '700',
                    boxShadow: '0 8px 24px rgba(82,183,136,0.45)',
                    zIndex: 3, display: 'flex', alignItems: 'center', gap: '6px',
                    border: '1px solid rgba(82,183,136,0.5)',
                  }}>
                    ⚡ Results in 2 sec
                  </div>
                  <div style={{
                    position: 'absolute', bottom: '-18px', left: '-10px',
                    background: 'linear-gradient(135deg, #c9a84c, #8b6914)',
                    color: 'white', borderRadius: '12px',
                    padding: '9px 16px', fontSize: '0.75rem', fontWeight: '700',
                    boxShadow: '0 8px 24px rgba(139,105,20,0.45)',
                    zIndex: 3,
                  }}>
                    🤖 EfficientNetB0
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
            background: 'linear-gradient(to bottom, transparent, var(--cream))',
            zIndex: 1,
          }} />
        </section>

        {/* ── HOW IT WORKS ── */}
        <section style={{ padding: '110px 24px', background: 'var(--cream)', position: 'relative' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '72px' }}>
              <span style={{
                fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.18em',
                textTransform: 'uppercase', color: 'var(--green-leaf)',
                display: 'block', marginBottom: '14px',
              }}>Simple 3-Step Process</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                color: 'var(--green-deep)',
                letterSpacing: '-0.03em',
              }}>
                From Photo to Diagnosis
              </h2>
              <div style={{
                width: '60px', height: '3px', borderRadius: '2px',
                background: 'linear-gradient(90deg, var(--green-leaf), var(--green-light))',
                margin: '20px auto 0',
              }} />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '28px',
              position: 'relative',
            }}>
              <div className="step-connector" style={{
                position: 'absolute', top: '52px',
                left: '18%', right: '18%', height: '2px',
                background: 'linear-gradient(90deg, transparent, var(--green-light), transparent)',
              }} />

              {[
                {
                  step: '01', icon: '📸', color: '#edf7f0', accent: '#52b788',
                  title: 'Photograph the Leaf',
                  desc: 'Take a clear, close-up photo of the affected plant leaf in good lighting. Any plant species works.',
                },
                {
                  step: '02', icon: '🧠', color: '#e8f0fe', accent: '#6366f1',
                  title: 'AI Reads the Pattern',
                  desc: 'Our EfficientNetB0 model analyzes texture, color, and spot patterns to identify the exact disease.',
                },
                {
                  step: '03', icon: '💊', color: '#fff8e6', accent: '#f59e0b',
                  title: 'Get Your Treatment Plan',
                  desc: 'Receive the disease name, confidence score, symptoms explanation, and step-by-step cure guidance.',
                },
              ].map((item, i) => (
                <div key={i} className="card-hover" style={{
                  background: 'var(--white)',
                  borderRadius: '24px',
                  padding: '40px 32px',
                  border: '1px solid var(--border)',
                  position: 'relative', zIndex: 1,
                  boxShadow: '0 4px 24px rgba(26,61,43,0.06)',
                }}>
                  <div style={{
                    position: 'absolute', top: '-16px', left: '32px',
                    background: 'var(--green-deep)', color: 'white',
                    width: '34px', height: '34px', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.05em',
                    boxShadow: '0 4px 12px rgba(26,61,43,0.35)',
                  }}>{item.step}</div>

                  <div style={{
                    width: '76px', height: '76px',
                    background: item.color, borderRadius: '22px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '36px', marginBottom: '24px',
                    marginTop: '8px',
                  }}>{item.icon}</div>

                  <h3 style={{
                    fontSize: '1.15rem',
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--green-deep)',
                    marginBottom: '14px',
                  }}>{item.title}</h3>
                  <p style={{
                    fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.8',
                  }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT WE DETECT ── */}
        <section style={{
          padding: '110px 24px',
          background: 'var(--white)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '5px',
            background: 'linear-gradient(90deg, var(--green-deep), var(--green-leaf), var(--green-light), var(--green-leaf), var(--green-deep))',
          }} />

          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '80px', alignItems: 'center',
            }} className="hero-grid">

              {/* Left text */}
              <div>
                <span style={{
                  fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: 'var(--green-leaf)',
                  display: 'block', marginBottom: '14px',
                }}>Disease Detection</span>
                <h2 style={{
                  fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                  color: 'var(--green-deep)',
                  letterSpacing: '-0.03em',
                  marginBottom: '20px',
                }}>
                  What LeafScan Can Detect
                </h2>
                <p style={{
                  fontSize: '1rem', color: 'var(--text-muted)',
                  lineHeight: '1.85', marginBottom: '36px',
                }}>
                  Trained on the PlantVillage dataset with 38+ disease classes across
                  multiple plant species. Our model identifies fungal, bacterial, and
                  viral infections from a single leaf photo.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    { icon: '🍄', label: 'Fungal Diseases', desc: 'Blight, mold, rust, spot diseases', color: '#fee2e2', accent: '#ef4444' },
                    { icon: '🦠', label: 'Bacterial Infections', desc: 'Bacterial spot, canker, wilt', color: '#fef3c7', accent: '#f59e0b' },
                    { icon: '🔬', label: 'Viral Diseases', desc: 'Mosaic virus, leaf curl, yellowing', color: '#e8f0fe', accent: '#6366f1' },
                    { icon: '✅', label: 'Healthy Detection', desc: 'Confirms when a plant is disease-free', color: '#dcfce7', accent: '#22c55e' },
                  ].map((item, i) => (
                    <div key={i} className="card-hover" style={{
                      display: 'flex', alignItems: 'center', gap: '16px',
                      padding: '16px 20px',
                      background: 'var(--cream)',
                      borderRadius: '14px',
                      border: '1px solid var(--border)',
                    }}>
                      <div style={{
                        width: '48px', height: '48px', flexShrink: 0,
                        background: item.color, borderRadius: '12px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '22px',
                      }}>{item.icon}</div>
                      <div>
                        <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--green-deep)' }}>
                          {item.label}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — disease count display */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { plant: '🍅', name: 'Tomato', count: 10, color: '#fee2e2', bar: '#ef4444' },
                  { plant: '🥔', name: 'Potato', count: 3, color: '#fef3c7', bar: '#f59e0b' },
                  { plant: '🌹', name: 'Rose', count: 4, color: '#fce7f3', bar: '#ec4899' },
                  { plant: '🌽', name: 'Corn / Maize', count: 4, color: '#fef9c3', bar: '#eab308' },
                  { plant: '🍇', name: 'Grape', count: 4, color: '#ede9fe', bar: '#8b5cf6' },
                  { plant: '🍎', name: 'Apple', count: 4, color: '#dcfce7', bar: '#22c55e' },
                  { plant: '🫑', name: 'Pepper', count: 2, color: '#d1fae5', bar: '#10b981' },
                  { plant: '🍓', name: 'Strawberry', count: 2, color: '#fee2e2', bar: '#f43f5e' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                      width: '40px', height: '40px', flexShrink: 0,
                      background: item.color, borderRadius: '10px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '20px',
                    }}>{item.plant}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        display: 'flex', justifyContent: 'space-between',
                        marginBottom: '6px',
                      }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--green-deep)' }}>
                          {item.name}
                        </span>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                          {item.count} classes
                        </span>
                      </div>
                      <div style={{ height: '5px', background: 'var(--cream-dark)', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{
                          height: '100%',
                          width: `${(item.count / 10) * 100}%`,
                          background: item.bar, borderRadius: '3px',
                          transition: 'width 1s ease',
                        }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section style={{
          padding: '110px 24px',
          background: 'linear-gradient(160deg, #071a0f 0%, #0d2b1a 50%, #1a3d2b 100%)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(rgba(82,183,136,0.08) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }} />
            <svg style={{ position: 'absolute', bottom: '-60px', right: '-40px', opacity: 0.05 }}
              width="400" height="500" viewBox="0 0 200 280">
              <path d="M100 270 C100 270 10 200 10 110 C10 30 90 5 100 5 C110 5 190 30 190 110 C190 200 100 270 100 270Z" fill="#52b788"/>
              <line x1="100" y1="5" x2="100" y2="270" stroke="#95d5b2" strokeWidth="2"/>
            </svg>
          </div>

          <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '72px' }}>
              <span style={{
                fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.18em',
                textTransform: 'uppercase', color: 'var(--green-light)',
                display: 'block', marginBottom: '14px',
              }}>Why LeafScan</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                color: '#ffffff', letterSpacing: '-0.03em',
              }}>
                Built for Plant Lovers &amp; Experts
              </h2>
              <div style={{
                width: '60px', height: '3px', borderRadius: '2px',
                background: 'linear-gradient(90deg, #52b788, #95d5b2)',
                margin: '20px auto 0',
              }} />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}>
              {[
                { icon: '⚡', title: 'Instant Diagnosis', desc: 'Get results in under 2 seconds. No waiting, no queues.' },
                { icon: '🎯', title: '95%+ Accuracy', desc: 'EfficientNetB0 trained on PlantVillage — state-of-the-art precision.' },
                { icon: '💊', title: 'Full Treatment Plan', desc: 'Not just detection — actionable cure and prevention steps every time.' },
                { icon: '🌍', title: 'Any Plant Species', desc: 'Roses, tomatoes, grapes, apples, strawberries and many more.' },
                { icon: '📱', title: 'Simple Interface', desc: 'Drag, drop, done. No technical knowledge required whatsoever.' },
                { icon: '🔒', title: 'Your Data is Safe', desc: 'Images processed in real-time and never stored on our servers.' },
              ].map((feat, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px', padding: '32px 26px',
                  transition: 'all 0.3s ease', cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(82,183,136,0.08)'
                  e.currentTarget.style.borderColor = 'rgba(82,183,136,0.35)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}>
                  <div style={{
                    fontSize: '2rem', marginBottom: '18px',
                    width: '56px', height: '56px',
                    background: 'rgba(82,183,136,0.12)',
                    borderRadius: '16px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid rgba(82,183,136,0.2)',
                  }}>{feat.icon}</div>
                  <h3 style={{
                    fontSize: '1rem', fontFamily: 'Playfair Display, serif',
                    color: '#ffffff', marginBottom: '10px',
                  }}>{feat.title}</h3>
                  <p style={{
                    fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: '1.75',
                  }}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{
          padding: '120px 24px',
          background: 'var(--cream)',
          textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '600px', height: '600px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(82,183,136,0.08) 0%, transparent 65%)',
            }} />
          </div>

          <div style={{ maxWidth: '640px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '80px', marginBottom: '8px', lineHeight: 1 }}>🌿</div>
            <div style={{ fontSize: '28px', marginBottom: '28px', lineHeight: 1 }}>🔬</div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--green-deep)',
              letterSpacing: '-0.03em',
              marginBottom: '20px',
            }}>
              Your Plant Needs You.
            </h2>
            <p style={{
              fontSize: '1.05rem', color: 'var(--text-muted)',
              marginBottom: '44px', lineHeight: '1.85',
            }}>
             Don't wait for the disease to spread. Upload a photo of your plant now
and get a full diagnosis — completely free, completely instant.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/detect" style={{
                textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '18px 44px',
                background: 'linear-gradient(135deg, #1a3d2b, #2d6a4f)',
                color: 'white', borderRadius: '14px',
                fontSize: '1.05rem', fontWeight: '700',
                boxShadow: '0 10px 40px rgba(26,61,43,0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 18px 50px rgba(26,61,43,0.4)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(26,61,43,0.3)'
              }}>
                🔬 Diagnose Now — It's Free
              </Link>
              <Link href="/about" style={{
                textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '18px 36px',
                background: 'transparent',
                color: 'var(--green-deep)',
                borderRadius: '14px',
                fontSize: '1.05rem', fontWeight: '600',
                border: '2px solid var(--green-deep)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--green-mist)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.transform = 'translateY(0)'
              }}>
                ℹ️ About the Project
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
          }
          .hero-visual { order: -1; }
          .step-connector { display: none !important; }
        }
      `}</style>
    </>
  )
}