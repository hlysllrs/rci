import Image from 'next/image'
import HeroSection from './components/Section/HeroSection'
import SideBySide from './components/SideBySide'
import Contact from './contact/page'

export default function Home() {
  return (
    <>
      <HeroSection />
      <SideBySide />
      <Contact />
    </>
  )
}
