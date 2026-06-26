import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CallbackRequest from './components/CallbackRequest'
import WhatsAppCTA from './components/WhatsAppCTA'
import { Analytics } from "@vercel/analytics/next"

const Home = lazy(() => import('./pages/Home'))
const Collection = lazy(() => import('./pages/Collection'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const ContentPage = lazy(() => import('./pages/ContentPage'))


function LandingPageTransition({ pathname }) {
  const previousPath = useRef(pathname)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const cameFromLanding = previousPath.current === '/' && pathname !== '/'
    previousPath.current = pathname
    if (!cameFromLanding) return

    setActive(true)
    const timer = window.setTimeout(() => setActive(false), 520)
    return () => window.clearTimeout(timer)
  }, [pathname])

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="route-transition-overlay"
          aria-hidden="true"
          initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
          animate={{ opacity: [0, 1, 1, 0], clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)', 'inset(0 0% 0 0)', 'inset(0 0% 0 100%)'] }}
          exit={{ opacity: 0 }}
          transition={{ duration: .52, ease: [.22, 1, .36, 1], times: [0, .28, .72, 1] }}
        />
      )}
    </AnimatePresence>
  )
}

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    const frame = window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }))
    return () => window.cancelAnimationFrame(frame)
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()
  return (
    <>
      <ScrollTop />
      <Header />
      <LandingPageTransition pathname={location.pathname} />
      <AnimatePresence mode="wait">
        <Suspense fallback={<div className="page-loader">MAS FASHIONZ (A Unit of Zeal Groups.)</div>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/collections/:slug?" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/products-services" element={<ContentPage page="products" />} />
            <Route path="/industries" element={<ContentPage page="industries" />} />
            <Route path="/manufacturing" element={<ContentPage page="manufacturing" />} />
            <Route path="/quality" element={<ContentPage page="quality" />} />
            <Route path="/clients" element={<ContentPage page="clients" />} />
            <Route path="/careers" element={<ContentPage page="careers" />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
      <CallbackRequest />
      <WhatsAppCTA />
    </>
  )
}
