import { motion } from 'framer-motion'

export default function Reveal({ children, className = '', delay = 0, y = 28 }) {
  const transition = {
    duration: .95,
    delay,
    ease: [.16, 1, .3, 1],
    times: [0, .28, 1],
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(10px)', scale: .985 }}
      whileInView={{
        opacity: [0, 0, 1],
        y: [y, y * .55, 0],
        filter: ['blur(10px)', 'blur(6px)', 'blur(0px)'],
        scale: [.985, .992, 1],
      }}
      viewport={{ once: true, amount: .18, margin: '0px 0px -8% 0px' }}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}
