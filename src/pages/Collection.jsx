import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PageSEO from '../components/PageSEO'
import ConversionActions from '../components/ConversionActions'
import { Icon } from '../components/Icons'

const items = [
  ['Executive tailoring', 'Structured blazers, refined shirts and versatile trousers for professional teams.', '/images/collections/category-corporate.jpg'],
  ['School essentials', 'Smart, durable uniform systems designed for comfort, movement and everyday care.', '/images/collections/category-school.jpg'],
  ['Healthcare essentials', 'Breathable scrubs and clinical layers that support hygiene, mobility and long shifts.', '/images/collections/category-healthcare.jpg'],
  ['Hospitality collection', 'Polished front-of-house, restaurant and culinary garments for service environments.', '/images/collections/category-hospitality.jpg'],
  ['Industrial performance', 'Hard-wearing workwear with practical detailing, visibility and reinforced construction.', '/images/collections/category-industrial.jpg'],
  ['Custom branded apparel', 'Role-specific garments completed with embroidery, print, names, labels and trims.', '/images/embroidery-branding.webp'],
]

export default function Collection() {
  const { slug = 'all' } = useParams()
  const title = slug.replaceAll('-', ' ')
  const displayTitle = slug === 'all' ? 'all uniform collections' : title
  return <motion.main className="inner-page" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
    <PageSEO title={`${displayTitle.charAt(0).toUpperCase()+displayTitle.slice(1)} | MAS FASHIONS (A Unit of Zeal Groups.)`} description="Explore purpose-built corporate, school, healthcare, hospitality and industrial uniform collections manufactured and customized by MAS FASHIONS (A Unit of Zeal Groups.)." />
    <section className="inner-hero collection-hero"><span className="eyebrow">MAS FASHIONS (A Unit of Zeal Groups.) collections</span><h1>{displayTitle}<br/><em>for modern teams.</em></h1><p>Purposeful silhouettes, hardworking fabrics, and a standard of finish people notice—developed into coordinated programs rather than isolated pieces.</p></section>

    <section className="collection-intro container section-pad"><Reveal><span className="eyebrow">A considered starting point</span><h2>Explore by role.<br/><em>Customize for your brand.</em></h2></Reveal><Reveal delay={.1}><p>Our collections demonstrate the garment categories, construction and visual direction available to organizational clients. Every program can be adapted through fabric, color, fit, functional details, branding and size requirements.</p><p>Use these ranges to identify what feels relevant, then let our team translate your selections into a practical specification and sample.</p></Reveal></section>

    <section className="collection-grid container section-pad">{items.map(([name,copy,image],i)=><Reveal className="collection-tile" key={name} delay={(i%2)*.08}><img src={image} loading="lazy" alt={name}/><div><span>0{i+1}</span><h2>{name}</h2><p>{copy}</p><Link to={`/contact?intent=quote&source=collection-${i+1}`}>Request collection details <Icon name="arrow"/></Link></div></Reveal>)}</section>

    <section className="collection-guide">
      <Reveal className="collection-guide-copy"><span className="eyebrow">Choosing the right uniform</span><h2>Four decisions that shape the range.</h2><p>Our consultants balance brand appearance with the practical needs of the people wearing each garment.</p><ConversionActions source="collections-guide" compact primaryLabel="Build your collection" /></Reveal>
      <div className="feature-list">{[['01','Role & environment'],['02','Fabric & care'],['03','Fit & size range'],['04','Branding & identification']].map(([n,t])=><Reveal key={t}><span>{n}</span><h3>{t}</h3></Reveal>)}</div>
    </section>

    <section className="inner-gallery section-pad container"><Reveal className="inner-section-head"><span className="eyebrow">Signature pieces</span><h2>Core garments.<br/><em>Program-ready details.</em></h2></Reveal><div className="inner-gallery-grid">
      {[['/images/collections/product-blazer.jpg','Tailored blazer'],['/images/collections/product-scrub.jpg','Clinical scrub set'],['/images/collections/product-utility-jacket.jpg','Utility work jacket']].map(([img,label],i)=><Reveal className="inner-gallery-card" key={label}><img src={img} loading="lazy" alt={label}/><span>0{i+1}</span><h3>{label}</h3></Reveal>)}
    </div></section>

    <section className="faq-section section-pad container"><Reveal className="inner-section-head"><span className="eyebrow">Collection questions</span><h2>From inspiration<br/><em>to approved uniform.</em></h2></Reveal><div className="faq-list">
      {[['Can the colors and fabrics be changed?','Yes. Collection pieces are starting points and can be developed around approved brand colors, performance needs and care requirements.'],['Can we combine garments from different collections?','Yes. Many organizations require a coordinated mix of corporate, service, technical or support garments across departments.'],['Are women’s and men’s fits available?','Programs can include role-appropriate and gender-appropriate fits with a planned size range established during development.'],['How do we request samples?','Contact our team with the garment types, quantity, customization, size needs and target timeline. We will advise on development and sampling.']].map(([q,a],i)=><Reveal className="faq-item" key={q}><span>0{i+1}</span><div><h3>{q}</h3><p>{a}</p></div></Reveal>)}
    </div></section>
    <section className="inner-cta"><Reveal><span className="eyebrow">Create your range</span><h2>Found the right direction?</h2><p>Tell us which garments fit your vision. We will help refine the fabric, details, branding and rollout plan.</p><ConversionActions source="collections-final" light /></Reveal></section>
  </motion.main>
}
