import { Link } from 'react-router-dom'
import { Icon } from './Icons'

export default function ConversionActions({
  source = 'website',
  light = false,
  compact = false,
  primaryLabel = 'Request a tailored quote',
  secondaryLabel = 'Speak to a consultant',
  note,
}) {
  const openCallback = () => window.dispatchEvent(new CustomEvent('mas:open-callback', { detail: { source } }))

  return <div className={`cta-actions ${light ? 'cta-actions-light' : ''} ${compact ? 'cta-actions-compact' : ''}`}>
    <div>
      <Link className="btn btn-gold btn-primary-cta" to={`/contact?intent=quote&source=${encodeURIComponent(source)}`}>
        {primaryLabel}<Icon name="arrow" size={17}/>
      </Link>
      <button className={`btn btn-secondary-cta ${light ? 'btn-secondary-light' : ''}`} type="button" onClick={openCallback}>
        {secondaryLabel}<Icon name="phone" size={16}/>
      </button>
    </div>
    {note && <small className="cta-note">{note}</small>}
  </div>
}
