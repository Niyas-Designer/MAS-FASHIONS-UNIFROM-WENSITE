import { Link, useLocation } from 'react-router-dom'

export default function HomeLogoLink({ className = '', children }) {
  const { pathname } = useLocation()

  const handleClick = event => {
    if (pathname !== '/') return
    event.preventDefault()
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
  }

  return <Link className={className} to="/" aria-label="MAS FASHIONS (A Unit of Zeal Groups.) home" onClick={handleClick}>{children}</Link>
}
