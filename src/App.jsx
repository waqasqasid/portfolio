import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import AmbientBackground from './components/AmbientBackground'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Toast from './components/Toast'
import Hero from './sections/Hero'
import About from './sections/About'
import Stats from './sections/Stats'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(null), 3200)
    return () => clearTimeout(timer)
  }, [toast])

  return (
    <>
      <Loader isLoading={isLoading} />
      <CustomCursor />
      <AmbientBackground />
      <Toast toast={toast} />
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Experience />
        <Contact onToast={setToast} />
        <Footer />
      </motion.main>

      <ScrollToTop />
    </>
  )
}
