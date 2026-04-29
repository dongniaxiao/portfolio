import { useState, useEffect } from 'react'
import { asset } from '../utils'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`} aria-label="Main navigation">
      <a href="#hero" className="nav-logo-link" aria-label="Home">
        <img src={asset('logo.png')} alt="DX" className="nav-logo" />
      </a>
      <ul className="nav-links" role="list">
        <li><a href="#illustration">Illustration</a></li>
        <li><a href="#photography">Photography</a></li>
        <li><a href="#paintings">Paintings</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  )
}
