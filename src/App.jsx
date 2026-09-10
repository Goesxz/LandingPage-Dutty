import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import FeaturedMusic from './sections/FeaturedMusic/FeaturedMusic'
import About from './sections/About/About'
import Videos from './sections/Videos/Videos'
import Gallery from './sections/Gallery/Gallery'
import Agenda from './sections/Agenda/Agenda'
import Booking from './sections/Booking/Booking'
import Socials from './sections/Socials/Socials'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedMusic />
        <About />
        <Videos />
        <Gallery />
        <Agenda />
        <Booking />
        <Socials />
      </main>
      <Footer />
    </>
  )
}

export default App
