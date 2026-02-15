import { motion } from 'framer-motion'
import { links, content } from '../content'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-16 px-6 border-t border-white/10"
    >
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <p className="text-white/60 text-sm">
          {content.footerBookings}{' '}
          <a
            href={`mailto:${links.email}`}
            className="text-accent hover:text-accent/80 transition-colors"
          >
            {links.email}
          </a>
        </p>
        <p className="text-white/40 text-xs tracking-widest">
          {content.footerBrand}
        </p>
      </div>
    </motion.footer>
  )
}
