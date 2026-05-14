"use client"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function AboutPage() {
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
            <svg style={{ position: 'absolute', right: '-20px', top: '-10px', opacity: 0.07 }}
              width="220" height="280" viewBox="0 0 200 280">
              <path d="M100 270 C100 270 10 200 10 110 C10 30 90 5 100 5 C110 5 190 30 190 110 C190 200 100 270 100 270Z" fill="white"/>
              <line x1="100" y1="5" x2="100" y2="270" stroke="white" strokeWidth="3"/>
              <line x1="100" y1="80" x2="55" y2="115" stroke="white" strokeWidth="2"/>
              <line x1="100" y1="130" x2="148" y2="158" stroke="white" strokeWidth="2"/>
            </svg>
            <svg style={{ position: 'absolute', left: '-20px', bottom: '-10px', opacity: 0.05, transform: 'scaleX(-1)' }}
              width="160" height="200" viewBox="0 0 200 280">
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
              🎓 Final Year Project
            </div>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#ffffff', letterSpacing: '-0.03em',
              marginBottom: '14px',
            }}>
              About LeafScan
            </h1>
            <p style={{
              fontSize: '1rem', color: 'rgba(255,255,255,0.65)',
              maxWidth: '520px', margin: '0 auto', lineHeight: '1.7',
            }}>
              An AI-powered plant disease detection system built as a
              Final Year Project at the University of Agriculture, Faisalabad.
            </p>
          </div>
        </div>

        <div style={{
          maxWidth: '1000px', margin: '-40px auto 0',
          padding: '0 24px', position: 'relative', zIndex: 2,
        }}>

          {/* ── Project Overview ── */}
          <div style={{
            background: 'var(--white)', borderRadius: '24px',
            padding: '40px', border: '1px solid var(--border)',
            boxShadow: '0 8px 32px rgba(26,61,43,0.08)',
            marginBottom: '24px',
          }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{
                width: '48px', height: '48px',
                background: 'var(--green-mist)', borderRadius: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '24px', border: '1px solid var(--green-light)',
                flexShrink: 0,
              }}>🌿</div>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.5rem', color: 'var(--green-deep)',
                letterSpacing: '-0.02em',
              }}>Project Overview</h2>
            </div>

            <p style={{
              fontSize: '0.95rem', color: 'var(--text-mid)',
              lineHeight: '1.9', marginBottom: '20px',
            }}>
              LeafScan is a web-based AI application that allows users to upload photos of plants
              and receive instant disease diagnosis powered by deep learning. The system uses the
              EfficientNetB0 architecture trained with transfer learning on the PlantVillage dataset
              to classify plant diseases with high accuracy.
            </p>
            <p style={{
              fontSize: '0.95rem', color: 'var(--text-mid)',
              lineHeight: '1.9',
            }}>
              Once a disease is detected, the system provides detailed information including
              the disease name, confidence score, scientific name, symptoms, causes, and a
              complete treatment and prevention plan — making it practical and useful for
              plant owners, gardeners, botanists, and researchers alike.
            </p>
          </div>

          {/* ── Two column: Objectives + Scope ── */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '24px', marginBottom: '24px',
          }} className="about-grid">

            {/* Objectives */}
            <div style={{
              background: 'var(--white)', borderRadius: '24px',
              padding: '32px', border: '1px solid var(--border)',
              boxShadow: '0 4px 20px rgba(26,61,43,0.06)',
            }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{
                  width: '42px', height: '42px',
                  background: '#e8f0fe', borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', flexShrink: 0,
                }}>🎯</div>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.1rem', color: 'var(--green-deep)',
                }}>Objectives</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Develop a deep learning model using transfer learning',
                  'Build a user-friendly web interface for plant owners',
                  'Provide accurate disease predictions with recommendations',
                  'Enable early disease diagnosis to minimize plant loss',
                  'Create a comprehensive plant disease encyclopedia',
                ].map((obj, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: '10px',
                    fontSize: '0.85rem', color: 'var(--text-mid)',
                    lineHeight: '1.6',
                  }}>
                    <span style={{
                      color: 'var(--green-leaf)', fontWeight: '800',
                      flexShrink: 0, marginTop: '1px',
                    }}>✓</span>
                    {obj}
                  </div>
                ))}
              </div>
            </div>

            {/* Scope */}
            <div style={{
              background: 'var(--white)', borderRadius: '24px',
              padding: '32px', border: '1px solid var(--border)',
              boxShadow: '0 4px 20px rgba(26,61,43,0.06)',
            }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{
                  width: '42px', height: '42px',
                  background: '#fef3c7', borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', flexShrink: 0,
                }}>🔭</div>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.1rem', color: 'var(--green-deep)',
                }}>Project Scope</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Detection of diseases from plant photos',
                  'Support for multiple plant species',
                  'Pre-trained EfficientNetB0 model for accuracy',
                  'Display of disease details and cure recommendations',
                  'Extendable to more plants and mobile platforms',
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: '10px',
                    fontSize: '0.85rem', color: 'var(--text-mid)',
                    lineHeight: '1.6',
                  }}>
                    <span style={{
                      color: 'var(--earth-light)', fontWeight: '800',
                      flexShrink: 0, marginTop: '1px',
                    }}>→</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Tech Stack ── */}
          <div style={{
            background: 'var(--white)', borderRadius: '24px',
            padding: '40px', border: '1px solid var(--border)',
            boxShadow: '0 4px 20px rgba(26,61,43,0.06)',
            marginBottom: '24px',
          }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '28px' }}>
              <div style={{
                width: '48px', height: '48px',
                background: '#fce7f3', borderRadius: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '24px', flexShrink: 0,
              }}>⚙️</div>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.5rem', color: 'var(--green-deep)',
                letterSpacing: '-0.02em',
              }}>Technology Stack</h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
            }}>
              {[
                {
                  category: 'Frontend',
                  icon: '🖥️',
                  color: '#e8f0fe',
                  items: ['Next.js', 'Tailwind CSS', 'React Hooks'],
                },
                {
                  category: 'Backend',
                  icon: '⚡',
                  color: '#fef3c7',
                  items: ['FastAPI', 'Python', 'REST API'],
                },
                {
                  category: 'AI / ML',
                  icon: '🧠',
                  color: '#ede9fe',
                  items: ['TensorFlow', 'Keras', 'EfficientNetB0'],
                },
                {
                  category: 'Image Processing',
                  icon: '🔬',
                  color: '#dcfce7',
                  items: ['OpenCV', 'NumPy', 'PIL / Pillow'],
                },
                {
                  category: 'Dataset',
                  icon: '📊',
                  color: '#fce7f3',
                  items: ['PlantVillage', '38+ Classes', '50,000+ Images'],
                },
                {
                  category: 'Deployment',
                  icon: '🚀',
                  color: '#fff7ed',
                  items: ['Vercel', 'Render', 'GitHub'],
                },
              ].map((tech, i) => (
                <div key={i} style={{
                  borderRadius: '16px',
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    background: tech.color,
                    padding: '14px 18px',
                    display: 'flex', gap: '10px', alignItems: 'center',
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>{tech.icon}</span>
                    <span style={{
                      fontSize: '0.8rem', fontWeight: '700',
                      color: 'var(--green-deep)',
                      letterSpacing: '0.04em',
                    }}>{tech.category}</span>
                  </div>
                  <div style={{ padding: '14px 18px', background: 'var(--cream)' }}>
                    {tech.items.map((item, j) => (
                      <div key={j} style={{
                        fontSize: '0.82rem', color: 'var(--text-mid)',
                        padding: '4px 0',
                        borderBottom: j < tech.items.length - 1 ? '1px solid var(--border)' : 'none',
                        fontWeight: '500',
                      }}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Methodology ── */}
          <div style={{
            background: 'var(--white)', borderRadius: '24px',
            padding: '40px', border: '1px solid var(--border)',
            boxShadow: '0 4px 20px rgba(26,61,43,0.06)',
            marginBottom: '24px',
          }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '28px' }}>
              <div style={{
                width: '48px', height: '48px',
                background: 'var(--green-mist)', borderRadius: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '24px', flexShrink: 0,
              }}>🔬</div>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.5rem', color: 'var(--green-deep)',
                letterSpacing: '-0.02em',
              }}>Methodology</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                {
                  step: '01', icon: '📊', title: 'Dataset Collection',
                  desc: 'The PlantVillage dataset was used — a publicly available labeled dataset containing 50,000+ high-quality images of healthy and diseased plants across 38 disease classes.',
                },
                {
                  step: '02', icon: '🧹', title: 'Data Preprocessing',
                  desc: 'Images resized to 224×224 pixels, normalized, and augmented using rotation, flipping, zooming, and brightness adjustment to improve model generalization.',
                },
                {
                  step: '03', icon: '🧠', title: 'Transfer Learning',
                  desc: 'EfficientNetB0 pre-trained on ImageNet was used. Base layers frozen initially, then custom dense layers added. Fine-tuning performed by unfreezing selected base layers.',
                },
                {
                  step: '04', icon: '⚡', title: 'API Integration',
                  desc: 'Trained model exported and served via FastAPI. The frontend sends the plant image, the backend processes it through the model and returns prediction results.',
                },
                {
                  step: '05', icon: '🧪', title: 'Testing & Validation',
                  desc: 'System tested on unseen plant images. Functional and accuracy testing performed to ensure reliable predictions across all supported plant species.',
                },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '20px', alignItems: 'flex-start',
                  padding: '20px 24px',
                  background: 'var(--cream)',
                  borderRadius: '16px',
                  border: '1px solid var(--border)',
                }}>
                  <div style={{
                    width: '44px', height: '44px', flexShrink: 0,
                    background: 'var(--green-deep)',
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px',
                  }}>{item.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                      <span style={{
                        fontSize: '0.68rem', fontWeight: '800',
                        color: 'var(--green-leaf)',
                        letterSpacing: '0.1em',
                      }}>STEP {item.step}</span>
                      <h4 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '1rem', color: 'var(--green-deep)',
                      }}>{item.title}</h4>
                    </div>
                    <p style={{
                      fontSize: '0.85rem', color: 'var(--text-muted)',
                      lineHeight: '1.75', margin: 0,
                    }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Developer Card ── */}
          <div style={{
            background: 'linear-gradient(135deg, var(--green-deep), var(--green-mid))',
            borderRadius: '24px', padding: '40px',
            position: 'relative', overflow: 'hidden',
            marginBottom: '24px',
          }}>
            <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(rgba(82,183,136,0.1) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }} />
              <svg style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.06 }}
                width="200" height="250" viewBox="0 0 200 280">
                <path d="M100 270 C100 270 10 200 10 110 C10 30 90 5 100 5 C110 5 190 30 190 110 C190 200 100 270 100 270Z" fill="white"/>
                <line x1="100" y1="5" x2="100" y2="270" stroke="white" strokeWidth="3"/>
              </svg>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                fontSize: '0.72rem', fontWeight: '700',
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)', marginBottom: '20px',
              }}>👨‍💻 Developer</div>

              <div style={{
                display: 'flex', gap: '24px', alignItems: 'center',
                flexWrap: 'wrap',
              }}>
                {/* Avatar */}
                <div style={{
                  width: '80px', height: '80px', flexShrink: 0,
                  background: 'rgba(255,255,255,0.12)',
                  borderRadius: '20px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '40px',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}>👨‍🎓</div>

                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.6rem', color: '#ffffff',
                    letterSpacing: '-0.02em', marginBottom: '6px',
                  }}>M. Haseeb Younas</h3>
                  <div style={{
                    fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)',
                    marginBottom: '14px',
                  }}>
                    BS Computer Science · 2022-AG-7804
                  </div>

                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {[
                      { icon: '🎓', text: 'University of Agriculture, Faisalabad' },
                      { icon: '👨‍🏫', text: 'Supervisor: Dr. Imran Mumtaz' },
                      { icon: '📅', text: 'Final Year Project 2024–25' },
                    ].map((info, i) => (
                      <div key={i} style={{
                        display: 'flex', alignItems: 'center', gap: '6px',
                        padding: '6px 14px',
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '20px',
                        fontSize: '0.78rem', color: 'rgba(255,255,255,0.75)',
                        fontWeight: '500',
                      }}>
                        <span>{info.icon}</span>
                        {info.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── CTA ── */}
          <div style={{
            background: 'var(--white)', borderRadius: '24px',
            padding: '40px', border: '1px solid var(--border)',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(26,61,43,0.06)',
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔬</div>
            <h3 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.5rem', color: 'var(--green-deep)',
              marginBottom: '12px', letterSpacing: '-0.02em',
            }}>
              Try LeafScan Now
            </h3>
            <p style={{
              fontSize: '0.92rem', color: 'var(--text-muted)',
              marginBottom: '28px', lineHeight: '1.7',
              maxWidth: '420px', margin: '0 auto 28px',
            }}>
              Upload a plant photo and see the AI detection system in action.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/detect" style={{
                textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 32px',
                background: 'linear-gradient(135deg, var(--green-deep), var(--green-mid))',
                color: 'white', borderRadius: '12px',
                fontSize: '0.95rem', fontWeight: '700',
                boxShadow: '0 8px 24px rgba(26,61,43,0.25)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 14px 32px rgba(26,61,43,0.35)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,61,43,0.25)'
              }}>
                🌿 Diagnose a Plant
              </Link>
              <Link href="/diseases" style={{
                textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 28px',
                background: 'transparent',
                color: 'var(--green-deep)', borderRadius: '12px',
                fontSize: '0.95rem', fontWeight: '600',
                border: '2px solid var(--green-deep)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--green-mist)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.transform = 'translateY(0)'
              }}>
                📚 Disease Library
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 640px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}