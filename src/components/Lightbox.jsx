import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Lightbox({ items, index, onClose }) {
  const [current, setCurrent] = useState(index)
  const closeRef = useRef(null)

  const item = items[current]
  const { title, caption, category, image } = item
  const hasPrev = current > 0
  const hasNext = current < items.length - 1

  useEffect(() => {
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft')  setCurrent(c => Math.max(0, c - 1))
      if (e.key === 'ArrowRight') setCurrent(c => Math.min(items.length - 1, c + 1))
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, items.length])

  return createPortal(
    <div
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Image'}
      onClick={onClose}
    >
      <button ref={closeRef} className="lightbox-close" onClick={onClose} aria-label="Close">
        ×
      </button>

      <button
        className="lightbox-nav lightbox-nav--prev"
        onClick={(e) => { e.stopPropagation(); setCurrent(c => c - 1) }}
        disabled={!hasPrev}
        aria-label="Previous"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-img-wrap">
          {image
            ? <img src={image} alt={title || ''} />
            : <div className="lightbox-placeholder"><span>Image coming soon</span></div>
          }
        </div>
        {(title || caption) && (
          <div className="lightbox-info">
            {category && <p className="lightbox-meta">{category}</p>}
            {title && <h2 className="lightbox-title">{title}</h2>}
            {caption && <p className="lightbox-caption">{caption}</p>}
          </div>
        )}
      </div>

      <button
        className="lightbox-nav lightbox-nav--next"
        onClick={(e) => { e.stopPropagation(); setCurrent(c => c + 1) }}
        disabled={!hasNext}
        aria-label="Next"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>,
    document.body
  )
}
