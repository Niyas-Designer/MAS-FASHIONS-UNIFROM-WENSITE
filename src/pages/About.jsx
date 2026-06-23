import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PageSEO from '../components/PageSEO'
import ConversionActions from '../components/ConversionActions'
import { Icon } from '../components/Icons'

const values = [
  ['Practical thinking', 'We design around the wearer, operating environment and service life—not appearance alone.'],
  ['Manufacturing discipline', 'Clear specifications, planned operations and stage-by-stage checks protect consistency.'],
  ['Responsive partnership', 'We communicate clearly, surface decisions early and remain accountable to the agreed program.'],
  ['Respect for craft', 'Experienced people, careful construction and attention to finish remain central to every garment.'],
]

export default function About() {
  return <motion.main className="inner-page" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
    <PageSEO title="About MAS FASHION | Uniform Manufacturer in Tiruppur" description="Learn about MAS FASHION, a Tiruppur-based uniform manufacturer combining garment expertise, integrated production, quality control and customized service." />
    <section className="inner-hero about-hero"><span className="eyebrow">Who we are</span><h1>Professional manufacturing.<br/><em>Personalized solutions.</em></h1><p>MAS FASHION helps organizations turn practical uniform requirements into dependable, well-made apparel programs.</p></section>

    <section className="about-split container section-pad"><Reveal><span className="eyebrow">About MAS FASHION</span><h2>Uniform expertise built around quality, durability, and appearance.</h2></Reveal><Reveal delay={.12}><p>Based in Tiruppur, one of India’s most respected garment manufacturing centers, MAS FASHION develops customized uniforms for businesses, schools, factories, healthcare providers, hospitality teams and service organizations.</p><p>We connect design understanding with production reality. That means considering how a garment must move, how often it will be washed, how it represents the organization, and how reliably it can be reproduced across sizes and repeat orders.</p><p>Our purpose is straightforward: make uniform programs easier to manage and better to wear.</p></Reveal></section>

    <section className="about-editorial">
      <div className="about-editorial-image"><img src="/images/pages/about-team.jpg" alt="MAS FASHION design and production team reviewing a uniform" /></div>
      <Reveal className="about-editorial-copy"><span className="eyebrow">Our working philosophy</span><h2>Good uniforms begin with good questions.</h2><p>Before proposing a style, we seek to understand the organization: who wears the garment, what the work involves, where it is performed, what the brand should communicate, and what a successful rollout looks like.</p><p>This creates better decisions about fabric, fit, function, branding, quantity and delivery—while reducing avoidable revisions later.</p><Link className="text-link light-link" to="/contact?intent=quote&source=about-philosophy">Tell us about your team <Icon name="arrow" size={17}/></Link></Reveal>
    </section>

    <section className="strengths-section container section-pad"><Reveal className="inner-section-head"><span className="eyebrow">Our strengths</span><h2>Capability you can<br/><em>build a program around.</em></h2></Reveal><div>{['Experienced production team','Modern manufacturing infrastructure','Customized design solutions','Large-scale production capacity','Consistent quality standards','Customer-centric coordination'].map((x,i)=><Reveal key={x}><span>0{i+1}</span><h3>{x}</h3></Reveal>)}</div></section>

    <section className="about-values section-pad">
      <div className="container"><Reveal className="inner-section-head light"><span className="eyebrow">What guides us</span><h2>Standards behind<br/><em>the finished garment.</em></h2></Reveal><div className="value-grid">{values.map(([title,copy],i)=><Reveal className="value-card" key={title} delay={i*.06}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div></div>
    </section>

    <section className="inner-stats"><Reveal className="inner-stat"><strong>15+</strong><span>Years of garment experience</span></Reveal><Reveal className="inner-stat"><strong>500+</strong><span>Client relationships</span></Reveal><Reveal className="inner-stat"><strong>50+</strong><span>Industries served</span></Reveal><Reveal className="inner-stat"><strong>8</strong><span>International markets</span></Reveal></section>

    <section className="about-journey container section-pad">
      <Reveal className="inner-section-head"><span className="eyebrow">A dependable partner</span><h2>What working with<br/><em>MAS FASHION feels like.</em></h2></Reveal>
      <div className="process-grid light-process">{[['Clear discovery','We turn varied stakeholder needs into a practical written brief.'],['Considered development','Options are narrowed through fabrics, designs, samples and fit decisions.'],['Controlled execution','Approved details guide production, branding, inspection and packing.'],['Responsive continuity','Program knowledge supports rollout questions and future replenishment.']].map(([title,copy],i)=><Reveal className="process-step" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div>
    </section>

    <section className="faq-section section-pad container"><Reveal className="inner-section-head"><span className="eyebrow">Frequently asked questions</span><h2>Getting to know<br/><em>our company.</em></h2></Reveal><div className="faq-list">
      {[['Where is MAS FASHION located?','Our facility is located on Mangalam Road in Tiruppur, Tamil Nadu, India.'],['What types of organizations do you serve?','We work with corporate offices, educational institutions, factories, healthcare providers, hotels, restaurants, retailers and service teams.'],['Do you only manufacture large orders?','We specialize in organizational and bulk uniform requirements. Project feasibility depends on product type, customization and quantity, so the best first step is to share your brief.'],['Can MAS FASHION develop a product from the beginning?','Yes. We can support design consultation, fabric selection, pattern development, sampling, branding, production, quality control and dispatch.']].map(([q,a],i)=><Reveal className="faq-item" key={q}><span>0{i+1}</span><div><h3>{q}</h3><p>{a}</p></div></Reveal>)}
    </div></section>

    <section className="inner-cta"><Reveal><span className="eyebrow">Work with us</span><h2>Looking for a manufacturer who understands the whole program?</h2><p>Share your organization, roles, quantities and objectives. We will help you define a clear route forward.</p><ConversionActions source="about-final" light primaryLabel="Start your uniform project" /></Reveal></section>
  </motion.main>
}
