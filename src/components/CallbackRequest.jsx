import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { Icon } from './Icons'
import BrandLogo from './BrandLogo'

const categories = [
  'Corporate Uniforms',
  'School Uniforms',
  'Industrial Workwear',
  'Healthcare Uniforms',
  'Hospitality Uniforms',
  'Custom Branding',
  'Other',
]

const FORM_ENDPOINT = 'https://formsubmit.co/manzoor@zealgroups.in'
const MAX_FILE_SIZE = 5 * 1024 * 1024
const SUBMISSION_COOLDOWN = 45 * 1000

export default function CallbackRequest() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [fileName, setFileName] = useState('')
  const [source, setSource] = useState('Request a Call button')
  const openedAt = useRef(0)
  const successReturn = useRef(false)
  const nameRef = useRef(null)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (params.get('callback') !== 'success') return
    successReturn.current = true
    setSubmitted(true)
    setOpen(true)
    params.delete('callback')
    const cleanUrl = `${location.pathname}${params.size ? `?${params.toString()}` : ''}${location.hash}`
    window.history.replaceState({}, '', cleanUrl)
  }, [location.hash, location.pathname, location.search])

  useEffect(() => {
    const openFromCTA = event => {
      setSource(event.detail?.source || 'Website CTA')
      setOpen(true)
    }
    window.addEventListener('mas:open-callback', openFromCTA)
    return () => window.removeEventListener('mas:open-callback', openFromCTA)
  }, [])

  useEffect(() => {
    if (!open) return
    if (successReturn.current) successReturn.current = false
    else setSubmitted(false)
    setSubmitting(false)
    setSubmitError('')
    openedAt.current = Date.now()
    const focusTimer = window.setTimeout(() => nameRef.current?.focus(), 300)
    const onKey = event => event.key === 'Escape' && setOpen(false)
    document.body.classList.add('callback-open')
    window.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(focusTimer)
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('callback-open')
    }
  }, [open])

  const close = () => setOpen(false)
  const openDirectly = () => {
    setSource('Floating Request a Call button')
    setOpen(true)
  }
  const submit = event => {
    const form = event.currentTarget
    setSubmitError('')

    if (!form.reportValidity()) {
      event.preventDefault()
      return
    }
    if (Date.now() - openedAt.current < 2500) {
      event.preventDefault()
      setSubmitError('Please review your details before submitting.')
      return
    }

    const lastSubmission = Number(window.localStorage.getItem('mas-callback-submitted-at') || 0)
    if (Date.now() - lastSubmission < SUBMISSION_COOLDOWN) {
      event.preventDefault()
      setSubmitError('A request was just submitted. Please wait a moment before trying again.')
      return
    }

    const data = new FormData(form)
    const name = String(data.get('Name') || '').trim()
    const phone = String(data.get('Mobile number') || '').trim()
    const email = String(data.get('email') || '').trim()
    const digits = phone.replace(/\D/g, '')
    const attachment = data.get('Uniform reference image')

    if (name.length < 2 || name.length > 80) {
      event.preventDefault()
      setSubmitError('Please enter a valid name between 2 and 80 characters.')
      return
    }
    if (digits.length < 8 || digits.length > 15) {
      event.preventDefault()
      setSubmitError('Please enter a valid mobile number.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      event.preventDefault()
      setSubmitError('Please enter a valid work email address.')
      return
    }
    if (attachment instanceof File && attachment.size > MAX_FILE_SIZE) {
      event.preventDefault()
      setSubmitError('The reference image must be smaller than 5 MB.')
      return
    }
    if (attachment instanceof File && attachment.size > 0 && !['image/png', 'image/jpeg', 'image/webp'].includes(attachment.type)) {
      event.preventDefault()
      setSubmitError('Please upload a PNG, JPG, or WebP reference image.')
      return
    }

    window.localStorage.setItem('mas-callback-submitted-at', String(Date.now()))
    setSubmitting(true)
  }

  return <>
    <button className="callback-tab" onClick={openDirectly} aria-label="Request a call" aria-expanded={open}>
      <Icon name="phone" size={17} />
      <span>Request a call</span>
    </button>

    <AnimatePresence>
      {open && <motion.div
        className="callback-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onMouseDown={event => event.target === event.currentTarget && close()}
      >
        <motion.aside
          className="callback-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Request a call from a uniform consultant"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: .48, ease: [.22, 1, .36, 1] }}
        >
          <div className="callback-top">
            <BrandLogo compact className="callback-mark" />
            <button className="callback-close" onClick={close} aria-label="Close request a call"><Icon name="close" size={27}/></button>
          </div>

          {submitted ? <motion.div className="callback-success" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}}>
            <span>✓</span>
            <p className="eyebrow">Request received</p>
            <h2>We'll call you<br/><em>shortly.</em></h2>
            <p>Thank you for contacting MAS FASHION. A uniform consultant will review your requirements and get in touch during business hours.</p>
            <button className="callback-submit" onClick={close}>Close</button>
          </motion.div> : <>
            <div className="callback-heading">
              <span className="eyebrow">Personal consultation</span>
              <h2>Speak with our<br/><em>uniform consultant.</em></h2>
              <p>Share a few details and our team will call you to discuss the right uniform solution.</p>
            </div>

            <form className="callback-form" action={FORM_ENDPOINT} method="POST" encType="multipart/form-data" onSubmit={submit}>
              <input className="form-honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />
              <input type="hidden" name="_subject" value="New Request a Call Submission" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_blacklist" value="viagra,casino,cryptocurrency,loan offer,adult content" />
              <input type="hidden" name="_next" value={`${window.location.origin}/?callback=success`} />
              <input type="hidden" name="Enquiry source" value={source} />
              <input type="hidden" name="Submitted from" value={window.location.href} />
              <input type="hidden" name="Submitted at" value={new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} />
              <label>
                <span>Your name*</span>
                <input ref={nameRef} required name="Name" minLength="2" maxLength="80" autoComplete="name" placeholder="Full name" />
              </label>
              <label>
                <span>Company name</span>
                <input name="Company name" maxLength="120" autoComplete="organization" placeholder="Organization" />
              </label>
              <label>
                <span>Mobile number*</span>
                <input required name="Mobile number" type="tel" inputMode="tel" autoComplete="tel" pattern="[0-9+\s()-]{8,20}" placeholder="+91 00000 00000" />
              </label>
              <label>
                <span>Work email*</span>
                <input required name="email" type="email" maxLength="120" autoComplete="email" placeholder="name@company.com" />
              </label>
              <label>
                <span>Uniform category*</span>
                <select required name="Uniform category" defaultValue="">
                  <option value="" disabled>Select a category</option>
                  {categories.map(category => <option key={category}>{category}</option>)}
                </select>
              </label>
              <label>
                <span>Quantity required</span>
                <input name="Quantity required" type="number" inputMode="numeric" min="1" max="1000000" placeholder="Approximate pieces" />
              </label>
              <label>
                <span>Additional notes</span>
                <textarea name="Additional notes" rows="2" maxLength="1500" placeholder="Fabric, branding, timeline, or other details" />
              </label>
              <label className="callback-upload">
                <span>Uniform reference image <small>Optional</small></span>
                <p>Add a sample image to show the design you want. PNG, JPG, or WebP up to 5 MB.</p>
                <input
                  name="Uniform reference image"
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={event => {
                    const file = event.target.files?.[0]
                    if (file && file.size > MAX_FILE_SIZE) {
                      event.target.value = ''
                      setFileName('')
                      setSubmitError('The reference image must be smaller than 5 MB.')
                      return
                    }
                    setSubmitError('')
                    setFileName(file?.name || '')
                  }}
                />
                <span className="upload-button"><Icon name="upload" size={17}/>{fileName || 'Choose image'}</span>
              </label>
              {submitError && <div className="callback-error" role="alert"><p>{submitError}</p></div>}
              <button className="callback-submit" type="submit" disabled={submitting}>{submitting ? 'Sending request…' : 'Request my call'} {!submitting && <Icon name="arrow" size={17}/>}</button>
              <p className="callback-privacy">By submitting, you agree that MAS FASHION may contact you about this request.</p>
            </form>
          </>}
        </motion.aside>
      </motion.div>}
    </AnimatePresence>
  </>
}
