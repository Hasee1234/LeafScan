'use client'
import { useState, useRef, useCallback } from 'react'

export default function ImageUploader({ onImageSelect }) {
  const [dragOver, setDragOver] = useState(false)
  const [preview, setPreview] = useState(null)
  const [fileName, setFileName] = useState(null)
  const [fileSize, setFileSize] = useState(null)
  const fileInputRef = useRef(null)

  const handleFile = useCallback((file) => {
    if (!file) return
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (JPG, PNG, WebP)')
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be under 10MB')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      setPreview(e.target.result)
      setFileName(file.name)
      setFileSize((file.size / 1024).toFixed(1) + ' KB')
      onImageSelect?.(file, e.target.result)
    }
    reader.readAsDataURL(file)
  }, [onImageSelect])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files[0]
    handleFile(file)
  }, [handleFile])

  const handleDragOver = (e) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = () => setDragOver(false)

  const handleInputChange = (e) => {
    handleFile(e.target.files[0])
  }

  const handleRemove = () => {
    setPreview(null)
    setFileName(null)
    setFileSize(null)
    onImageSelect?.(null, null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <div style={{ width: '100%' }}>
      {!preview ? (
        /* ── Drop Zone ── */
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
          style={{
            border: `2px dashed ${dragOver ? 'var(--green-leaf)' : 'var(--border)'}`,
            borderRadius: '20px',
            padding: '64px 32px',
            textAlign: 'center',
            cursor: 'pointer',
            background: dragOver
              ? 'linear-gradient(135deg, var(--green-mist), rgba(82,183,136,0.08))'
              : 'linear-gradient(135deg, var(--cream), var(--cream-dark))',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background decoration */}
          <div aria-hidden style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
          }}>
            <svg style={{ position: 'absolute', bottom: '-20px', right: '-20px', opacity: 0.06 }}
              width="180" height="220" viewBox="0 0 200 280">
              <path d="M100 270 C100 270 10 200 10 110 C10 30 90 5 100 5 C110 5 190 30 190 110 C190 200 100 270 100 270Z" fill="#2d6a4f"/>
              <line x1="100" y1="5" x2="100" y2="270" stroke="#52b788" strokeWidth="3"/>
              <line x1="100" y1="80" x2="55" y2="115" stroke="#52b788" strokeWidth="2"/>
              <line x1="100" y1="130" x2="148" y2="158" stroke="#52b788" strokeWidth="2"/>
            </svg>
            <svg style={{ position: 'absolute', top: '-10px', left: '-10px', opacity: 0.04, transform: 'rotate(-30deg)' }}
              width="120" height="150" viewBox="0 0 200 280">
              <path d="M100 270 C100 270 10 200 10 110 C10 30 90 5 100 5 C110 5 190 30 190 110 C190 200 100 270 100 270Z" fill="#1a3d2b"/>
            </svg>
          </div>

          {/* Upload icon */}
          <div style={{
            width: '88px', height: '88px',
            background: dragOver ? 'var(--green-mist)' : 'var(--white)',
            borderRadius: '24px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px',
            fontSize: '40px',
            boxShadow: dragOver
              ? '0 8px 32px rgba(82,183,136,0.3)'
              : '0 4px 20px rgba(26,61,43,0.08)',
            border: `1px solid ${dragOver ? 'var(--green-light)' : 'var(--border)'}`,
            transition: 'all 0.3s ease',
            transform: dragOver ? 'scale(1.08)' : 'scale(1)',
          }}>
            {dragOver ? '🌿' : '📷'}
          </div>

          <h3 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.3rem',
            color: 'var(--green-deep)',
            marginBottom: '10px',
            position: 'relative',
          }}>
            {dragOver ? 'Release to Upload' : 'Upload Plant Photo'}
          </h3>

          <p style={{
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            marginBottom: '24px',
            lineHeight: '1.6',
            position: 'relative',
          }}>
            Drag & drop your plant photo here, or click to browse
            <br />
            <span style={{ fontSize: '0.8rem' }}>
              Supports JPG, PNG, WebP · Max 10MB
            </span>
          </p>

          {/* Browse button */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '11px 28px',
            background: 'var(--green-deep)',
            color: 'white',
            borderRadius: '10px',
            fontSize: '0.88rem',
            fontWeight: '600',
            position: 'relative',
            transition: 'all 0.2s',
            boxShadow: '0 4px 16px rgba(26,61,43,0.25)',
          }}>
            🌱 Choose Plant Photo
          </div>

          {/* Supported plants hint */}
          <div style={{
            marginTop: '24px',
            display: 'flex',
            gap: '8px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            position: 'relative',
          }}>
            {['🍅 Tomato', '🌹 Rose', '🍎 Apple', '🍇 Grape', '🌽 Corn', '🍓 Strawberry'].map(p => (
              <span key={p} style={{
                padding: '4px 10px',
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                fontWeight: '500',
              }}>{p}</span>
            ))}
          </div>
        </div>
      ) : (
        /* ── Preview ── */
        <div style={{
          borderRadius: '20px',
          overflow: 'hidden',
          border: '1px solid var(--border)',
          background: 'var(--white)',
          boxShadow: '0 8px 32px rgba(26,61,43,0.1)',
        }}>
          {/* Image preview */}
          <div style={{ position: 'relative' }}>
            <img
              src={preview}
              alt="Plant preview"
              style={{
                width: '100%',
                height: '320px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {/* Overlay badge */}
            <div style={{
              position: 'absolute',
              top: '16px', left: '16px',
              background: 'rgba(26,61,43,0.85)',
              backdropFilter: 'blur(8px)',
              color: 'white',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontWeight: '600',
              display: 'flex', alignItems: 'center', gap: '6px',
              border: '1px solid rgba(82,183,136,0.3)',
            }}>
              <span style={{
                width: '6px', height: '6px',
                background: '#22c55e', borderRadius: '50%',
                display: 'inline-block',
              }} />
              Ready for Analysis
            </div>

            {/* Remove button */}
            <button
              onClick={handleRemove}
              style={{
                position: 'absolute', top: '16px', right: '16px',
                background: 'rgba(239,68,68,0.9)',
                backdropFilter: 'blur(8px)',
                color: 'white', border: 'none',
                width: '36px', height: '36px',
                borderRadius: '50%', cursor: 'pointer',
                fontSize: '1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(239,68,68,0.4)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              title="Remove image"
            >
              ✕
            </button>
          </div>

          {/* File info bar */}
          <div style={{
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--border)',
            background: 'var(--cream)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px', height: '40px',
                background: 'var(--green-mist)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px',
                border: '1px solid var(--green-light)',
              }}>🖼️</div>
              <div>
                <div style={{
                  fontSize: '0.85rem', fontWeight: '600',
                  color: 'var(--green-deep)',
                  maxWidth: '220px',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>{fileName}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  {fileSize}
                </div>
              </div>
            </div>

            {/* Change photo button */}
            <button
              onClick={() => fileInputRef.current?.click()}
              style={{
                padding: '8px 16px',
                background: 'transparent',
                color: 'var(--green-mid)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--green-mist)'
                e.currentTarget.style.borderColor = 'var(--green-light)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              🔄 Change
            </button>
          </div>
        </div>
      )}

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleInputChange}
        style={{ display: 'none' }}
      />
    </div>
  )
}