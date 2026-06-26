import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import PageSEO from '../components/PageSEO'
import ConversionActions from '../components/ConversionActions'
import { Icon } from '../components/Icons'

const pages = {
  products: {
    seo: ['Uniform Products & Custom Branding Services | MAS FASHIONZ (A Unit of Zeal Groups.)', 'Explore corporate, school, industrial, healthcare and hospitality uniforms with custom embroidery, printing and bulk manufacturing from MAS FASHIONZ (A Unit of Zeal Groups.).'],
    eyebrow: 'Products & services',
    title: <>Uniform solutions<br/><em>tailored to your industry.</em></>,
    intro: 'From professional business attire to demanding industrial workwear, every range is engineered around your people, environment, brand standards, and daily performance needs.',
    image: '/images/pages/products-studio.jpg',
    overview: ['One partner. Every uniform requirement.', 'MAS FASHIONZ (A Unit of Zeal Groups.) develops complete uniform programs rather than isolated garments. We combine fit engineering, fabric sourcing, functional detailing, branding, size management, and repeat-order planning into one accountable service.', 'Whether you need an executive capsule for a growing office, a complete school wardrobe, or certified workwear for a large production team, we build the specification around how the garment will actually be worn.'],
    supportImage: '/images/embroidery-branding.webp',
    cards: [
      ['Corporate uniforms', 'Shirts, trousers, blazers, waistcoats and coordinated separates that strengthen brand presentation while remaining comfortable through long working days.'],
      ['School uniforms', 'Smart, easy-care garments developed for movement, frequent washing, climate comfort, dependable sizing, and a consistent institutional identity.'],
      ['Industrial workwear', 'Durable shirts, trousers, coveralls, jackets and high-visibility options designed around job risk, movement, abrasion, and site requirements.'],
      ['Healthcare uniforms', 'Hygienic, breathable scrubs, coats and support-staff uniforms with practical pocketing, easy movement and wash-resistant color.'],
      ['Hospitality uniforms', 'Refined front-of-house, housekeeping, culinary and service garments that balance presentation with the realities of fast-paced operations.'],
      ['Custom branding', 'Embroidery, screen print, heat transfer, name personalization, woven labels and packaging details applied with controlled placement and color consistency.'],
    ],
    processTitle: 'From brief to approved range',
    process: [['Discovery', 'We understand roles, quantities, work conditions, brand rules and delivery priorities.'], ['Design & fabric', 'Our team develops silhouettes, construction details, colors and material recommendations.'], ['Sampling & fit', 'Prototypes are reviewed for appearance, comfort, sizing and functional performance.'], ['Production & rollout', 'Approved styles move through controlled manufacturing, branding, inspection and dispatch.']],
    stats: [['5', 'Core uniform categories'], ['6+', 'Branding techniques'], ['100%', 'Customizable programs'], ['1', 'Accountable production partner']],
    featureTitle: 'Brand consistency, built into every garment',
    featureCopy: 'Our in-house branding capabilities help teams look unified across roles, locations and future repeat orders.',
    features: ['Digitized logo embroidery', 'Screen and transfer printing', 'Name and role personalization', 'Custom labels and trims', 'Department color coding'],
    gallery: [['/images/collections/product-shirt.jpg', 'Executive shirting'], ['/images/collections/product-chef-coat.jpg', 'Culinary uniforms'], ['/images/collections/product-utility-jacket.jpg', 'Industrial workwear']],
    faq: [['Can you develop a uniform from our existing brand guidelines?', 'Yes. We translate approved colors, logos and visual standards into practical garment specifications and provide samples before bulk production.'], ['Do you support mixed product orders?', 'Yes. A program can include different garments for departments, job roles, genders and operating environments under one coordinated project.'], ['Can employee names be added?', 'Yes. We offer individual name embroidery, printed personalization, role identifiers, department colors and custom labeling.'], ['How do repeat orders remain consistent?', 'Approved specifications, artwork, measurements, colors and construction details are recorded to support reliable replenishment.']],
    cta: ['Planning a new uniform range?', 'Share your roles, quantities, preferred styles and timeline. We will recommend a practical route from sampling to delivery.'],
  },
  industries: {
    seo: ['Uniform Solutions for Every Industry | MAS FASHIONZ (A Unit of Zeal Groups.)', 'Industry-specific uniforms for corporate, education, manufacturing, healthcare, hospitality, retail and service teams across India and export markets.'],
    eyebrow: 'Industries we serve',
    title: <>Uniform expertise for<br/><em>every working environment.</em></>,
    intro: 'Each sector places different demands on appearance, movement, safety, hygiene and durability. Our programs begin with those realities—not with a generic garment.',
    image: '/images/pages/industries-team.jpg',
    overview: ['Designed around the work, not just the role.', 'A front-desk associate, machine operator and healthcare professional may all represent an organization, but their garments must perform very differently. We study the tasks, climate, care cycle and visual expectations behind each position.', 'This industry-led approach helps organizations reduce premature garment failure, improve wearer acceptance and present a more consistent identity to customers, students, patients and visitors.'],
    supportImage: '/images/collections/profession-industrial.jpg',
    cards: [
      ['Corporate & office', 'Professional separates for leadership, administration, sales and customer-facing teams, aligned to brand tone and workplace culture.'],
      ['Education', 'Complete programs for schools, colleges and institutions, with durable fabrics, dependable sizing and student comfort at the center.'],
      ['Manufacturing & industrial', 'Workwear configured for movement, visibility, protection, identification and the physical demands of factory environments.'],
      ['Healthcare', 'Scrubs, coats and support uniforms designed for hygiene, mobility, long shifts and clear role recognition.'],
      ['Hospitality & food service', 'Front office, housekeeping, restaurant and culinary uniforms that maintain polish throughout demanding service cycles.'],
      ['Retail & field service', 'Approachable branded apparel for store teams, technicians, delivery personnel and customer service operations.'],
    ],
    processTitle: 'How we engineer by industry',
    process: [['Role mapping', 'We identify teams, responsibilities, environments and presentation priorities.'], ['Risk & performance review', 'Movement, care, heat, visibility, hygiene and durability needs are documented.'], ['Uniform architecture', 'Garment families, role distinctions, branding and sizing are organized as one system.'], ['Pilot and scale', 'Samples are wearer-tested before approved standards move into bulk production.']],
    stats: [['50+', 'Industries served'], ['8', 'Export markets'], ['500+', 'Client relationships'], ['10k+', 'Orders delivered']],
    featureTitle: 'A program your people will actually wear',
    featureCopy: 'Good uniforms improve recognition and confidence without making the working day harder.',
    features: ['Role-appropriate functionality', 'Climate-conscious fabric choices', 'Inclusive size planning', 'Clear department identification', 'Repeat-order continuity'],
    gallery: [['/images/collections/profession-corporate.jpg', 'Corporate teams'], ['/images/collections/profession-healthcare.jpg', 'Healthcare professionals'], ['/images/collections/profession-hospitality.jpg', 'Hospitality service']],
    faq: [['Can you support multiple departments in one organization?', 'Yes. We can create a coordinated system with different silhouettes, colors and functional details for each role while preserving one brand language.'], ['Do you recommend fabrics based on the work environment?', 'Yes. Fabric recommendations consider climate, movement, care frequency, abrasion, hygiene and the required level of formality.'], ['Can you produce safety-focused workwear?', 'We develop workwear with practical safety features such as visibility details, reinforced construction and role-specific pocketing based on the client brief.'], ['Do you serve organizations outside India?', 'Yes. MAS FASHIONZ (A Unit of Zeal Groups.) supports clients in India, the Middle East and Southeast Asia, with packing and dispatch planned around the destination.']],
    cta: ['Tell us how your team works.', 'We will turn your operating environment, brand standards and role requirements into a clear uniform specification.'],
  },
  manufacturing: {
    seo: ['Uniform Manufacturing Capabilities in Tiruppur | MAS FASHIONZ (A Unit of Zeal Groups.)', 'Discover the end-to-end garment manufacturing process at MAS FASHIONZ (A Unit of Zeal Groups.): development, pattern making, sampling, cutting, stitching, branding, quality control and logistics.'],
    eyebrow: 'Manufacturing capabilities',
    title: <>End-to-end<br/><em>garment production.</em></>,
    intro: 'Integrated development and manufacturing give us tighter control over quality, consistency, lead time, and the details that define a professional uniform.',
    image: '/images/pages/manufacturing-cutting.jpg',
    overview: ['Control from first pattern to final carton.', 'Our manufacturing workflow connects product development, material planning, patterns, samples, production, branding, inspection and logistics. Each approved specification is translated into measurable checkpoints for the production team.', 'That connected process is especially important for uniform programs, where shade, sizing, logo placement and repeat-order consistency matter as much as the appearance of a single garment.'],
    supportImage: '/images/hero-uniforms.png',
    cards: [
      ['Product development', 'Design consultation converts role requirements and brand direction into a manufacturable garment specification.'],
      ['Pattern engineering', 'Precise patterns, grading and markers support accurate fit, efficient material use and consistency across sizes.'],
      ['Sample development', 'Prototypes validate silhouette, construction, fabric behavior, trims, branding and wearer comfort before approval.'],
      ['Material planning & cutting', 'Approved materials are inspected, relaxed, planned and cut with controls for shade, grain and component accuracy.'],
      ['Sewing & branding', 'Trained operators assemble garments through defined operations before embroidery, printing and personalization.'],
      ['Finishing & logistics', 'Pressing, measurement, final audit, packing, assortment control and dispatch complete the production cycle.'],
    ],
    processTitle: 'A disciplined production path',
    process: [['Approved specification', 'Every style begins with confirmed measurements, materials, trims and branding artwork.'], ['Production planning', 'Capacity, material, operation sequence and quality checkpoints are allocated.'], ['In-line control', 'Construction and measurements are monitored while correction is still immediate.'], ['Final release', 'Only audited, correctly packed orders are cleared for dispatch.']],
    stats: [['6', 'Integrated production stages'], ['8', 'Quality checkpoints'], ['100%', 'Pre-production approval'], ['15+', 'Years of garment experience']],
    featureTitle: 'Infrastructure with human judgment',
    featureCopy: 'Technology improves repeatability; experienced people protect the finish and decisions that machines cannot make alone.',
    features: ['Experienced production planning', 'Precision pattern and cutting', 'Skilled sewing operations', 'In-house branding coordination', 'Structured packing control'],
    gallery: [['/images/embroidery-branding.webp', 'Computerized embroidery'], ['/images/collections/category-industrial.jpg', 'Workwear production outcome'], ['/images/global-uniform-logistics.webp', 'Packing and logistics']],
    faq: [['What information is needed before sampling?', 'A useful brief includes garment type, wearer roles, quantity, preferred fabric or performance, branding, size range and target delivery date.'], ['Can you manufacture a client-provided design?', 'Yes. We can review an existing tech pack or physical reference and advise on construction, materials and production feasibility.'], ['How is bulk consistency managed?', 'Approved samples and specifications become production references, supported by material controls, operation checks, measurement verification and final audits.'], ['Can orders be packed by employee, branch or department?', 'Yes. Packing and assortment can be planned around agreed size lists, departments, locations or distribution requirements.']],
    cta: ['Need dependable production at scale?', 'Bring us your approved design or start with our development team. We will define the next practical manufacturing step.'],
  },
  quality: {
    seo: ['Uniform Quality Assurance & Inspection | MAS FASHIONZ (A Unit of Zeal Groups.)', 'Learn how MAS FASHIONZ (A Unit of Zeal Groups.) controls uniform quality through material inspection, fabric testing, cutting, stitching, measurement, finishing, audit and packing checks.'],
    eyebrow: 'Quality assurance',
    title: <>Quality at<br/><em>every stage.</em></>,
    intro: 'Quality is not a final inspection event. It is a sequence of controls that begins before fabric enters production and continues until the packed order is released.',
    image: '/images/pages/quality-inspection.jpg',
    overview: ['Standards made visible and measurable.', 'Uniform quality must survive beyond the delivery carton. We evaluate materials, measurements, seam construction, branding placement, shade, finishing and packing accuracy against the approved specification.', 'Our teams focus on prevention and early correction. In-line verification reduces variation before it can travel through the production process, while final audits protect the presentation and assortment of the delivered order.'],
    supportImage: '/images/collections/product-utility-jacket.jpg',
    cards: [
      ['Raw material inspection', 'Fabric, trims, labels and accessories are checked against approved type, color, quantity and visible condition.'],
      ['Fabric evaluation', 'Width, shade, appearance and relevant performance expectations are reviewed before cutting authorization.'],
      ['Cutting inspection', 'Panels are verified for grain, direction, notches, shade grouping, component count and size accuracy.'],
      ['Stitching control', 'In-line checks monitor seam quality, operation accuracy, construction, workmanship and correction.'],
      ['Measurement verification', 'Critical points are measured against approved specifications with tolerances appropriate to the garment.'],
      ['Finishing inspection', 'Thread trimming, pressing, stains, trims, fastenings, branding and overall appearance are reviewed.'],
      ['Final audit', 'Finished quantities are sampled and assessed before the order is released for packing or dispatch.'],
      ['Packaging inspection', 'Size ratios, labels, folding, polybags, cartons and destination markings are checked for accuracy.'],
    ],
    processTitle: 'Prevention, verification, accountability',
    process: [['Define', 'Approved samples and specifications establish measurable expectations.'], ['Inspect', 'Material, construction and measurements are checked at planned stages.'], ['Correct', 'Issues are isolated and resolved close to the operation where they occur.'], ['Release', 'Final audit and packing verification authorize dispatch.']],
    stats: [['8', 'Core inspection stages'], ['3', 'Material, in-line and final controls'], ['100%', 'Approved-specification reference'], ['0', 'Compromise on presentation']],
    featureTitle: 'What our quality team protects',
    featureCopy: 'The objective is a dependable garment that looks correct, fits consistently and performs as intended.',
    features: ['Measurement consistency', 'Construction durability', 'Shade and fabric appearance', 'Branding position and finish', 'Packing and assortment accuracy'],
    gallery: [['/images/collections/product-blazer.jpg', 'Tailoring precision'], ['/images/collections/product-scrub.jpg', 'Clean functional construction'], ['/images/collections/product-chef-coat.jpg', 'Finishing and presentation']],
    faq: [['Is every garment inspected?', 'Quality is controlled through material, in-line, measurement, finishing and final checks. Inspection intensity is planned around the order and approved quality requirements.'], ['How are measurements controlled?', 'Critical measurement points and tolerances are defined in the approved specification and checked during production and final inspection.'], ['How do you avoid shade variation?', 'Material lots are reviewed and managed during planning and cutting so visible shade differences are not mixed carelessly within garments or assortments.'], ['Is branding included in quality checks?', 'Yes. Logo size, color, placement, stitch or print quality and personalization accuracy are reviewed against approved artwork and references.']],
    cta: ['Your standards deserve a clear process.', 'Discuss your quality expectations, inspection requirements and performance priorities with our team.'],
  },
  clients: {
    seo: ['Uniform Manufacturing Partner for Organizations | MAS FASHIONZ (A Unit of Zeal Groups.)', 'MAS FASHIONZ (A Unit of Zeal Groups.) supports businesses, schools, factories, hospitals, hotels and service brands with reliable uniform programs and responsive account support.'],
    eyebrow: 'Client partnerships',
    title: <>Trusted by organizations<br/><em>that cannot compromise.</em></>,
    intro: 'We support organizations that need their uniforms to arrive correctly, perform consistently, and represent the brand every day—not just at launch.',
    image: '/images/pages/clients-review.jpg',
    overview: ['A supplier relationship built around continuity.', 'Uniform programs involve many moving parts: stakeholders, samples, artwork, size information, production schedules, locations and repeat orders. We bring those details into one managed process with clear references and responsive communication.', 'Our goal is not simply to complete a purchase order. It is to become a reliable extension of the client team—protecting product standards while making future replenishment easier.'],
    supportImage: '/images/global-uniform-logistics.webp',
    cards: [
      ['Consultative development', 'We ask practical questions early, helping stakeholders align appearance, performance, quantity and budget.'],
      ['Documented approvals', 'Samples, colors, measurements, artwork and construction are confirmed before bulk production begins.'],
      ['Scalable execution', 'Programs can coordinate multiple roles, products, sizes, branches and scheduled delivery requirements.'],
      ['Responsive communication', 'A clear point of contact helps manage decisions, status updates and changes throughout the project.'],
      ['Repeat-order continuity', 'Approved program references support more consistent replenishment as teams grow or garments need replacement.'],
      ['Responsible value', 'Recommendations balance initial cost with garment life, wearer comfort, operational suitability and brand impact.'],
    ],
    processTitle: 'How partnership becomes performance',
    process: [['Listen', 'We understand business objectives, wearer realities and stakeholder priorities.'], ['Align', 'Specifications, samples, costs and delivery expectations are made clear.'], ['Deliver', 'Production, inspection, packing and dispatch follow the approved plan.'], ['Support', 'Program references and responsive follow-up simplify future needs.']],
    stats: [['500+', 'Organizations supported'], ['50+', 'Industry segments'], ['8', 'International markets'], ['15+', 'Years of relationships']],
    featureTitle: 'What clients value most',
    featureCopy: 'Consistency earns trust. Clear communication and dependable follow-through keep it.',
    features: ['Reliable product quality', 'Practical account support', 'Competitive manufacturing value', 'Planned delivery management', 'Repeat-order readiness'],
    gallery: [['/images/collections/category-corporate.jpg', 'Corporate programs'], ['/images/collections/category-school.jpg', 'Education programs'], ['/images/collections/category-hospitality.jpg', 'Hospitality programs']],
    faq: [['Can you support an organization with multiple locations?', 'Yes. We can plan product assortments, packing and destination requirements around branches, departments or phased rollouts.'], ['How are approvals managed?', 'Garment samples, fabrics, trims, measurements and branding are confirmed before bulk production, creating clear references for all parties.'], ['Do you handle repeat orders?', 'Yes. Retaining approved program details helps improve consistency and speed for replenishment, subject to material availability and current confirmation.'], ['Can you work with procurement and brand teams together?', 'Yes. Our process can accommodate commercial, operational, HR, safety and brand stakeholders so decisions are aligned before production.']],
    cta: ['Looking for a long-term uniform partner?', 'Tell us where the current process creates friction. We will show you how a managed program can work more clearly.'],
  },
  careers: {
    seo: ['Careers at MAS FASHIONZ (A Unit of Zeal Groups.) | Garment Industry Jobs in Tiruppur', 'Explore careers in production, quality, merchandising, design, sales and operations at MAS FASHIONZ (A Unit of Zeal Groups.) in Tiruppur, Tamil Nadu.'],
    eyebrow: 'Careers at MAS FASHIONZ (A Unit of Zeal Groups.)',
    title: <>Build useful skills.<br/><em>Create work that matters.</em></>,
    intro: 'Join a growing uniform manufacturing team where craftsmanship, practical thinking and dependable execution shape products worn by people across industries.',
    image: '/images/pages/careers-team.jpg',
    overview: ['Grow with a team that values the details.', 'Uniform manufacturing brings design, engineering, planning, production, quality, customer understanding and logistics together. It rewards people who care about both the product and the process behind it.', 'At MAS FASHIONZ (A Unit of Zeal Groups.), employees learn through real responsibility, experienced colleagues and exposure to varied client requirements. We value people who communicate clearly, solve problems thoughtfully and take pride in dependable work.'],
    supportImage: '/images/collections/profession-corporate.jpg',
    cards: [
      ['Production staff', 'Build technical garment skills and contribute to accurate, efficient sewing and finishing operations.'],
      ['Quality inspectors', 'Use observation, measurement and process discipline to protect approved standards.'],
      ['Merchandisers', 'Coordinate materials, samples, clients, production priorities and delivery information.'],
      ['Designers & pattern team', 'Translate practical requirements into considered silhouettes, specifications, patterns and samples.'],
      ['Sales executives', 'Develop relationships, understand organizational needs and shape relevant uniform solutions.'],
      ['Operations team', 'Improve planning, coordination, people support, systems, packing and dispatch performance.'],
    ],
    processTitle: 'What the candidate journey looks like',
    process: [['Apply', 'Share your role interest, experience and current contact information.'], ['Conversation', 'We discuss your skills, expectations and the work involved.'], ['Practical review', 'Selected roles may include a skill discussion, task or trade assessment.'], ['Joining & growth', 'Clear induction and on-the-job learning help you become effective quickly.']],
    stats: [['6', 'Career disciplines'], ['1', 'Collaborative production team'], ['100%', 'Skill-first culture'], ['Long-term', 'Growth mindset']],
    featureTitle: 'Why build your career here',
    featureCopy: 'We offer a grounded environment where good work is visible and learning is connected to real outcomes.',
    features: ['Practical skill development', 'Supportive experienced colleagues', 'Cross-functional exposure', 'Professional accountability', 'Long-term progression potential'],
    gallery: [['/images/pages/about-team.jpg', 'Collaborative workplace'], ['/images/pages/manufacturing-cutting.jpg', 'Modern production exposure'], ['/images/pages/quality-inspection.jpg', 'Quality-focused learning']],
    faq: [['How can I apply?', 'Email your resume and preferred role to manzoor@zealgroups.in or contact the team by phone during business hours.'], ['Where are roles based?', 'Our primary operations are in Tiruppur, Tamil Nadu. Role-specific location and working arrangements are discussed during the hiring process.'], ['Do you consider early-career candidates?', 'Yes. Suitability depends on the role, but we value learning ability, responsibility, communication and genuine interest in garment manufacturing.'], ['What should production candidates include?', 'Mention your garment categories, machine or operation experience, years of work, current location and availability.']],
    cta: ['See yourself at MAS FASHIONZ (A Unit of Zeal Groups.)?', 'Send your profile, preferred role and a short introduction. We will contact suitable candidates when an opportunity matches.'],
  },
}

function FAQ({ items }) {
  return <section className="faq-section section-pad container">
    <Reveal className="inner-section-head"><span className="eyebrow">Frequently asked questions</span><h2>Useful answers,<br/><em>before we begin.</em></h2></Reveal>
    <div className="faq-list">{items.map(([question, answer], i) => <Reveal className="faq-item" key={question} delay={i * .04}><span>0{i + 1}</span><div><h3>{question}</h3><p>{answer}</p></div></Reveal>)}</div>
  </section>
}

function CareersActions({ light = false }) {
  return <div className={`cta-actions ${light ? 'cta-actions-light' : ''}`}>
    <div>
      <a className="btn btn-gold" href="mailto:manzoor@zealgroups.in?subject=Career enquiry at MAS FASHIONZ (A Unit of Zeal Groups.)">Email your profile <Icon name="arrow" size={17}/></a>
      <a className={`btn btn-secondary-cta ${light ? 'btn-secondary-light' : ''}`} href="tel:+919944187371">Call the careers team <Icon name="phone" size={16}/></a>
    </div>
    <small className="cta-note">Include your preferred role, experience, current location and availability</small>
  </div>
}

export default function ContentPage({ page }) {
  const data = pages[page]
  const isCareers = page === 'careers'
  return <motion.main className="content-page" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
    <PageSEO title={data.seo[0]} description={data.seo[1]} />
    <section className="content-hero">
      <div className="content-hero-copy"><span className="eyebrow">{data.eyebrow}</span><h1>{data.title}</h1><p>{data.intro}</p>{isCareers ? <CareersActions light/> : <ConversionActions source={`${page}-hero`} light compact />}</div>
      <div className="content-hero-image"><img src={data.image} alt={`${data.eyebrow} at MAS FASHIONZ (A Unit of Zeal Groups.)`} /></div>
    </section>

    <section className="inner-overview container section-pad">
      <Reveal className="inner-overview-copy"><span className="eyebrow">The MAS FASHIONZ (A Unit of Zeal Groups.) approach</span><h2>{data.overview[0]}</h2><p>{data.overview[1]}</p><p>{data.overview[2]}</p></Reveal>
      <Reveal className="inner-overview-image" delay={.1}><img src={data.supportImage} loading="lazy" alt={`${data.eyebrow} supporting detail`} /></Reveal>
    </section>

    <section className="capability-section section-pad">
      <div className="container"><Reveal className="inner-section-head"><span className="eyebrow">What we deliver</span><h2>Capabilities shaped<br/><em>around the outcome.</em></h2></Reveal>
      <div className="capability-grid">{data.cards.map(([title, copy], i) => <Reveal className="capability-card" key={title} delay={(i % 3) * .05}><span>{String(i + 1).padStart(2, '0')}</span><h2>{title}</h2><p>{copy}</p></Reveal>)}</div></div>
    </section>

    <section className="inner-process">
      <div className="container"><Reveal className="inner-section-head light"><span className="eyebrow">How it works</span><h2>{data.processTitle}</h2></Reveal>
      <div className="process-grid">{data.process.map(([title, copy], i) => <Reveal className="process-step" key={title} delay={i*.06}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div></div>
    </section>

    <section className="inner-stats">{data.stats.map(([value, label]) => <Reveal className="inner-stat" key={label}><strong>{value}</strong><span>{label}</span></Reveal>)}</section>

    <section className="page-feature">
      <Reveal className="page-feature-copy"><span className="eyebrow">Built into our service</span><h2>{data.featureTitle}</h2><p>{data.featureCopy}</p>{isCareers ? <CareersActions/> : <ConversionActions source={`${page}-feature`} compact primaryLabel="Discuss your requirements" />}</Reveal>
      <div className="feature-list">{data.features.map((item, i) => <Reveal key={item} delay={i*.04}><span>{String(i+1).padStart(2,'0')}</span><h3>{item}</h3></Reveal>)}</div>
    </section>

    <section className="inner-gallery section-pad container">
      <Reveal className="inner-section-head"><span className="eyebrow">In focus</span><h2>Made with purpose.<br/><em>Finished with care.</em></h2></Reveal>
      <div className="inner-gallery-grid">{data.gallery.map(([image, label], i) => <Reveal className="inner-gallery-card" key={label} delay={i*.08}><img src={image} loading="lazy" alt={label}/><span>0{i+1}</span><h3>{label}</h3></Reveal>)}</div>
    </section>

    <FAQ items={data.faq} />
    <section className="inner-cta"><Reveal><span className="eyebrow">{isCareers ? 'Join the team' : 'Start a conversation'}</span><h2>{data.cta[0]}</h2><p>{data.cta[1]}</p>{isCareers ? <CareersActions light/> : <ConversionActions source={`${page}-final`} light note="A useful brief includes garment type, approximate quantity and timeline" />}</Reveal></section>
  </motion.main>
}
