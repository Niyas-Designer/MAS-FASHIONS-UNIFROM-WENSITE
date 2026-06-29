export default function BrandLogo({ compact = false, className = '' }) {
  return <img
    className={`brand-logo ${compact ? 'brand-logo-compact' : ''} ${className}`}
    src={compact ? '/brand/mas-symbol.png' : '/brand/mas-wordmark.png'}
    alt="MAS FASHIONS (A Unit of Zeal Groups.)"
  />
}
