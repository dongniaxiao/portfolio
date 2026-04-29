import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Footer() {
  const ref = useScrollReveal()

  return (
    <footer className="footer" id="contact" ref={ref}>
      <div className="footer-inner">
        <div className="reveal">
          <h2 className="footer-heading">
            Get in touch
          </h2>
          <a href="mailto:dongnia@berkeley.edu" className="footer-email">
            dongnia@berkeley.edu
          </a>
        </div>
        <p className="footer-copy reveal" style={{ transitionDelay: '100ms' }}>
          © Dongnia Xiao · 2026
        </p>
      </div>
    </footer>
  )
}
