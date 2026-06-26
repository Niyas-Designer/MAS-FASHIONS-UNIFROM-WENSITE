import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Icon } from './Icons'
import BrandLogo from './BrandLogo'

const searchItems = [
  { title: 'Corporate Uniforms', type: 'Product', path: '/products-services', keywords: 'office business shirts trousers blazers' },
  { title: 'School Uniforms', type: 'Product', path: '/products-services', keywords: 'education student college institutional' },
  { title: 'Industrial Workwear', type: 'Product', path: '/products-services', keywords: 'factory safety jackets manufacturing' },
  { title: 'Healthcare Uniforms', type: 'Product', path: '/products-services', keywords: 'medical scrubs hospital hygiene' },
  { title: 'Hospitality Uniforms', type: 'Product', path: '/products-services', keywords: 'hotel restaurant chef service' },
  { title: 'Custom Branding Services', type: 'Service', path: '/products-services', keywords: 'embroidery printing logo name labels' },
  { title: 'Industries We Serve', type: 'Page', path: '/industries', keywords: 'corporate education healthcare hospitality retail industrial' },
  { title: 'Manufacturing Capabilities', type: 'Page', path: '/manufacturing', keywords: 'production pattern sample logistics garment' },
  { title: 'Quality Assurance', type: 'Page', path: '/quality', keywords: 'inspection testing audit standards' },
  { title: 'About MAS FASHIONZ (A Unit of Zeal Groups.)', type: 'Page', path: '/about', keywords: 'company story strengths tiruppur' },
  { title: 'Contact & Request a Quote', type: 'Page', path: '/contact', keywords: 'phone email enquiry requirements' },
]

function Overlay({ children, onClose, label, className = '' }) {
  return <motion.div
    className={`control-overlay ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: .2 }}
    onMouseDown={e => e.target === e.currentTarget && onClose()}
    role="presentation"
  >
    <motion.section
      role="dialog"
      aria-modal="true"
      aria-label={label}
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: .35, ease: [.22, 1, .36, 1] }}
    >
      {children}
    </motion.section>
  </motion.div>
}

export function SearchControl({ open, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  useEffect(() => {
    if (open) {
      setQuery('')
      const timer = window.setTimeout(() => inputRef.current?.focus(), 180)
      return () => window.clearTimeout(timer)
    }
  }, [open])

  const results = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return searchItems.slice(0, 5)
    return searchItems.filter(item => `${item.title} ${item.type} ${item.keywords}`.toLowerCase().includes(term))
  }, [query])

  return <AnimatePresence>
    {open && <Overlay onClose={onClose} label="Search MAS FASHIONZ (A Unit of Zeal Groups.)" className="search-overlay">
      <div className="control-head">
        <span className="brand control-brand"><BrandLogo /></span>
        <button className="control-close" onClick={onClose} aria-label="Close search"><Icon name="close" /></button>
      </div>
      <div className="search-box">
        <Icon name="search" size={27} />
        <input
          ref={inputRef}
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search uniforms, services or pages"
          aria-label="Search website"
        />
        {query && <button onClick={() => setQuery('')} aria-label="Clear search">Clear</button>}
      </div>
      <div className="search-content">
        <div className="search-meta"><span>{query ? `${results.length} result${results.length === 1 ? '' : 's'}` : 'Popular searches'}</span><span>Press ESC to close</span></div>
        <div className="search-results">
          {results.length ? results.map((item, i) => <Link to={item.path} onClick={onClose} key={item.title}>
            <span className="result-number">{String(i + 1).padStart(2, '0')}</span>
            <div><small>{item.type}</small><strong>{item.title}</strong></div>
            <Icon name="arrow" />
          </Link>) : <div className="empty-results"><span>No results found</span><p>Try “corporate”, “embroidery”, “healthcare”, or contact our team.</p><Link className="text-link" to="/contact?intent=quote&source=search-empty" onClick={onClose}>Request a tailored quote <Icon name="arrow" /></Link></div>}
        </div>
      </div>
    </Overlay>}
  </AnimatePresence>
}

export function AccountControl({ open, onClose }) {
  const [mode, setMode] = useState('signin')
  const [complete, setComplete] = useState(false)
  const emailRef = useRef(null)
  useEffect(() => {
    if (open) {
      setComplete(false)
      const timer = window.setTimeout(() => emailRef.current?.focus(), 220)
      return () => window.clearTimeout(timer)
    }
  }, [open, mode])

  const submit = e => {
    e.preventDefault()
    setComplete(true)
  }

  return <AnimatePresence>
    {open && <Overlay onClose={onClose} label="Trade account" className="account-overlay">
      <div className="account-visual">
        <div><span className="eyebrow">MAS FASHIONZ (A Unit of Zeal Groups.) trade portal</span><h2>Uniform programs,<br/><em>managed simply.</em></h2><p>Access quotations, order updates, specifications, and repeat-order support in one place.</p></div>
      </div>
      <div className="account-panel">
        <div className="control-head">
          <span className="eyebrow">{mode === 'signin' ? 'Client access' : 'New trade account'}</span>
          <button className="control-close dark" onClick={onClose} aria-label="Close account panel"><Icon name="close" /></button>
        </div>
        {complete ? <motion.div className="account-success" initial={{opacity:0,y:14}} animate={{opacity:1,y:0}}>
          <span>✓</span>
          <h3>{mode === 'signin' ? 'Demo sign-in complete' : 'Request received'}</h3>
          <p>{mode === 'signin' ? 'This front-end control is ready to connect to your authentication system.' : 'Our team will contact you to set up your MAS FASHIONZ (A Unit of Zeal Groups.) trade account.'}</p>
          <button className="btn btn-dark" onClick={onClose}>Close panel</button>
        </motion.div> : <>
          <h2>{mode === 'signin' ? 'Welcome back.' : 'Work with us.'}</h2>
          <p>{mode === 'signin' ? 'Sign in to your organization’s trade account.' : 'Tell us who you are and our team will arrange access.'}</p>
          <form className="account-form" onSubmit={submit}>
            {mode === 'register' && <label>Full name<input required placeholder="Your name" /></label>}
            <label>Work email<input ref={emailRef} required type="email" placeholder="name@company.com" /></label>
            {mode === 'register' && <label>Company<input required placeholder="Company name" /></label>}
            {mode === 'signin' && <label>Password<div className="password-field"><input required type="password" placeholder="Enter your password" /><button type="button">Forgot?</button></div></label>}
            <button className="btn btn-dark" type="submit">{mode === 'signin' ? 'Sign in' : 'Request account'} <Icon name="arrow" size={17}/></button>
          </form>
          <button className="account-switch" onClick={() => setMode(mode === 'signin' ? 'register' : 'signin')}>
            {mode === 'signin' ? 'Need a trade account? Request access' : 'Already have an account? Sign in'}
          </button>
          <p className="account-note">For immediate help, call <a href="tel:+919944187371">+91 99441 87371</a>.</p>
        </>}
      </div>
    </Overlay>}
  </AnimatePresence>
}
