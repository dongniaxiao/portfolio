import { useScrollReveal } from '../hooks/useScrollReveal'
import { bio, education, skills } from '../resume'
import { asset } from '../utils'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section className="section" id="about" ref={ref}>
      <div className="section-header reveal">
        <h2 className="section-title">About</h2>
      </div>
      <div className="about-grid">

        {/* Left — narrative bio */}
        <div className="about-bio reveal">
          <p className="about-bio-text">{bio}</p>
        </div>

        {/* Right — education, skills, download */}
        <div className="about-right">
          <div className="reveal" style={{ transitionDelay: '80ms' }}>
            <p className="about-section-label">Education</p>
            {education.map((item, i) => (
              <div key={i} className="about-edu-item">
                <div className="about-edu-head">
                  <span className="about-edu-school">{item.school}</span>
                  <span className="about-edu-years">{item.years}</span>
                </div>
                <p className="about-edu-degree">{item.degree}</p>
                {item.notes && <p className="about-edu-notes">{item.notes}</p>}
              </div>
            ))}
          </div>

          <div className="reveal" style={{ transitionDelay: '160ms' }}>
            <p className="about-section-label">Skills</p>
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="skills-group">
                <p className="skills-group-label">{group}</p>
                <div className="skills-list">
                  {items.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <a
            className="resume-download reveal"
            href={asset('resume.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            style={{ transitionDelay: '240ms' }}
          >
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M7 1v8M4 6l3 3 3-3M1 10v2a1 1 0 001 1h10a1 1 0 001-1v-2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download Resume
          </a>
        </div>

      </div>
    </section>
  )
}
