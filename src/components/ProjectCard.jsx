export default function ProjectCard({ project, onClick }) {
  const { title, caption, year, category, image } = project

  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() }
  }

  return (
    <article
      className="project-card"
      onClick={onClick}
      onKeyDown={handleKey}
      tabIndex={0}
      role="button"
      aria-label={`View: ${title}`}
    >
      <div className="project-card-image">
        {image ? (
          <img src={image} alt={title} loading="lazy" />
        ) : (
          <div className="project-placeholder" aria-hidden="true">
            <div className="placeholder-icon" aria-hidden="true" />
            <span className="placeholder-label">Image coming soon</span>
          </div>
        )}
        <div className="project-card-overlay" aria-hidden="true">
          <p className="overlay-caption">{caption}</p>
        </div>
      </div>
      <div className="project-card-meta">
        <p className="project-card-title">{title}</p>
        {category && <p className="project-card-sub">{category}</p>}
      </div>
    </article>
  )
}
