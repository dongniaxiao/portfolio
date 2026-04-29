import Nav from './components/Nav'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Photography from './components/Photography'
import About from './components/About'
import Footer from './components/Footer'
import { illustration } from './illustration'
import { paintings } from './paintings'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Gallery data={illustration} title="Illustration" id="illustration" />
        <Photography />
        <Gallery data={paintings} title="Paintings & Drawings" id="paintings" />
        <About />
      </main>
      <Footer />
    </>
  )
}
