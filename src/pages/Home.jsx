import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LatestRelease from '../components/LatestRelease'
import Videos from '../components/Videos'
import About from '../components/About'
import Follow from '../components/Follow'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LatestRelease />
        <Videos />
        <About />
        <Follow />
        <Footer />
      </main>
    </>
  )
}
