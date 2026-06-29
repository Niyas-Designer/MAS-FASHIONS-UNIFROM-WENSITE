import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from '../components/Reveal'
import PageSEO from '../components/PageSEO'
import ConversionActions from '../components/ConversionActions'
import { Icon } from '../components/Icons'

const categories = [
  { name: 'Corporate uniforms', tag: 'Brand image & confidence', image: '/images/collections/category-corporate.jpg', pos: 'center 28%' },
  { name: 'School uniforms', tag: 'Smart, comfortable & durable', image: '/images/collections/category-school.jpg', pos: 'center 30%' },
  { name: 'Industrial workwear', tag: 'Safety-focused performance', image: '/images/collections/category-industrial.jpg', pos: 'center 30%' },
  { name: 'Healthcare uniforms', tag: 'Comfort & practicality', image: '/images/collections/category-healthcare.jpg', pos: 'center 28%' },
  { name: 'Hospitality uniforms', tag: 'Service excellence', image: '/images/collections/category-hospitality.jpg', pos: 'center 25%' },
]
const professions = [
  { name: 'Corporate professionals', image: '/images/collections/profession-corporate.jpg', className: 'profession-large', pos: 'center 26%' },
  { name: 'Healthcare professionals', image: '/images/collections/profession-healthcare.jpg', pos: 'center 28%' },
  { name: 'Hospitality professionals', image: '/images/collections/profession-hospitality.jpg', pos: 'center 30%' },
  { name: 'Industrial workforce', image: '/images/collections/profession-industrial.jpg', className: 'profession-wide', pos: 'center 32%' },
]
const products = [
  ['Executive Shirt', 'Corporate', '/images/collections/product-shirt.jpg'],
  ['Atelier Blazer', 'Corporate', '/images/collections/product-blazer.jpg'],
  ['Signature Scrub', 'Healthcare', '/images/collections/product-scrub.jpg'],
  ['Service Waistcoat', 'Hospitality', '/images/collections/product-waistcoat.jpg'],
  ['Chef Coat No. 04', 'Hospitality', '/images/collections/product-chef-coat.jpg'],
  ['Utility Jacket', 'Industrial', '/images/collections/product-utility-jacket.jpg'],
]
const benefits = [
  { title: 'Premium fabrics', copy: 'Carefully selected materials for lasting comfort, structure, and performance.', icon: 'fabric' },
  { title: 'Customized design', copy: 'Uniform programs shaped around your brand, team, and working environment.', icon: 'customize' },
  { title: 'Bulk expertise', copy: 'Scalable production systems that maintain consistency across every size and order.', icon: 'layers' },
  { title: 'Strict quality control', copy: 'Eight-stage inspection from incoming fabric through final packed garment.', icon: 'shield' },
  { title: 'On-time delivery', copy: 'Planned production and dispatch milestones that keep rollouts firmly on schedule.', icon: 'clock' },
  { title: 'Competitive pricing', copy: 'Direct manufacturing value without compromising fabric, finish, or service.', icon: 'value' },
]
const testimonials = [
  ['“The finish, consistency and service have raised the standard of how our entire front-of-house team presents itself.”', 'Meera Shah', 'Director of Operations, Aster House'],
  ['“MAS FASHIONS (A Unit of Zeal Groups.) understood that our uniforms had to perform through long shifts without ever looking clinical.”', 'Dr. Rohan Menon', 'COO, Northfield Health'],
  ['“From sampling to a 2,400-piece rollout, every detail felt carefully managed.”', 'Amrita Das', 'Head of People, Meridian Group'],
]

function SectionHead({ eyebrow, title, copy, dark = false }) {
  return <Reveal className={`section-head ${dark ? 'light' : ''}`}>
    <span className="eyebrow">{eyebrow}</span>
    <div><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
  </Reveal>
}

function Count({ value, suffix = '+' }) {
  return <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>{value}{suffix}</motion.span>
}

export default function Home() {
  const hero = useRef(null)
  const { scrollYProgress } = useScroll({ target: hero, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '45%'])
  const [testimonial, setTestimonial] = useState(0)

  return <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .45 }}>
    <PageSEO title="MAS FASHIONS (A Unit of Zeal Groups.) | Uniform Manufacturers in Tiruppur, India" description="MAS FASHIONS (A Unit of Zeal Groups.) manufactures customized corporate, school, industrial, healthcare and hospitality uniforms with branding, quality control and global delivery." />
    <section className="hero" ref={hero}>
      <motion.div className="hero-bg" style={{ y: bgY }} />
      <div className="hero-shade" />
      <motion.div className="hero-content container" style={{ y: textY }}>
        <motion.span className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }}>Premium uniform manufacturing</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .35 }}>Professional uniform solutions<br/><em>for every industry.</em></motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .55 }}>Delivering premium-quality corporate uniforms, school uniforms, and industrial workwear designed for comfort, durability, and brand excellence.</motion.p>
        <motion.div className="hero-buttons" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .75 }}><ConversionActions source="home-hero" light note="Custom solutions · Bulk manufacturing · Global delivery" /></motion.div>
      </motion.div>
      <div className="scroll-cue"><span>Scroll to discover</span><i /></div>
      <div className="hero-index">01 <span>/</span> 04</div>
    </section>

    <section className="intro-section container">
      <Reveal className="intro-statement">
        <span className="eyebrow">Trusted uniform manufacturing partner</span>
        <h2>Quality uniforms.<br/>Made around <em>your needs.</em></h2>
      </Reveal>
      <Reveal className="intro-side" delay={.12}>
        <p>We specialize in designing and manufacturing high-quality uniforms tailored to businesses, schools, and industrial organizations. Our expertise, production capabilities, and commitment to quality make us a trusted partner across sectors.</p>
        <Link className="text-link" to="/about">About MAS FASHIONS (A Unit of Zeal Groups.) <Icon name="arrow" size={17}/></Link>
      </Reveal>
    </section>

    <section className="section-pad categories-section">
      <div className="container">
        <SectionHead eyebrow="Our product categories" title={<>Purpose-built for<br/><em>every profession.</em></>} copy="Professional uniform solutions developed around the practical and visual needs of your organization." />
        <div className="category-grid">
          {categories.map((item, i) => <Reveal className="category-card" key={item.name} delay={i * .1}>
            <Link to="/products-services">
              <div className="image-wrap"><img src={item.image} style={{ objectPosition: item.pos }} loading="lazy" alt={item.name}/><span className="card-num">0{i + 1}</span></div>
              <div className="card-copy"><div><span>{item.tag}</span><h3>{item.name}</h3></div><span className="circle-arrow"><Icon name="arrow"/></span></div>
            </Link>
          </Reveal>)}
        </div>
      </div>
    </section>

    <section className="trusted">
      <div className="trusted-layout container">
        <Reveal className="trusted-lead">
          <span className="eyebrow">Why clients choose us</span>
          <h2>Built for certainty.<br/><em>Chosen for quality.</em></h2>
          <p>From the first sample to the final dispatch, every decision is made to protect your standards, timeline, and brand.</p>
          <ConversionActions source="home-benefits" light compact primaryLabel="Start your uniform project" />
          <div className="trusted-proof"><strong>15+</strong><span>Years delivering dependable uniform programs</span></div>
        </Reveal>
        <div className="benefit-grid">
          {benefits.map((benefit, i) => <Reveal className="benefit-card" key={benefit.title} delay={i * .06}>
            <div className="benefit-top"><span>0{i + 1}</span><i><Icon name={benefit.icon} size={25}/></i></div>
            <div><h3>{benefit.title}</h3><p>{benefit.copy}</p></div>
          </Reveal>)}
        </div>
      </div>
    </section>

    <section className="section-pad profession-section container">
      <SectionHead eyebrow="Shop by profession" title={<>Designed around the<br/><em>people who wear it.</em></>} />
      <div className="profession-grid">
        {professions.map((item, i) => <Reveal className={`profession-card ${item.className || ''}`} key={item.name} delay={i * .06}>
          <Link to="/collections/professions"><img src={item.image} style={{ objectPosition: item.pos }} loading="lazy" alt={`${item.name} wearing purpose-built MAS FASHIONS (A Unit of Zeal Groups.) uniforms`}/><div className="profession-overlay"/><div className="profession-copy"><span>0{i+1}</span><h3>{item.name}</h3><Icon name="arrow"/></div></Link>
        </Reveal>)}
      </div>
    </section>

    <section className="service-banner">
      <div className="service-art"><img src="/images/embroidery-branding.webp" loading="lazy" alt="Industrial embroidery machine stitching red thread into charcoal uniform fabric" /></div>
      <Reveal className="service-content">
        <span className="eyebrow">Make it unmistakably yours</span>
        <h2>Your identity,<br/><em>in every stitch.</em></h2>
        <p>Fine embroidery, considered printing, and custom name detailing—executed in-house for complete control.</p>
        <div className="service-tags">{['Custom branding', 'Embroidery', 'Printing', 'Name tags'].map(x=><span key={x}>{x}</span>)}</div>
        <Link className="btn btn-outline-light" to="/products-services">Explore branding services <Icon name="arrow" size={17}/></Link>
      </Reveal>
    </section>

    <section className="section-pad products-section">
      <div className="container">
        <SectionHead eyebrow="The collection" title={<>Made to perform.<br/><em>Built to belong.</em></>} copy="Signature pieces that balance modern silhouettes with all-day function." />
        <div className="product-row">
          {products.map((p, i) => <Reveal className="product-card" key={p[0]} delay={i*.05}>
            <div className="product-img"><img src={p[2]} loading="lazy" alt={p[0]}/><button>Quick view</button><span>0{i+1}</span></div>
            <div className="product-info"><div><small>{p[1]}</small><h3>{p[0]}</h3></div><Link aria-label={`Request details for ${p[0]}`} to={`/contact?intent=quote&source=featured-product-${i+1}`}><Icon name="plus"/></Link></div>
          </Reveal>)}
        </div>
        <div className="center-link"><Link className="text-link" to="/collections/all">View all products <Icon name="arrow" size={17}/></Link></div>
      </div>
    </section>

    <section className="story-section">
      <div className="story-image"><img src="/images/hero-uniforms.png" loading="lazy" alt="MAS FASHIONS (A Unit of Zeal Groups.) manufacturing atelier"/></div>
      <Reveal className="story-content">
        <span className="eyebrow">Manufacturing excellence</span>
        <h2>Consistency from concept<br/>to <em>final delivery.</em></h2>
        <p>From concept development and fabric sourcing to production and final delivery, our integrated manufacturing process ensures consistency, quality, and efficiency.</p>
        <div className="story-list">
          {['Product development', 'Integrated production', 'Strict quality control'].map((x,i)=><div key={x}><span>0{i+1}</span><h4>{x}</h4><Icon name="arrow"/></div>)}
        </div>
        <Link className="btn btn-dark" to="/manufacturing">Explore manufacturing <Icon name="arrow" size={17}/></Link>
      </Reveal>
    </section>

    <section className="showcase">
      <div className="showcase-bg"/>
      <div className="showcase-content container">
        <Reveal><span className="eyebrow">Made for more</span><h2>From one team<br/>to <em>everywhere.</em></h2></Reveal>
        <div className="stats">
          {[['10,000','Orders delivered'],['500','Active clients'],['50','Industries served'],['15','Years of craft']].map(([v,l])=><Reveal className="stat" key={l}><Count value={v}/><small>{l}</small></Reveal>)}
        </div>
      </div>
    </section>

    <section className="testimonial-section section-pad container">
      <SectionHead eyebrow="In their words" title={<>Partnerships,<br/><em>worn proudly.</em></>} />
      <div className="testimonial-wrap">
        <div className="quote-mark">“</div>
        <motion.div key={testimonial} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="testimonial">
          <blockquote>{testimonials[testimonial][0]}</blockquote>
          <div className="person"><div className="avatar">{testimonials[testimonial][1][0]}</div><div><strong>{testimonials[testimonial][1]}</strong><span>{testimonials[testimonial][2]}</span></div></div>
        </motion.div>
        <div className="testimonial-nav">
          <span>0{testimonial+1} <i/> 0{testimonials.length}</span>
          <button onClick={()=>setTestimonial((testimonial-1+testimonials.length)%testimonials.length)}><Icon name="chevron"/></button>
          <button onClick={()=>setTestimonial((testimonial+1)%testimonials.length)}><Icon name="chevron"/></button>
        </div>
      </div>
    </section>

    <section className="global-section">
      <div className="global-copy">
        <Reveal><span className="eyebrow">Global reach</span><h2>Made here.<br/><em>Worn worldwide.</em></h2><p>From India to teams across the Middle East and Southeast Asia, our standards travel well.</p></Reveal>
        <div className="country-list">{['India','UAE','Qatar','Saudi Arabia','Kuwait','Oman','Singapore','Malaysia'].map((c,i)=><span key={c}><b>{String(i+1).padStart(2,'0')}</b>{c}</span>)}</div>
      </div>
      <div className="global-map"><img src="/images/global-uniform-logistics.webp" loading="lazy" alt="Premium uniforms prepared for worldwide delivery with international shipping materials" /></div>
    </section>

    <section className="final-cta">
      <Reveal><span className="eyebrow">A reliable manufacturing partner</span><h2>Looking for custom<br/><em>uniform solutions?</em></h2><p>Contact our team today to discuss your requirements and receive a solution tailored to your organization.</p><ConversionActions source="home-final-cta" light note="Tell us the garment type, quantity, branding and target date" /></Reveal>
    </section>
  </motion.main>
}
