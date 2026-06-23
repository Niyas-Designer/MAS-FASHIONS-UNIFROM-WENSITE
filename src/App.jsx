import { lazy, Suspense, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CallbackRequest from './components/CallbackRequest'
import WhatsAppCTA from './components/WhatsAppCTA'

const Home = lazy(() => import('./pages/Home'))
const Collection = lazy(() => import('./pages/Collection'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const ContentPage = lazy(() => import('./pages/ContentPage'))

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
      <AnimatePresence mode="wait">
        <Suspense fallback={<div className="page-loader">MAS FASHION</div>}>
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
