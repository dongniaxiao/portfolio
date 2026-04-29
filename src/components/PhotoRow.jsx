import { useState } from 'react'
import Lightbox from './Lightbox'

export default function PhotoRow({ label, photos }) {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <div className="photo-row">
      <p className="photo-row-label">{label}</p>
      <div className="photo-row-scroll" role="list">
        {photos.map((photo, i) => (
          <div
            key={photo.id}
            className="photo-card"
            role="listitem"
            onClick={() => setActiveIndex(i)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveIndex(i) } }}
            tabIndex={0}
            aria-label={`View ${label} photo ${i + 1}`}
          >
            <div className="photo-card-img">
              <img src={photo.image} alt="" loading="lazy" />
            </div>
          </div>
        ))}
        <div className="photo-row-end-spacer" aria-hidden="true" />
      </div>
      {activeIndex !== null && (
        <Lightbox items={photos} index={activeIndex} onClose={() => setActiveIndex(null)} />
      )}
    </div>
  )
}
