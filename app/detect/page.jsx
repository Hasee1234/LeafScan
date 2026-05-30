// 'use client'
// import { useState } from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import ImageUploader from '../components/ImageUploader'
// import ResultCard from '../components/ResultCard'
// import { diseases } from '../lib/diseases'

// export default function DetectPage() {
//   const [selectedFile, setSelectedFile] = useState(null)
//   const [preview, setPreview] = useState(null)
//   const [result, setResult] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)
//   const [loadingStep, setLoadingStep] = useState(0)

//   const loadingSteps = [
//     { icon: '📷', text: 'Reading plant image...' },
//     { icon: '🧠', text: 'Running AI analysis...' },
//     { icon: '🔬', text: 'Identifying disease pattern...' },
//     { icon: '💊', text: 'Preparing treatment plan...' },
//   ]

//   const titleCase = (value) =>
//     String(value || '')
//       .replace(/[_-]+/g, ' ')
//       .trim()
//       .split(/\s+/)
//       .filter(Boolean)
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//       .join(' ')

//   const buildFallbackResult = (rawClass, confidence) => {
//     const classParts = String(rawClass || '')
//       .split('___')
//       .map((part) => part.trim())
//       .filter(Boolean)

//     const plantPart = classParts[0] || 'Unknown Plant'
//     const diseasePart = classParts.slice(1).join(' ').trim()

//     const plant = titleCase(plantPart.replace(/,/g, ''))
//     const diseaseName = titleCase(diseasePart.replace(/,/g, '')) || 'Unknown Disease'

//     const lower = String(rawClass || '').toLowerCase()
//     const type = lower.includes('virus') ? 'Viral' : lower.includes('bacterial') ? 'Bacterial' : 'Fungal'
//     const typeColor = type === 'Viral' ? '#6366f1' : type === 'Bacterial' ? '#f59e0b' : '#8b5cf6'
//     const severity = lower.includes('late') || lower.includes('critical') || lower.includes('rot') ? 'High' : lower.includes('mildew') ? 'Medium' : 'Medium'
//     const severityColor = severity === 'High' ? '#ef4444' : '#f59e0b'

//     const plantIconMap = {
//       Cherry: '🍒',
//       Grape: '🍇',
//       Apple: '🍎',
//       Tomato: '🍅',
//       Potato: '🥔',
//       Peach: '🍑',
//       Orange: '🍊',
//       Strawberry: '🍓',
//       Blueberry: '🫐',
//       Pepper: '🌶️',
//       Squash: '🎃',
//       Soybean: '🌱',
//       Raspberry: '🍓',
//     }

//     return {
//       name: diseaseName,
//       plant,
//       plantIcon: plantIconMap[plant] || '🌿',
//       scientificName: '—',
//       type,
//       typeColor,
//       severity,
//       severityColor,
//       description: `No curated profile was available for ${diseaseName.toLowerCase()}, so LeafScan is showing inferred details from the detected class label.`,
//       symptoms: [
//         'Leaf discoloration or spotting',
//         'Reduced plant vigor',
//         'Visible fungal or bacterial growth on leaves or fruit',
//         'Premature leaf drop in severe cases',
//       ],
//       causes: [
//         'Pathogen-specific infection linked to the detected class',
//         'Warm, humid, or wet conditions favoring disease spread',
//         'Poor airflow or leftover infected plant debris',
//       ],
//       treatment: [
//         'Remove infected tissue and sanitize tools',
//         'Improve airflow and reduce moisture around the plant',
//         'Use an appropriate fungicide, bactericide, or treatment recommended by a specialist',
//       ],
//       prevention: [
//         'Monitor plants regularly for early symptoms',
//         'Practice good sanitation and spacing',
//         'Avoid overhead watering and remove infected debris',
//       ],
//       confidence,
//     }
//   }

//   const handleImageSelect = (file, previewUrl) => {
//     setSelectedFile(file)
//     setPreview(previewUrl)
//     setResult(null)
//     setError(null)
//   }


// const handleAnalyse = async () => {
//   if (!selectedFile) return;

//   setLoading(true);
//   setError(null);
//   setResult(null);
//   setLoadingStep(0);

//   try {
//     // loading animation
//     for (let i = 0; i < loadingSteps.length; i++) {
//       setLoadingStep(i);
//       await new Promise(r => setTimeout(r, 500));
//     }

//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     const response = await fetch(
//       "https://leafscan-backend-lff1.onrender.com/predict",
//       {
//         method: "POST",
//         body: formData,
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`Backend error: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log("API RESPONSE:", data);

//   if (!data?.class) {
//   throw new Error("Invalid backend response");
// }
// const rawClass = (data.class || "").toLowerCase();

// const normalize = (str) =>
//   String(str || "")
//     .toLowerCase()
//     .replace(/___/g, "_")
//     .replace(/__/g, "_")
//     .replace(/\s+/g, "_")
//     .replace(/[^a-z0-9_]/g, "")
//     .replace(/_+/g, "_")
//     .replace(/^_|_$/g, "");

// const [rawPlant, ...rawDiseaseParts] = rawClass.split(/___+/).map((part) => part.trim())
// const rawDisease = rawDiseaseParts.join(" ").trim()
// const normalizedPlant = normalize(rawPlant)
// const normalizedDisease = normalize(rawDisease)

// const classToId = {
//   // Tomato
//   "Tomato___Early_blight":                                "tomato-early-blight",
//   "Tomato___Late_blight":                                 "tomato-late-blight",
//   "Tomato___Bacterial_spot":                              "tomato-bacterial-spot",
//   "Tomato___Leaf_Mold":                                   "tomato-leaf-mold",
//   "Tomato___Septoria_leaf_spot":                          "tomato-early-blight",
//   "Tomato___Spider_mites Two-spotted_spider_mite":        "tomato-early-blight",
//   "Tomato___Target_Spot":                                 "tomato-early-blight",
//   "Tomato___Tomato_mosaic_virus":                         "tomato-mosaic-virus",
//   "Tomato___Tomato_Yellow_Leaf_Curl_Virus":               "tomato-mosaic-virus",
//   // Potato
//   "Potato___Early_blight":                                "potato-early-blight",
//   "Potato___Late_blight":                                 "potato-late-blight",
//   // Apple
//   "Apple___Apple_scab":                                   "apple-scab",
//   "Apple___Black_rot":                                    "apple-scab",
//   "Apple___Cedar_apple_rust":                             "apple-scab",
//   // Grape
//   "Grape___Black_rot":                                    "grape-black-rot",
//   "Grape___Esca_(Black_Measles)":                         "grape-black-rot",
//   "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)":           "grape-black-rot",
//   // Strawberry
//   "Strawberry___Leaf_scorch":                             "strawberry-leaf-scorch",
//   // Others mapped to closest
//   "Peach___Bacterial_spot":                               "tomato-bacterial-spot",
//   "Pepper,_bell___Bacterial_spot":                        "tomato-bacterial-spot",
// }

// const matched = diseases.find((d) => d.id === classToId[data.class])

//     // ✅ REAL RESULT (IMPORTANT FIX)
//     if (matched) {
//       setResult({
//         ...matched,
//         confidence: data.confidence ?? 0,
//       });
//       return;
//     }
//     // If healthy class detected
//     if (data.class.toLowerCase().includes('healthy')) {
//       setResult({
//         id: 'healthy',
//         name: 'Healthy Plant',
//         plant: data.class.split('___')[0].replace(/_/g, ' '),
//         plantIcon: '🌿',
//         scientificName: '—',
//         type: 'None',
//         typeColor: '#22c55e',
//         severity: 'None',
//         severityColor: '#22c55e',
//         description: 'Your plant appears healthy! No disease was detected.',
//         symptoms: ['No symptoms detected'],
//         causes: ['No disease present'],
//         treatment: ['Continue regular watering and fertilization', 'Monitor periodically'],
//         prevention: ['Maintain good airflow', 'Avoid overwatering', 'Check regularly for early signs'],
//         confidence: data.confidence ?? 1,
//       })
//       return
//     }

//     // fallback for unmatched disease classes
//     setResult(buildFallbackResult(data.class, data.confidence ?? 0.5))
//     // fallback ONLY when no match
//     setResult(buildFallbackResult(rawClass, data.confidence ?? 0.5));

//   } catch (err) {
//     console.log("ERROR:", err);

//     setError("fetch");

//     // optional fallback demo ONLY ON ERROR
//     // const demo =
//     //   diseases[Math.floor(Math.random() * diseases.length)];

//     // setResult({
//     //   ...demo,
//     //   confidence: 0.85,
//     // });
//   } finally {
//     setLoading(false);
//   }
// };
//   const handleReset = () => {
//     setSelectedFile(null)
//     setPreview(null)
//     setResult(null)
//     setError(null)
//   }

//   return (
//     <>
//       <Navbar />
//       <main style={{ minHeight: '100vh', background: 'var(--cream)', paddingBottom: '80px' }}>

//         {/* ── Page Header ── */}
//         <div style={{
//           background: 'linear-gradient(135deg, var(--green-deep), var(--green-mid))',
//           padding: '64px 24px 80px',
//           position: 'relative',
//           overflow: 'hidden',
//           textAlign: 'center',
//         }}>
//           {/* Background decorations */}
//           <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
//             <div style={{
//               position: 'absolute', inset: 0,
//               backgroundImage: 'radial-gradient(rgba(82,183,136,0.1) 1px, transparent 1px)',
//               backgroundSize: '36px 36px',
//             }} />
//             <svg style={{ position: 'absolute', right: '-30px', top: '-20px', opacity: 0.07 }}
//               width="260" height="320" viewBox="0 0 200 280">
//               <path d="M100 270 C100 270 10 200 10 110 C10 30 90 5 100 5 C110 5 190 30 190 110 C190 200 100 270 100 270Z" fill="white"/>
//               <line x1="100" y1="5" x2="100" y2="270" stroke="white" strokeWidth="3"/>
//               <line x1="100" y1="80" x2="55" y2="115" stroke="white" strokeWidth="2"/>
//               <line x1="100" y1="130" x2="148" y2="158" stroke="white" strokeWidth="2"/>
//             </svg>
//             <svg style={{ position: 'absolute', left: '-20px', bottom: '-20px', opacity: 0.05, transform: 'scaleX(-1)' }}
//               width="200" height="260" viewBox="0 0 200 280">
//               <path d="M100 270 C100 270 10 200 10 110 C10 30 90 5 100 5 C110 5 190 30 190 110 C190 200 100 270 100 270Z" fill="white"/>
//               <line x1="100" y1="5" x2="100" y2="270" stroke="white" strokeWidth="3"/>
//             </svg>
//           </div>

//           <div style={{ position: 'relative', zIndex: 1 }}>
//             <div style={{
//               display: 'inline-flex', alignItems: 'center', gap: '8px',
//               padding: '6px 16px',
//               background: 'rgba(255,255,255,0.1)',
//               border: '1px solid rgba(255,255,255,0.2)',
//               borderRadius: '20px',
//               fontSize: '0.75rem', fontWeight: '700',
//               color: 'rgba(255,255,255,0.8)',
//               marginBottom: '20px',
//               letterSpacing: '0.1em',
//               textTransform: 'uppercase',
//             }}>
//               🔬 AI Disease Detection
//             </div>
//             <h1 style={{
//               fontFamily: 'Playfair Display, serif',
//               fontSize: 'clamp(2rem, 4vw, 3rem)',
//               color: '#ffffff',
//               letterSpacing: '-0.03em',
//               marginBottom: '14px',
//             }}>
//               Diagnose Your Plant
//             </h1>
//             <p style={{
//               fontSize: '1rem', color: 'rgba(255,255,255,0.65)',
//               maxWidth: '520px', margin: '0 auto',
//               lineHeight: '1.7',
//             }}>
//               Upload a clear photo of your plant and our AI will identify
//               the disease with a full treatment plan in seconds.
//             </p>
//           </div>
//         </div>

//         {/* ── Main Content ── */}
//         <div style={{
//           maxWidth: '1100px',
//           margin: '-40px auto 0',
//           padding: '0 24px',
//           position: 'relative',
//           zIndex: 2,
//         }}>

//           {/* Demo mode banner */}
//           {error === 'demo' && (
//             <div style={{
//               background: '#fef9c3',
//               border: '1px solid #fde047',
//               borderRadius: '12px',
//               padding: '14px 20px',
//               marginBottom: '24px',
//               display: 'flex', alignItems: 'center', gap: '12px',
//               fontSize: '0.85rem', color: '#854d0e',
//             }}>
//               <span style={{ fontSize: '1.2rem' }}>⚠️</span>
//               <div>
//                 <strong>Demo Mode:</strong> Backend not connected yet.
//                 Showing a sample result so you can preview the UI.
//                 Connect the FastAPI backend to get real predictions.
//               </div>
//             </div>
//           )}

//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: result ? '1fr 1.4fr' : '1fr',
//             gap: '32px',
//             alignItems: 'start',
//           }} className="detect-grid">

//             {/* ── Left Panel — Upload ── */}
//             <div>
//               <div style={{
//                 background: 'var(--white)',
//                 borderRadius: '24px',
//                 padding: '32px',
//                 border: '1px solid var(--border)',
//                 boxShadow: '0 8px 32px rgba(26,61,43,0.08)',
//               }}>
//                 <div style={{
//                   display: 'flex', alignItems: 'center', gap: '10px',
//                   marginBottom: '24px',
//                 }}>
//                   <div style={{
//                     width: '40px', height: '40px',
//                     background: 'var(--green-mist)',
//                     borderRadius: '12px',
//                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                     fontSize: '20px',
//                     border: '1px solid var(--green-light)',
//                   }}>📷</div>
//                   <div>
//                     <h2 style={{
//                       fontFamily: 'Playfair Display, serif',
//                       fontSize: '1.2rem',
//                       color: 'var(--green-deep)',
//                     }}>Upload Plant Photo</h2>
//                     <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
//                       Clear photo = better diagnosis
//                     </p>
//                   </div>
//                 </div>

//                 <ImageUploader onImageSelect={handleImageSelect} />

//                 {/* Tips */}
//                 {!selectedFile && (
//                   <div style={{
//                     marginTop: '24px',
//                     padding: '16px',
//                     background: 'var(--green-mist)',
//                     borderRadius: '12px',
//                     border: '1px solid var(--green-light)',
//                   }}>
//                     <div style={{
//                       fontSize: '0.75rem', fontWeight: '700',
//                       color: 'var(--green-mid)',
//                       letterSpacing: '0.08em',
//                       textTransform: 'uppercase',
//                       marginBottom: '10px',
//                     }}>📸 Photo Tips</div>
//                     {[
//                       'Use natural daylight for best results',
//                       'Make sure the plant fills the frame',
//                       'Capture any spots, discoloration or damage',
//                       'Avoid blurry or dark images',
//                     ].map((tip, i) => (
//                       <div key={i} style={{
//                         display: 'flex', gap: '8px',
//                         fontSize: '0.8rem', color: 'var(--text-mid)',
//                         marginBottom: i < 3 ? '6px' : 0,
//                       }}>
//                         <span style={{ color: 'var(--green-leaf)', fontWeight: '700' }}>✓</span>
//                         {tip}
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {/* Analyse button */}
//                 {selectedFile && !loading && (
//                   <button
//                     onClick={handleAnalyse}
//                     style={{
//                       width: '100%',
//                       marginTop: '20px',
//                       padding: '16px',
//                       background: 'linear-gradient(135deg, var(--green-deep), var(--green-mid))',
//                       color: 'white',
//                       border: 'none',
//                       borderRadius: '14px',
//                       fontSize: '1rem',
//                       fontWeight: '700',
//                       cursor: 'pointer',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       gap: '10px',
//                       boxShadow: '0 8px 24px rgba(26,61,43,0.3)',
//                       transition: 'all 0.3s ease',
//                     }}
//                     onMouseEnter={e => {
//                       e.currentTarget.style.transform = 'translateY(-2px)'
//                       e.currentTarget.style.boxShadow = '0 14px 32px rgba(26,61,43,0.4)'
//                     }}
//                     onMouseLeave={e => {
//                       e.currentTarget.style.transform = 'translateY(0)'
//                       e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,61,43,0.3)'
//                     }}
//                   >
//                     🔬 Analyse Plant
//                   </button>
//                 )}

//                 {/* Reset button */}
//                 {result && (
//                   <button
//                     onClick={handleReset}
//                     style={{
//                       width: '100%',
//                       marginTop: '12px',
//                       padding: '12px',
//                       background: 'transparent',
//                       color: 'var(--text-muted)',
//                       border: '1px solid var(--border)',
//                       borderRadius: '12px',
//                       fontSize: '0.88rem',
//                       fontWeight: '600',
//                       cursor: 'pointer',
//                       transition: 'all 0.2s',
//                     }}
//                     onMouseEnter={e => {
//                       e.currentTarget.style.background = 'var(--cream)'
//                       e.currentTarget.style.color = 'var(--green-deep)'
//                     }}
//                     onMouseLeave={e => {
//                       e.currentTarget.style.background = 'transparent'
//                       e.currentTarget.style.color = 'var(--text-muted)'
//                     }}
//                   >
//                     🔄 Scan Another Plant
//                   </button>
//                 )}
//               </div>
//             </div>

//             {/* ── Right Panel — Loading / Result ── */}
//             {loading && (
//               <div style={{
//                 background: 'var(--white)',
//                 borderRadius: '24px',
//                 padding: '60px 32px',
//                 border: '1px solid var(--border)',
//                 boxShadow: '0 8px 32px rgba(26,61,43,0.08)',
//                 textAlign: 'center',
//               }}>
//                 {/* Spinner */}
//                 <div style={{
//                   width: '80px', height: '80px',
//                   margin: '0 auto 28px',
//                   position: 'relative',
//                 }}>
//                   <div style={{
//                     position: 'absolute', inset: 0,
//                     borderRadius: '50%',
//                     border: '3px solid var(--green-mist)',
//                     borderTopColor: 'var(--green-leaf)',
//                     animation: 'spin 1s linear infinite',
//                   }} />
//                   <div style={{
//                     position: 'absolute', inset: '12px',
//                     borderRadius: '50%',
//                     border: '2px solid var(--cream-dark)',
//                     borderTopColor: 'var(--green-mid)',
//                     animation: 'spin 1.5s linear infinite reverse',
//                   }} />
//                   <div style={{
//                     position: 'absolute', inset: 0,
//                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                     fontSize: '24px',
//                   }}>
//                     {loadingSteps[loadingStep]?.icon}
//                   </div>
//                 </div>

//                 <h3 style={{
//                   fontFamily: 'Playfair Display, serif',
//                   fontSize: '1.3rem',
//                   color: 'var(--green-deep)',
//                   marginBottom: '10px',
//                 }}>Analysing Your Plant</h3>

//                 <p style={{
//                   fontSize: '0.88rem',
//                   color: 'var(--text-muted)',
//                   marginBottom: '32px',
//                 }}>
//                   {loadingSteps[loadingStep]?.text}
//                 </p>

//                 {/* Step indicators */}
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
//                   {loadingSteps.map((step, i) => (
//                     <div key={i} style={{
//                       display: 'flex', alignItems: 'center', gap: '12px',
//                       padding: '10px 16px',
//                       borderRadius: '10px',
//                       background: i === loadingStep
//                         ? 'var(--green-mist)'
//                         : i < loadingStep ? 'var(--cream)' : 'transparent',
//                       border: i === loadingStep ? '1px solid var(--green-light)' : '1px solid transparent',
//                       transition: 'all 0.3s',
//                     }}>
//                       <span style={{ fontSize: '1.1rem' }}>{step.icon}</span>
//                       <span style={{
//                         fontSize: '0.85rem',
//                         fontWeight: i <= loadingStep ? '600' : '400',
//                         color: i === loadingStep
//                           ? 'var(--green-deep)'
//                           : i < loadingStep ? 'var(--text-muted)' : 'var(--border)',
//                       }}>{step.text}</span>
//                       {i < loadingStep && (
//                         <span style={{ marginLeft: 'auto', color: '#22c55e', fontWeight: '700' }}>✓</span>
//                       )}
//                     </div>
//                   ))}
//                 </div>

//                 <style>{`
//                   @keyframes spin {
//                     to { transform: rotate(360deg); }
//                   }
//                 `}</style>
//               </div>
//             )}

//             {/* Result card */}
//             {result && !loading && (
//               <div>
//                 <ResultCard result={result} />
//               </div>
//             )}
//           </div>

//           {/* ── Bottom info strip ── */}
//           {!result && !loading && (
//             <div style={{
//               marginTop: '48px',
//               display: 'grid',
//               gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//               gap: '16px',
//             }}>
//               {[
//                 { icon: '🌍', title: 'Any Plant Species', desc: 'Roses, fruit trees, houseplants and more' },
//                 { icon: '⚡', title: 'Results in 2 Seconds', desc: 'Fast AI-powered analysis' },
//                 { icon: '💊', title: 'Full Treatment Plan', desc: 'Cure and prevention steps included' },
//                 { icon: '🔒', title: 'Privacy Safe', desc: 'Images are never stored' },
//               ].map((item, i) => (
//                 <div key={i} style={{
//                   background: 'var(--white)',
//                   borderRadius: '16px',
//                   padding: '20px',
//                   border: '1px solid var(--border)',
//                   display: 'flex', gap: '14px', alignItems: 'flex-start',
//                 }}>
//                   <div style={{
//                     width: '42px', height: '42px', flexShrink: 0,
//                     background: 'var(--green-mist)',
//                     borderRadius: '12px',
//                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                     fontSize: '20px',
//                     border: '1px solid var(--green-light)',
//                   }}>{item.icon}</div>
//                   <div>
//                     <div style={{ fontWeight: '700', fontSize: '0.88rem', color: 'var(--green-deep)' }}>
//                       {item.title}
//                     </div>
//                     <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '3px' }}>
//                       {item.desc}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </main>
//       <Footer />

//       <style>{`
//         @media (max-width: 768px) {
//           .detect-grid {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
//     </>
//   )
// }


// 'use client'

// import { useState } from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import ImageUploader from '../components/ImageUploader'
// import ResultCard from '../components/ResultCard'
// import { diseases } from '../lib/diseases'

// export default function DetectPage() {
//   const [selectedFile, setSelectedFile] = useState(null)
//   const [preview, setPreview] = useState(null)
//   const [result, setResult] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)
//   const [loadingStep, setLoadingStep] = useState(0)

//   const loadingSteps = [
//     { icon: '📷', text: 'Reading plant image...' },
//     { icon: '🧠', text: 'Running AI analysis...' },
//     { icon: '🔬', text: 'Identifying disease pattern...' },
//     { icon: '💊', text: 'Preparing treatment plan...' },
//   ]

//   // =========================
//   // NORMALIZE STRING
//   // =========================
//   const normalize = (str) =>
//     String(str || '')
//       .toLowerCase()
//       .replace(/___/g, '_')
//       .replace(/__/g, '_')
//       .replace(/[^a-z0-9_]+/g, '_')
//       .replace(/_+/g, '_')
//       .replace(/^_|_$/g, '')

//   // =========================
//   // TITLE CASE
//   // =========================
//   const titleCase = (value) =>
//     String(value || '')
//       .replace(/[_-]+/g, ' ')
//       .trim()
//       .split(/\s+/)
//       .filter(Boolean)
//       .map(
//         (word) =>
//           word.charAt(0).toUpperCase() +
//           word.slice(1).toLowerCase()
//       )
//       .join(' ')

//   // =========================
//   // FALLBACK RESULT
//   // =========================
//   const buildFallbackResult = (rawClass, confidence) => {
//     const classParts = String(rawClass || '')
//       .split('___')
//       .map((part) => part.trim())
//       .filter(Boolean)

//     const plantPart = classParts[0] || 'Unknown Plant'
//     const diseasePart =
//       classParts.slice(1).join(' ') || 'Unknown Disease'

//     const plant = titleCase(plantPart.replace(/,/g, ''))
//     const diseaseName = titleCase(
//       diseasePart.replace(/,/g, '')
//     )

//     const lower = rawClass.toLowerCase()

//     const type = lower.includes('virus')
//       ? 'Viral'
//       : lower.includes('bacterial')
//       ? 'Bacterial'
//       : 'Fungal'

//     const typeColor =
//       type === 'Viral'
//         ? '#6366f1'
//         : type === 'Bacterial'
//         ? '#f59e0b'
//         : '#8b5cf6'

//     const severity = lower.includes('late')
//       ? 'High'
//       : 'Medium'

//     const severityColor =
//       severity === 'High' ? '#ef4444' : '#f59e0b'

//     const plantIconMap = {
//       Tomato: '🍅',
//       Potato: '🥔',
//       Apple: '🍎',
//       Grape: '🍇',
//       Peach: '🍑',
//       Orange: '🍊',
//       Strawberry: '🍓',
//       Pepper: '🌶️',
//       Cherry: '🍒',
//     }

//     return {
//       id: normalize(rawClass),
//       name: diseaseName,
//       plant,
//       plantIcon: plantIconMap[plant] || '🌿',
//       scientificName: '—',
//       type,
//       typeColor,
//       severity,
//       severityColor,
//       description: `LeafScan detected ${diseaseName.toLowerCase()} in ${plant.toLowerCase()}.`,
//       symptoms: [
//         'Leaf discoloration',
//         'Visible spots or lesions',
//         'Weak plant growth',
//       ],
//       causes: [
//         'Fungal or bacterial infection',
//         'Humid environment',
//         'Poor airflow around plant',
//       ],
//       treatment: [
//         'Remove infected leaves',
//         'Use proper fungicide or bactericide',
//         'Avoid overwatering',
//       ],
//       prevention: [
//         'Monitor plants regularly',
//         'Ensure proper spacing',
//         'Keep leaves dry',
//       ],
//       confidence,
//     }
//   }

//   // =========================
//   // IMAGE SELECT
//   // =========================
//   const handleImageSelect = (file, previewUrl) => {
//     setSelectedFile(file)
//     setPreview(previewUrl)
//     setResult(null)
//     setError(null)
//   }

//   // =========================
//   // ANALYSE IMAGE
//   // =========================
//   const handleAnalyse = async () => {
//     if (!selectedFile) return

//     setLoading(true)
//     setError(null)
//     setResult(null)
//     setLoadingStep(0)

//     try {
//       // fake loading steps animation
//       for (let i = 0; i < loadingSteps.length; i++) {
//         setLoadingStep(i)
//         await new Promise((r) => setTimeout(r, 400))
//       }

//       const formData = new FormData()
//       formData.append('file', selectedFile)

//       const response = await fetch(
//         'https://leafscan-backend-lff1.onrender.com/predict',
//         {
//           method: 'POST',
//           body: formData,
//         }
//       )

//       if (!response.ok) {
//         throw new Error(`Backend error ${response.status}`)
//       }

//       const data = await response.json()

//       console.log('API RESPONSE:', data)

//       if (!data?.class) {
//         throw new Error('Invalid backend response')
//       }

//       const rawClass = data.class.trim()

//       // =========================
//       // HEALTHY CASE
//       // =========================
//       if (
//         rawClass.toLowerCase().includes('healthy')
//       ) {
//         setResult({
//           id: 'healthy',
//           name: 'Healthy Plant',
//           plant: titleCase(
//             rawClass.split('___')[0]
//           ),
//           plantIcon: '🌿',
//           scientificName: '—',
//           type: 'Healthy',
//           typeColor: '#22c55e',
//           severity: 'None',
//           severityColor: '#22c55e',
//           description:
//             'Your plant appears healthy. No disease detected.',
//           symptoms: ['No visible symptoms'],
//           causes: ['Plant is healthy'],
//           treatment: [
//             'Continue regular care',
//             'Maintain watering schedule',
//           ],
//           prevention: [
//             'Monitor regularly',
//             'Provide sufficient sunlight',
//           ],
//           confidence: data.confidence ?? 1,
//         })

//         return
//       }

//       // =========================
//       // EXACT MATCH
//       // =========================
//       const cleanClass = normalize(rawClass)

//       let matched = diseases.find(
//         (d) => normalize(d.id) === cleanClass
//       )

//       // =========================
//       // LOOSE MATCH
//       // =========================
//       if (!matched) {
//         matched = diseases.find((d) => {
//           const diseaseId = normalize(d.id)

//           return (
//             cleanClass.includes(diseaseId) ||
//             diseaseId.includes(cleanClass)
//           )
//         })
//       }

//       // =========================
//       // FOUND DISEASE
//       // =========================
//       if (matched) {
//         setResult({
//           ...matched,
//           confidence: data.confidence ?? 0,
//         })

//         return
//       }

//       // =========================
//       // FALLBACK
//       // =========================
//       setResult(
//         buildFallbackResult(
//           rawClass,
//           data.confidence ?? 0.5
//         )
//       )
//     } catch (err) {
//       console.log(err)
//       setError('fetch')
//     } finally {
//       setLoading(false)
//     }
//   }

//   // =========================
//   // RESET
//   // =========================
//   const handleReset = () => {
//     setSelectedFile(null)
//     setPreview(null)
//     setResult(null)
//     setError(null)
//   }

//   return (
//     <>
//       <Navbar />

//       <main
//         style={{
//           minHeight: '100vh',
//           background: 'var(--cream)',
//           paddingBottom: '80px',
//         }}
//       >
//         {/* HEADER */}
//         <div
//           style={{
//             background:
//               'linear-gradient(135deg, var(--green-deep), var(--green-mid))',
//             padding: '64px 24px 80px',
//             textAlign: 'center',
//           }}
//         >
//           <h1
//             style={{
//               color: '#fff',
//               fontSize: '3rem',
//               marginBottom: '12px',
//             }}
//           >
//             Diagnose Your Plant
//           </h1>

//           <p
//             style={{
//               color: 'rgba(255,255,255,0.75)',
//               maxWidth: '600px',
//               margin: '0 auto',
//             }}
//           >
//             Upload a plant leaf image and get instant AI-powered
//             disease detection.
//           </p>
//         </div>

//         {/* CONTENT */}
//         <div
//           style={{
//             maxWidth: '1100px',
//             margin: '-40px auto 0',
//             padding: '0 24px',
//           }}
//         >
//           <div
//             className="detect-grid"
//             style={{
//               display: 'grid',
//               gridTemplateColumns: result
//                 ? '1fr 1.4fr'
//                 : '1fr',
//               gap: '32px',
//               alignItems: 'start',
//             }}
//           >
//             {/* LEFT PANEL */}
//             <div>
//               <div
//                 style={{
//                   background: '#fff',
//                   borderRadius: '24px',
//                   padding: '32px',
//                   border: '1px solid #eee',
//                   boxShadow:
//                     '0 8px 32px rgba(0,0,0,0.05)',
//                 }}
//               >
//                 <h2
//                   style={{
//                     marginBottom: '20px',
//                   }}
//                 >
//                   Upload Plant Photo
//                 </h2>

//                 <ImageUploader
//                   onImageSelect={handleImageSelect}
//                 />

//                 {/* BUTTON */}
//                 {selectedFile && !loading && (
//                   <button
//                     onClick={handleAnalyse}
//                     style={{
//                       width: '100%',
//                       marginTop: '20px',
//                       padding: '16px',
//                       borderRadius: '14px',
//                       border: 'none',
//                       background:
//                         'linear-gradient(135deg, var(--green-deep), var(--green-mid))',
//                       color: '#fff',
//                       fontWeight: '700',
//                       cursor: 'pointer',
//                     }}
//                   >
//                     🔬 Analyse Plant
//                   </button>
//                 )}

//                 {/* RESET */}
//                 {result && (
//                   <button
//                     onClick={handleReset}
//                     style={{
//                       width: '100%',
//                       marginTop: '12px',
//                       padding: '12px',
//                       borderRadius: '12px',
//                       border: '1px solid #ddd',
//                       background: '#fff',
//                       cursor: 'pointer',
//                     }}
//                   >
//                     🔄 Scan Another Plant
//                   </button>
//                 )}

//                 {/* ERROR */}
//                 {error && (
//                   <div
//                     style={{
//                       marginTop: '16px',
//                       color: '#ef4444',
//                     }}
//                   >
//                     Failed to analyse image.
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* RIGHT PANEL */}
//             {loading && (
//               <div
//                 style={{
//                   background: '#fff',
//                   borderRadius: '24px',
//                   padding: '60px 32px',
//                   border: '1px solid #eee',
//                   textAlign: 'center',
//                 }}
//               >
//                 <div
//                   style={{
//                     fontSize: '3rem',
//                     marginBottom: '20px',
//                   }}
//                 >
//                   {loadingSteps[loadingStep]?.icon}
//                 </div>

//                 <h3>Analysing Plant...</h3>

//                 <p>
//                   {loadingSteps[loadingStep]?.text}
//                 </p>
//               </div>
//             )}

//             {/* RESULT */}
//             {result && !loading && (
//               <div>
//                 <ResultCard result={result} />
//               </div>
//             )}
//           </div>
//         </div>
//       </main>

//       <Footer />

//       <style jsx>{`
//         @media (max-width: 768px) {
//           .detect-grid {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
//     </>
//   )
// }

'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageUploader from '../components/ImageUploader'
import ResultCard from '../components/ResultCard'
import { diseases } from '../lib/diseases'

// Maps every PlantVillage class name → diseases.js id
// All keys are LOWERCASE so we match case-insensitively
const CLASS_TO_ID = {
  // Tomato
  'tomato___bacterial_spot':                         'tomato-bacterial-spot',
  'tomato___early_blight':                           'tomato-early-blight',
  'tomato___late_blight':                            'tomato-late-blight',
  'tomato___leaf_mold':                              'tomato-leaf-mold',
  'tomato___septoria_leaf_spot':                     'tomato-early-blight',
  'tomato___spider_mites two-spotted_spider_mite':   'tomato-early-blight',
  'tomato___target_spot':                            'tomato-early-blight',
  'tomato___tomato_mosaic_virus':                    'tomato-mosaic-virus',
  'tomato___tomato_yellow_leaf_curl_virus':          'tomato-mosaic-virus',
  // Potato
  'potato___early_blight':                           'potato-early-blight',
  'potato___late_blight':                            'potato-late-blight',
  // Apple
  'apple___apple_scab':                              'apple-scab',
  'apple___black_rot':                               'apple-scab',
  'apple___cedar_apple_rust':                        'apple-scab',
  // Grape
  'grape___black_rot':                               'grape-black-rot',
  'grape___esca_(black_measles)':                    'grape-black-rot',
  'grape___leaf_blight_(isariopsis_leaf_spot)':      'grape-black-rot',
  // Strawberry
  'strawberry___leaf_scorch':                        'strawberry-leaf-scorch',
  // Corn
  'corn___cercospora_leaf_spot gray_leaf_spot':      'corn-common-rust',
  'corn___common_rust':                              'corn-common-rust',
  'corn___northern_leaf_blight':                     'corn-common-rust',
  // Others mapped to closest
  'peach___bacterial_spot':                          'tomato-bacterial-spot',
  'pepper,_bell___bacterial_spot':                   'tomato-bacterial-spot',
  'orange___haunglongbing_(citrus_greening)':        'tomato-mosaic-virus',
  'squash___powdery_mildew':                         'rose-powdery-mildew',
  'cherry___powdery_mildew':                         'rose-powdery-mildew',
  'cherry_(including_sour)___powdery_mildew':        'rose-powdery-mildew',
}

const PLANT_ICONS = {
  Cherry: '🍒', Grape: '🍇', Apple: '🍎', Tomato: '🍅',
  Potato: '🥔', Peach: '🍑', Orange: '🍊', Strawberry: '🍓',
  Blueberry: '🫐', Pepper: '🌶️', Squash: '🎃', Soybean: '🌱',
  Raspberry: '🍓', Corn: '🌽',
}

const titleCase = (str) =>
  String(str || '')
    .replace(/[_-]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')

export default function DetectPage() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [result, setResult]             = useState(null)
  const [loading, setLoading]           = useState(false)
  const [error, setError]               = useState(null)
  const [loadingStep, setLoadingStep]   = useState(0)

  const loadingSteps = [
    { icon: '📷', text: 'Reading plant image...' },
    { icon: '🧠', text: 'Running AI analysis...' },
    { icon: '🔬', text: 'Identifying disease pattern...' },
    { icon: '💊', text: 'Preparing treatment plan...' },
  ]

  const handleImageSelect = (file, previewUrl) => {
    setSelectedFile(file)
    setResult(null)
    setError(null)
  }

  const handleAnalyse = async () => {
    if (!selectedFile) return

    setLoading(true)
    setError(null)
    setResult(null)
    setLoadingStep(0)

    const animInterval = setInterval(() => {
      setLoadingStep(prev => (prev + 1) % loadingSteps.length)
    }, 700)

    try {
      const formData = new FormData()
      formData.append('file', selectedFile)

      const response = await fetch('https://leafscan-backend-lff1.onrender.com/predict', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) throw new Error(`Backend error: ${response.status}`)

      const data = await response.json()
      console.log('API RESPONSE:', data)

      // KEY: lowercase for case-insensitive matching
      const rawClass   = data.class || ''
      const classKey   = rawClass.toLowerCase()
      const confidence = data.confidence ?? 0

      // ── 1. Healthy plant ──
      if (classKey.includes('healthy')) {
        const plantRaw  = rawClass.split('___')[0]
        const plantName = titleCase(plantRaw.replace(/,/g, ''))
        setResult({
          id: 'healthy',
          name: 'Healthy Plant',
          plant: plantName,
          plantIcon: PLANT_ICONS[plantName] || '🌿',
          scientificName: '—',
          type: 'None',
          typeColor: '#22c55e',
          severity: 'None',
          severityColor: '#22c55e',
          description: `Great news! Your ${plantName.toLowerCase()} appears completely healthy. No disease was detected.`,
          symptoms:   ['No symptoms detected — plant looks healthy'],
          causes:     ['No disease present'],
          treatment:  ['Continue regular watering schedule', 'Maintain appropriate fertilization', 'Keep monitoring periodically'],
          prevention: ['Maintain good airflow around the plant', 'Avoid overwatering', 'Check regularly for early signs of disease', 'Remove dead leaves promptly'],
          confidence,
        })
        return
      }

      // ── 2. Match via CLASS_TO_ID (case-insensitive) ──
      const diseaseId = CLASS_TO_ID[classKey]
      const matched   = diseaseId ? diseases.find(d => d.id === diseaseId) : null

      if (matched) {
        console.log('MATCHED:', matched.id)
        setResult({ ...matched, confidence })
        return
      }

      // ── 3. Fallback — parse class name and show general info ──
      console.log('FALLBACK for:', rawClass)
      const [plantPart, ...diseaseParts] = rawClass.split('___')
      const plantName   = titleCase((plantPart || '').replace(/,/g, ''))
      const diseaseName = titleCase((diseaseParts.join(' ') || 'Unknown Disease').replace(/,/g, ''))
      const type        = classKey.includes('virus') ? 'Viral' : classKey.includes('bacterial') ? 'Bacterial' : 'Fungal'
      const severity    = classKey.includes('late') || classKey.includes('rot') ? 'High' : 'Medium'

      setResult({
        id: 'fallback',
        name: diseaseName,
        plant: plantName,
        plantIcon: PLANT_ICONS[plantName] || '🌿',
        scientificName: '—',
        type,
        typeColor: type === 'Viral' ? '#6366f1' : type === 'Bacterial' ? '#f59e0b' : '#8b5cf6',
        severity,
        severityColor: severity === 'High' ? '#ef4444' : '#f59e0b',
        description: `LeafScan detected ${diseaseName} on your ${plantName.toLowerCase()}. General guidance is shown below — consult a local specialist for precise treatment.`,
        symptoms: [
          'Leaf discoloration or irregular spotting',
          'Reduced plant vigor and growth',
          'Visible pathogen growth on leaves or fruit',
          'Premature leaf drop in severe cases',
        ],
        causes: [
          'Pathogen infection linked to detected class',
          'Warm, humid or wet conditions favouring disease spread',
          'Poor airflow or infected plant debris nearby',
        ],
        treatment: [
          'Remove infected tissue and sanitize tools immediately',
          'Improve airflow and reduce moisture around the plant',
          'Apply appropriate fungicide or bactericide as recommended by a specialist',
        ],
        prevention: [
          'Monitor plants regularly for early symptoms',
          'Practice good sanitation and plant spacing',
          'Avoid overhead watering; remove infected debris promptly',
        ],
        confidence,
      })

    } catch (err) {
      console.error('Detection error:', err)
      setError('fetch')
    } finally {
      clearInterval(animInterval)
      setLoading(false)
    }
  }

  const handleReset = () => {
    setSelectedFile(null)
    setResult(null)
    setError(null)
  }

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--cream)', paddingBottom: '80px' }}>

        {/* ── Header ── */}
        <div style={{
          background: 'linear-gradient(135deg, var(--green-deep), var(--green-mid))',
          padding: '64px 24px 80px',
          position: 'relative', overflow: 'hidden', textAlign: 'center',
        }}>
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
            }}>🔬 AI Disease Detection</div>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '14px',
            }}>Diagnose Your Plant</h1>
            <p style={{
              fontSize: '1rem', color: 'rgba(255,255,255,0.65)',
              maxWidth: '520px', margin: '0 auto', lineHeight: '1.7',
            }}>
              Upload a clear photo of your plant and our AI will identify
              the disease with a full treatment plan in seconds.
            </p>
          </div>
        </div>

        {/* ── Content ── */}
        <div style={{
          maxWidth: '1100px', margin: '-40px auto 0',
          padding: '0 24px', position: 'relative', zIndex: 2,
        }}>

          {error === 'fetch' && (
            <div style={{
              background: '#fef2f2', border: '1px solid #fca5a5',
              borderRadius: '12px', padding: '14px 20px', marginBottom: '24px',
              display: 'flex', alignItems: 'center', gap: '12px',
              fontSize: '0.85rem', color: '#991b1b',
            }}>
              <span style={{ fontSize: '1.2rem' }}>⚠️</span>
              <div><strong>Detection failed.</strong> Could not reach the backend. Please try again.</div>
            </div>
          )}

          <div style={{
            display: 'grid',
            gridTemplateColumns: result ? '1fr 1.4fr' : '1fr',
            gap: '32px', alignItems: 'start',
          }} className="detect-grid">

            {/* ── Upload Panel ── */}
            <div>
              <div style={{
                background: 'var(--white)', borderRadius: '24px',
                padding: '32px', border: '1px solid var(--border)',
                boxShadow: '0 8px 32px rgba(26,61,43,0.08)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                  <div style={{
                    width: '40px', height: '40px', background: 'var(--green-mist)',
                    borderRadius: '12px', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '20px', border: '1px solid var(--green-light)',
                  }}>📷</div>
                  <div>
                    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: 'var(--green-deep)' }}>
                      Upload Plant Photo
                    </h2>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      Clear photo = better diagnosis
                    </p>
                  </div>
                </div>

                <ImageUploader onImageSelect={handleImageSelect} />

                {!selectedFile && (
                  <div style={{
                    marginTop: '24px', padding: '16px',
                    background: 'var(--green-mist)', borderRadius: '12px',
                    border: '1px solid var(--green-light)',
                  }}>
                    <div style={{
                      fontSize: '0.75rem', fontWeight: '700', color: 'var(--green-mid)',
                      letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px',
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

                {selectedFile && !loading && (
                  <button onClick={handleAnalyse} style={{
                    width: '100%', marginTop: '20px', padding: '16px',
                    background: 'linear-gradient(135deg, var(--green-deep), var(--green-mid))',
                    color: 'white', border: 'none', borderRadius: '14px',
                    fontSize: '1rem', fontWeight: '700', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    boxShadow: '0 8px 24px rgba(26,61,43,0.3)', transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 32px rgba(26,61,43,0.4)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,61,43,0.3)' }}
                  >
                    🔬 Analyse Plant
                  </button>
                )}

                {result && (
                  <button onClick={handleReset} style={{
                    width: '100%', marginTop: '12px', padding: '12px',
                    background: 'transparent', color: 'var(--text-muted)',
                    border: '1px solid var(--border)', borderRadius: '12px',
                    fontSize: '0.88rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--cream)'; e.currentTarget.style.color = 'var(--green-deep)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-muted)' }}
                  >
                    🔄 Scan Another Plant
                  </button>
                )}
              </div>
            </div>

            {/* ── Loading Panel ── */}
            {loading && (
              <div style={{
                background: 'var(--white)', borderRadius: '24px', padding: '60px 32px',
                border: '1px solid var(--border)', boxShadow: '0 8px 32px rgba(26,61,43,0.08)',
                textAlign: 'center',
              }}>
                <div style={{ width: '80px', height: '80px', margin: '0 auto 28px', position: 'relative' }}>
                  <div style={{
                    position: 'absolute', inset: 0, borderRadius: '50%',
                    border: '3px solid var(--green-mist)', borderTopColor: 'var(--green-leaf)',
                    animation: 'spin 1s linear infinite',
                  }} />
                  <div style={{
                    position: 'absolute', inset: '12px', borderRadius: '50%',
                    border: '2px solid var(--cream-dark)', borderTopColor: 'var(--green-mid)',
                    animation: 'spin 1.5s linear infinite reverse',
                  }} />
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px',
                  }}>{loadingSteps[loadingStep]?.icon}</div>
                </div>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif', fontSize: '1.3rem',
                  color: 'var(--green-deep)', marginBottom: '10px',
                }}>Analysing Your Plant</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '32px' }}>
                  {loadingSteps[loadingStep]?.text}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
                  {loadingSteps.map((step, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: '12px',
                      padding: '10px 16px', borderRadius: '10px',
                      background: i === loadingStep ? 'var(--green-mist)' : i < loadingStep ? 'var(--cream)' : 'transparent',
                      border: i === loadingStep ? '1px solid var(--green-light)' : '1px solid transparent',
                      transition: 'all 0.3s',
                    }}>
                      <span style={{ fontSize: '1.1rem' }}>{step.icon}</span>
                      <span style={{
                        fontSize: '0.85rem',
                        fontWeight: i <= loadingStep ? '600' : '400',
                        color: i === loadingStep ? 'var(--green-deep)' : i < loadingStep ? 'var(--text-muted)' : 'var(--border)',
                      }}>{step.text}</span>
                      {i < loadingStep && <span style={{ marginLeft: 'auto', color: '#22c55e', fontWeight: '700' }}>✓</span>}
                    </div>
                  ))}
                </div>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              </div>
            )}

            {result && !loading && <div><ResultCard result={result} /></div>}
          </div>

          {!result && !loading && (
            <div style={{
              marginTop: '48px', display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px',
            }}>
              {[
                { icon: '🌱', title: 'Supported Plants', desc: 'Tomato, Potato, Apple, Grape, Corn & more' },
                { icon: '⚡', title: 'Results in Seconds', desc: 'Fast AI-powered analysis' },
                { icon: '💊', title: 'Full Treatment Plan', desc: 'Cure and prevention steps included' },
                { icon: '🔒', title: 'Privacy Safe', desc: 'Images are never stored' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'var(--white)', borderRadius: '16px', padding: '20px',
                  border: '1px solid var(--border)', display: 'flex', gap: '14px', alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: '42px', height: '42px', flexShrink: 0, background: 'var(--green-mist)',
                    borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px', border: '1px solid var(--green-light)',
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '0.88rem', color: 'var(--green-deep)' }}>{item.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '3px' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <style>{`@media (max-width: 768px) { .detect-grid { grid-template-columns: 1fr !important; } }`}</style>
    </>
  )
}
