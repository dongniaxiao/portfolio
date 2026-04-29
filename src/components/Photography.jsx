import { useScrollReveal } from '../hooks/useScrollReveal'
import { food, travel } from '../photography'
import PhotoRow from './PhotoRow'

export default function Photography() {
  const ref = useScrollReveal()

  return (
    <section className="section photography-section" id="photography" ref={ref}>
      <div className="section-header reveal">
        <h2 className="section-title">Photography</h2>
      </div>
      <div className="reveal" style={{ transitionDelay: '80ms' }}>
        <PhotoRow label="Food" photos={food} />
      </div>
      <div className="reveal" style={{ transitionDelay: '160ms' }}>
        <PhotoRow label="Travel" photos={travel} />
      </div>
    </section>
  )
}
