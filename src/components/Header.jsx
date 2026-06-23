import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from './Icons'
import { AccountControl, SearchControl } from './HeaderControls'
import BrandLogo from './BrandLogo'
import HomeLogoLink from './HomeLogoLink'

const links = [
  ['About', '/about'],
  ['Products', '/products-services'],
  ['Industries', '/industries'],
  ['Manufacturing', '/manufacturing'],
  ['Quality', '/quality'],
  ['Clients', '/clients'],
  ['Contact', '/contact'],
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [control, setControl] = useState(null)
  const location = useLocation()
  const lightPageTop = location.pathname === '/contact'
  const solidHeader = scrolled || lightPageTop
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    setOpen(false)
    setControl(null)
  }, [location.pathname])
  useEffect(() => {
    if (!control) return
    const onKey = e => e.key === 'Escape' && setControl(null)
    document.body.classList.add('overlay-open')
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('overlay-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [control])

  const openControl = name => {
    setOpen(false)
    setControl(name)
  }

  return (
    <header className={`header ${solidHeader ? 'header-solid' : 'header-top'}`} data-route={location.pathname}>
      <HomeLogoLink className="brand">
        <BrandLogo />
      </HomeLogoLink>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, path]) => <NavLink className={({ isActive }) => isActive ? 'nav-active' : undefined} key={label} to={path}>{label}</NavLink>)}
      </nav>
      <div className="header-actions">
        <button className={`icon-btn ${control === 'search' ? 'active' : ''}`} aria-label="Search" aria-expanded={control === 'search'} onClick={() => openControl('search')}><Icon name="search" /></button>
        <button className={`icon-btn account ${control === 'account' ? 'active' : ''}`} aria-label="Account" aria-expanded={control === 'account'} onClick={() => openControl('account')}><Icon name="user" /></button>
        <Link className="btn btn-gold header-cta" to="/contact?intent=quote&source=header">Request tailored quote <Icon name="arrow" size={16}/></Link>
        <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu"><Icon name={open ? 'close' : 'menu'} /></button>
      </div>
      <AnimatePresence>
        {open && <motion.nav className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
          {links.map(([label, path]) => <NavLink className={({ isActive }) => isActive ? 'nav-active' : undefined} key={label} to={path}>{label}<Icon name="arrow" /></NavLink>)}
          <Link className="btn btn-gold" to="/contact?intent=quote&source=mobile-menu">Request a tailored quote</Link>
        </motion.nav>}
      </AnimatePresence>
      <SearchControl open={control === 'search'} onClose={() => setControl(null)} />
      <AccountControl open={control === 'account'} onClose={() => setControl(null)} />
    </header>
  )
}
