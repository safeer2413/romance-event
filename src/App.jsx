import './App.css'
import AOS from "aos";
import { useEffect } from "react";
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
    AOS.refresh(); // refresh positions after DOM renders
  }, []);
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-white to-rose-500">
      <Navbar />
      <HeroSection />
      <Services />
      <Pricing />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App