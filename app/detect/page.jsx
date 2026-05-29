'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageUploader from '../components/ImageUploader'
import ResultCard from '../components/ResultCard'
import { diseases } from '../lib/diseases'

export default function DetectPage() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [loadingStep, setLoadingStep] = useState(0)

  const loadingSteps = [
    { icon: '📷', text: 'Reading plant image...' },
    { icon: '🧠', text: 'Running AI analysis...' },
    { icon: '🔬', text: 'Identifying disease pattern...' },
    { icon: '💊', text: 'Preparing treatment plan...' },
  ]

  const handleImageSelect = (file, previewUrl) => {
    setSelectedFile(file)
    setPreview(previewUrl)
    setResult(null)
    setError(null)
  }


const handleAnalyse = async () => {
  if (!selectedFile) return;

  setLoading(true);
  setError(null);
  setResult(null);
  setLoadingStep(0);

  // loading animation
  for (let i = 0; i < loadingSteps.length; i++) {
    setLoadingStep(i);
    await new Promise(r => setTimeout(r, 700));
  }

  try {
    const formData = new FormData();
    formData.append("file", selectedFile);

    const response = await fetch(
      "https://leafscan-backend-lff1.onrender.com/predict",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) throw new Error("Prediction failed");

    const data = await response.json();

    console.log("API RESPONSE:", data);

    // ✅ STEP 1: clean backend output
    const rawClass = data.class || "";
    const cleanClass = rawClass.split("___").pop().toLowerCase();

    // ✅ STEP 2: better matching logic
    const matched = diseases.find((d) =>
      d.id.toLowerCase().includes(cleanClass)
    );

    if (matched) {
      setResult({
        ...matched,
        confidence: data.confidence,
      });
    } else {
      // fallback (only if mismatch)
      setResult({
        name: rawClass,
        plant: "Unknown Plant",
        plantIcon: "🌿",
        scientificName: "—",
        type: "Unknown",
        typeColor: "#6366f1",
        severity: "Medium",
        severityColor: "#f59e0b",
        description: "Model prediction received but not mapped to UI data.",
        symptoms: [],
        causes: [],
        treatment: [],
        prevention: [],
        confidence: data.confidence || 0.5,
      });
    }
  } catch (err) {
    console.log(err);

    const demo =
      diseases[Math.floor(Math.random() * diseases.length)];

    setResult({
      ...demo,
      confidence: 0.9 + Math.random() * 0.08,
    });

    setError("demo");
  } finally {
    setLoading(false);
  }
};

  const handleReset = () => {
    setSelectedFile(null)
    setPreview(null)
    setResult(null)
    setError(null)
  }

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--cream)', paddingBottom: '80px' }}>

        {/* ── Page Header ── */}
        <div style={{
          background: 'linear-gradient(135deg, var(--green-deep), var(--green-mid))',
          padding: '64px 24px 80px',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}>
          {/* Background decorations */}
          <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(rgba(82,183,136,0.1) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }} />
            <svg style={{ position: 'absolute', right: '-30px', top: '-20px', opacity: 0.07 }}
              width="260" height="320" viewBox="0 0 200 280">
              <path d="M100 270 C100 270 10 200 10 110 C10 30 90 5 100 5 C110 5 190 30 190 110 C190 200 100 270 100 270Z" fill="white"/>
              <line x1="100" y1="5" x2="100" y2="270" stroke="white" strokeWidth="3"/>
              <line x1="100" y1="80" x2="55" y2="115" stroke="white" strokeWidth="2"/>
              <line x1="100" y1="130" x2="148" y2="158" stroke="white" strokeWidth="2"/>
            </svg>
            <svg style={{ position: 'absolute', left: '-20px', bottom: '-20px', opacity: 0.05, transform: 'scaleX(-1)' }}
              width="200" height="260" viewBox="0 0 200 280">
              <path d="M100 270 C100 270 10 200 10 110 C10 30 90 5 100 5 C110 5 190 30 190 110 C190 200 100 270 100 270Z" fill="white"/>
              <line x1="100" y1="5" x2="100" y2="270" stroke="white" strokeWidth="3"/>
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
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              🔬 AI Disease Detection
            </div>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#ffffff',
              letterSpacing: '-0.03em',
              marginBottom: '14px',
            }}>
              Diagnose Your Plant
            </h1>
            <p style={{
              fontSize: '1rem', color: 'rgba(255,255,255,0.65)',
              maxWidth: '520px', margin: '0 auto',
              lineHeight: '1.7',
            }}>
              Upload a clear photo of your plant and our AI will identify
              the disease with a full treatment plan in seconds.
            </p>
          </div>
        </div>

        {/* ── Main Content ── */}
        <div style={{
          maxWidth: '1100px',
          margin: '-40px auto 0',
          padding: '0 24px',
          position: 'relative',
          zIndex: 2,
        }}>

          {/* Demo mode banner */}
          {error === 'demo' && (
            <div style={{
              background: '#fef9c3',
              border: '1px solid #fde047',
              borderRadius: '12px',
              padding: '14px 20px',
              marginBottom: '24px',
              display: 'flex', alignItems: 'center', gap: '12px',
              fontSize: '0.85rem', color: '#854d0e',
            }}>
              <span style={{ fontSize: '1.2rem' }}>⚠️</span>
              <div>
                <strong>Demo Mode:</strong> Backend not connected yet.
                Showing a sample result so you can preview the UI.
                Connect the FastAPI backend to get real predictions.
              </div>
            </div>
          )}

          <div style={{
            display: 'grid',
            gridTemplateColumns: result ? '1fr 1.4fr' : '1fr',
            gap: '32px',
            alignItems: 'start',
          }} className="detect-grid">

            {/* ── Left Panel — Upload ── */}
            <div>
              <div style={{
                background: 'var(--white)',
                borderRadius: '24px',
                padding: '32px',
                border: '1px solid var(--border)',
                boxShadow: '0 8px 32px rgba(26,61,43,0.08)',
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  marginBottom: '24px',
                }}>
                  <div style={{
                    width: '40px', height: '40px',
                    background: 'var(--green-mist)',
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px',
                    border: '1px solid var(--green-light)',
                  }}>📷</div>
                  <div>
                    <h2 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.2rem',
                      color: 'var(--green-deep)',
                    }}>Upload Plant Photo</h2>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      Clear photo = better diagnosis
                    </p>
                  </div>
                </div>

                <ImageUploader onImageSelect={handleImageSelect} />

                {/* Tips */}
                {!selectedFile && (
                  <div style={{
                    marginTop: '24px',
                    padding: '16px',
                    background: 'var(--green-mist)',
                    borderRadius: '12px',
                    border: '1px solid var(--green-light)',
                  }}>
                    <div style={{
                      fontSize: '0.75rem', fontWeight: '700',
                      color: 'var(--green-mid)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '10px',
                    }}>📸 Photo Tips</div>
                    {[
                      'Use natural daylight for best results',
                      'Make sure the plant fills the frame',
                      'Capture any spots, discoloration or damage',
                      'Avoid blurry or dark images',
                    ].map((tip, i) => (
                      <div key={i} style={{
                        display: 'flex', gap: '8px',
                        fontSize: '0.8rem', color: 'var(--text-mid)',
                        marginBottom: i < 3 ? '6px' : 0,
                      }}>
                        <span style={{ color: 'var(--green-leaf)', fontWeight: '700' }}>✓</span>
                        {tip}
                      </div>
                    ))}
                  </div>
                )}

                {/* Analyse button */}
                {selectedFile && !loading && (
                  <button
                    onClick={handleAnalyse}
                    style={{
                      width: '100%',
                      marginTop: '20px',
                      padding: '16px',
                      background: 'linear-gradient(135deg, var(--green-deep), var(--green-mid))',
                      color: 'white',
                      border: 'none',
                      borderRadius: '14px',
                      fontSize: '1rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      boxShadow: '0 8px 24px rgba(26,61,43,0.3)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 14px 32px rgba(26,61,43,0.4)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,61,43,0.3)'
                    }}
                  >
                    🔬 Analyse Plant
                  </button>
                )}

                {/* Reset button */}
                {result && (
                  <button
                    onClick={handleReset}
                    style={{
                      width: '100%',
                      marginTop: '12px',
                      padding: '12px',
                      background: 'transparent',
                      color: 'var(--text-muted)',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      fontSize: '0.88rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--cream)'
                      e.currentTarget.style.color = 'var(--green-deep)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = 'var(--text-muted)'
                    }}
                  >
                    🔄 Scan Another Plant
                  </button>
                )}
              </div>
            </div>

            {/* ── Right Panel — Loading / Result ── */}
            {loading && (
              <div style={{
                background: 'var(--white)',
                borderRadius: '24px',
                padding: '60px 32px',
                border: '1px solid var(--border)',
                boxShadow: '0 8px 32px rgba(26,61,43,0.08)',
                textAlign: 'center',
              }}>
                {/* Spinner */}
                <div style={{
                  width: '80px', height: '80px',
                  margin: '0 auto 28px',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    borderRadius: '50%',
                    border: '3px solid var(--green-mist)',
                    borderTopColor: 'var(--green-leaf)',
                    animation: 'spin 1s linear infinite',
                  }} />
                  <div style={{
                    position: 'absolute', inset: '12px',
                    borderRadius: '50%',
                    border: '2px solid var(--cream-dark)',
                    borderTopColor: 'var(--green-mid)',
                    animation: 'spin 1.5s linear infinite reverse',
                  }} />
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '24px',
                  }}>
                    {loadingSteps[loadingStep]?.icon}
                  </div>
                </div>

                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.3rem',
                  color: 'var(--green-deep)',
                  marginBottom: '10px',
                }}>Analysing Your Plant</h3>

                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                  marginBottom: '32px',
                }}>
                  {loadingSteps[loadingStep]?.text}
                </p>

                {/* Step indicators */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
                  {loadingSteps.map((step, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: '12px',
                      padding: '10px 16px',
                      borderRadius: '10px',
                      background: i === loadingStep
                        ? 'var(--green-mist)'
                        : i < loadingStep ? 'var(--cream)' : 'transparent',
                      border: i === loadingStep ? '1px solid var(--green-light)' : '1px solid transparent',
                      transition: 'all 0.3s',
                    }}>
                      <span style={{ fontSize: '1.1rem' }}>{step.icon}</span>
                      <span style={{
                        fontSize: '0.85rem',
                        fontWeight: i <= loadingStep ? '600' : '400',
                        color: i === loadingStep
                          ? 'var(--green-deep)'
                          : i < loadingStep ? 'var(--text-muted)' : 'var(--border)',
                      }}>{step.text}</span>
                      {i < loadingStep && (
                        <span style={{ marginLeft: 'auto', color: '#22c55e', fontWeight: '700' }}>✓</span>
                      )}
                    </div>
                  ))}
                </div>

                <style>{`
                  @keyframes spin {
                    to { transform: rotate(360deg); }
                  }
                `}</style>
              </div>
            )}

            {/* Result card */}
            {result && !loading && (
              <div>
                <ResultCard result={result} />
              </div>
            )}
          </div>

          {/* ── Bottom info strip ── */}
          {!result && !loading && (
            <div style={{
              marginTop: '48px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
            }}>
              {[
                { icon: '🌍', title: 'Any Plant Species', desc: 'Roses, fruit trees, houseplants and more' },
                { icon: '⚡', title: 'Results in 2 Seconds', desc: 'Fast AI-powered analysis' },
                { icon: '💊', title: 'Full Treatment Plan', desc: 'Cure and prevention steps included' },
                { icon: '🔒', title: 'Privacy Safe', desc: 'Images are never stored' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'var(--white)',
                  borderRadius: '16px',
                  padding: '20px',
                  border: '1px solid var(--border)',
                  display: 'flex', gap: '14px', alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: '42px', height: '42px', flexShrink: 0,
                    background: 'var(--green-mist)',
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px',
                    border: '1px solid var(--green-light)',
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '0.88rem', color: 'var(--green-deep)' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '3px' }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .detect-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}