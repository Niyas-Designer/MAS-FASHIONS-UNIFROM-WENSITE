import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Icon } from './Icons'
import BrandLogo from './BrandLogo'
import HomeLogoLink from './HomeLogoLink'

const columns = [
  ['Company', [['About us', '/about'], ['Manufacturing', '/manufacturing'], ['Quality assurance', '/quality'], ['Careers', '/careers']]],
  ['Products', [['Corporate uniforms', '/products-services'], ['School uniforms', '/products-services'], ['Healthcare uniforms', '/products-services'], ['Industrial workwear', '/products-services']]],
  ['Explore', [['Industries', '/industries'], ['Our clients', '/clients'], ['All collections', '/collections/all'], ['Contact', '/contact']]],
  ['Contact', ['manzoor@zealgroups.in', '+91 99441 87371', 'Tiruppur, Tamil Nadu', 'India – 641687']],
]

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: .25 },
  transition: { duration: .65, ease: [.22, 1, .36, 1] },
}

export default function Footer() {
  return <footer>
    <div className="footer-top">
      <motion.div className="footer-lead" {...reveal}>
        <HomeLogoLink className="brand footer-brand"><BrandLogo /></HomeLogoLink>
        <p>Purpose-built uniforms for teams who care about the impression they make.</p>
        <a href="mailto:manzoor@zealgroups.in" className="footer-email">manzoor@zealgroups.in <Icon name="arrow" /></a>
      </motion.div>
      {columns.map(([title, items], columnIndex) => <motion.div className="footer-col" key={title} {...reveal} transition={{...reveal.transition, delay: columnIndex * .07}}><h4>{title}</h4>{items.map(item => Array.isArray(item) ? <Link to={item[1]} key={item[0]}>{item[0]}</Link> : <span className="footer-detail" key={item}>{item}</span>)}</motion.div>)}
    </div>
    <motion.div className="footer-bottom" {...reveal}><span>© 2026 MAS FASHIONS (A Unit of Zeal Groups.)</span><div><a href="#">Instagram</a><a href="#">LinkedIn</a><a href="#">Privacy</a><a href="#">Terms</a></div></motion.div>
  </footer>
}
