import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import ProjectCard from './ProjectCard'
import Lightbox from './Lightbox'

export default function Gallery({ data, title, id }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const ref = useScrollReveal()

  return (
    <section className="section" id={id} ref={ref}>
      <div className="section-header reveal">
        <h2 className="section-title">{title}</h2>
        <span className="section-count">{String(data.length).padStart(2, '0')}</span>
      </div>
      <div className="gallery-grid">
        {data.map((project, i) => (
          <div
            key={project.id}
            className="reveal"
            style={{ transitionDelay: `${(i % 3) * 70}ms` }}
          >
            <ProjectCard project={project} onClick={() => setActiveIndex(i)} />
          </div>
        ))}
      </div>
      {activeIndex !== null && (
        <Lightbox items={data} index={activeIndex} onClose={() => setActiveIndex(null)} />
      )}
    </section>
  )
}
