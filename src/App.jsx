import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import FeaturedProducts from './components/FeaturedProducts'
import ThreeSections from './components/ThreeSections'
import MadeLocally from './components/MadeLocally'
import Gallery from './components/Gallery'
import MoreThanFabric from './components/MoreThanFabric'
import Community from './components/Community'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedProducts />
        <ThreeSections />
        <MadeLocally />
        <Gallery />
        <MoreThanFabric />
        <Community />
      </main>
      <Footer />
    </div>
  )
}

export default App
