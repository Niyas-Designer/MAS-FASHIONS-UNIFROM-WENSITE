import { motion } from 'framer-motion'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PageSEO from '../components/PageSEO'
import { Icon } from '../components/Icons'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [searchParams] = useSearchParams()
  const source = searchParams.get('source') || 'direct'
  return <motion.main className="contact-wrap" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
    <PageSEO title="Contact MAS FASHION | Request a Uniform Manufacturing Quote" description="Contact MAS FASHION in Tiruppur for corporate, school, industrial, healthcare and hospitality uniform manufacturing, customization and bulk quotes." />
    <section className="contact-page">
      <section className="contact-copy">
        <span className="eyebrow">Contact us</span>
        <h1>Let's discuss your<br/><em>uniform requirements.</em></h1>
        <p>Share the roles, quantity, branding and timeline you have in mind. Our team will help turn the brief into a practical uniform solution.</p>
        <div className="contact-details">
          <a href="mailto:manzoor@zealgroups.in">manzoor@zealgroups.in</a>
          <a href="tel:+919944187371">+91 99441 87371</a>
          <address>Kullegoundenpudur, Kolipannai,<br/>SF 183/3B, Mangalam Road,<br/>Tiruppur, Tamil Nadu – 641687, India</address>
          <span className="business-hours">Monday – Saturday · 9:00 AM – 6:00 PM</span>
        </div>
      </section>
      <form className="quote-form" onSubmit={e=>{e.preventDefault();setSent(true)}}>{sent ? <div className="success"><span>✓</span><h2>Thank you.</h2><p>Your brief is with our team. We'll be in touch shortly.</p></div> : <>
        <div className="quote-form-head full"><span className="eyebrow">Step 1 of 1 · Project brief</span><h2>Request a tailored quote.</h2><p>Provide what you know today. Our team will clarify the remaining details with you.</p></div>
        <input type="hidden" name="source" value={source}/>
        <label>Your name<input required name="name" autoComplete="name" placeholder="Full name"/></label><label>Work email<input required name="email" autoComplete="email" type="email" placeholder="name@company.com"/></label>
        <label>Company<input required name="company" autoComplete="organization" placeholder="Company name"/></label><label>Team size<select name="teamSize" defaultValue=""><option value="" disabled>Select range</option><option>1–50</option><option>51–250</option><option>251–1,000</option><option>1,000+</option></select></label>
        <label className="full">Uniform category<select name="category" defaultValue=""><option value="" disabled>Select category</option><option>Corporate uniforms</option><option>School uniforms</option><option>Industrial workwear</option><option>Healthcare uniforms</option><option>Hospitality uniforms</option><option>Multiple categories</option></select></label>
        <label className="full">Your requirements<textarea required name="requirements" rows="4" placeholder="Tell us about garment types, quantity, branding, delivery location and timeline"/></label>
        <button className="btn btn-gold quote-submit full">Send my project brief <Icon name="arrow" size={17}/></button>
        <p className="quote-assurance full">Your information is used only to respond to this enquiry. No obligation, no automated sales sequence.</p>
      </>}</form>
    </section>

    <section className="contact-prep section-pad container"><Reveal className="inner-section-head"><span className="eyebrow">Preparing your brief</span><h2>A few details help us<br/><em>respond more usefully.</em></h2></Reveal><div className="contact-prep-grid">
      {[['Garment & roles','Tell us what each team or role needs to wear.'],['Estimated quantity','Include approximate totals and whether several locations are involved.'],['Branding needs','Share logo methods, names, department colors or labels required.'],['Target timeline','Mention launch, joining, academic or operational dates we should understand.']].map(([t,c],i)=><Reveal className="contact-prep-card" key={t}><span>0{i+1}</span><h3>{t}</h3><p>{c}</p></Reveal>)}
    </div></section>

    <section className="contact-visual"><img src="/images/pages/contact-consultation.jpg" loading="lazy" alt="Uniform consultation at MAS FASHION"/><Reveal><span className="eyebrow">What happens next</span><h2>A practical conversation, not a sales script.</h2><p>We review the brief, identify missing decisions, and recommend the next step—whether that is a design discussion, fabric selection, reference review or sample development.</p></Reveal></section>

    <section className="faq-section section-pad container"><Reveal className="inner-section-head"><span className="eyebrow">Before you contact us</span><h2>Common project<br/><em>questions.</em></h2></Reveal><div className="faq-list">
      {[['How quickly will you respond?','Business enquiries are reviewed during Monday–Saturday working hours. Response timing depends on the detail and complexity of the request.'],['Do I need a finalized design?','No. You can begin with role requirements, reference images or an existing garment. Our team can help develop the specification.'],['Can I send a uniform reference image?','Yes. Use the Request a Call form or email reference images and explain which details you want to retain or change.'],['What information is needed for pricing?','Garment type, approximate quantity, fabric or performance expectations, branding, size range, delivery location and timeline all influence an accurate quotation.']].map(([q,a],i)=><Reveal className="faq-item" key={q}><span>0{i+1}</span><div><h3>{q}</h3><p>{a}</p></div></Reveal>)}
    </div></section>
  </motion.main>
}
