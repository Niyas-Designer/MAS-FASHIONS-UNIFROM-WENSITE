import { useLocation } from 'react-router-dom'
import { Icon } from './Icons'
import { getWhatsAppContext, getWhatsAppUrl } from '../utils/whatsapp'

export default function WhatsAppCTA() {
  const { pathname } = useLocation()
  const context = getWhatsAppContext(pathname)
  const href = getWhatsAppUrl(pathname, `website page: ${pathname}`)

  return <a
    className="whatsapp-cta"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Chat with MAS FASHION on WhatsApp about ${context}`}
  >
    <span className="whatsapp-icon"><Icon name="whatsapp" size={25}/><i aria-hidden="true"/></span>
    <span className="whatsapp-copy"><strong>WhatsApp us</strong><small>Start a quick enquiry</small></span>
  </a>
}
