export const WHATSAPP_NUMBER = '919944187371'

const pageContexts = {
  '/': 'custom uniform manufacturing solutions',
  '/about': 'MAS FASHIONS (A Unit of Zeal Groups.) and your uniform manufacturing capabilities',
  '/products-services': 'your uniform products, customization, and branding services',
  '/industries': 'an industry-specific uniform program for our organization',
  '/manufacturing': 'your garment manufacturing capabilities and production process',
  '/quality': 'your quality assurance standards for bulk uniform orders',
  '/clients': 'working with MAS FASHIONS (A Unit of Zeal Groups.) as our long-term uniform partner',
  '/careers': 'career opportunities at MAS FASHIONS (A Unit of Zeal Groups.)',
  '/contact': 'discussing our uniform requirements',
}

export function getWhatsAppContext(pathname) {
  if (pathname.startsWith('/collections/')) {
    const slug = pathname.split('/').filter(Boolean).pop()?.replaceAll('-', ' ')
    return slug === 'all'
      ? 'your complete uniform collections'
      : `your ${slug} uniform collection`
  }
  return pageContexts[pathname] || 'a customized uniform solution'
}

export function getWhatsAppUrl(pathname, source = 'website') {
  const context = getWhatsAppContext(pathname)
  const careerMessage = pathname === '/careers'
    ? `Hello MAS FASHIONS (A Unit of Zeal Groups.), I am interested in ${context}. Please share the current openings and application process.`
    : `Hello MAS FASHIONS (A Unit of Zeal Groups.), I am interested in ${context}. Please help me with suitable options, minimum quantity, customization, pricing, and delivery timeline.`
  const message = `${careerMessage}\n\nEnquiry source: ${source}`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
