import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const navLinks = [
  { href: '#latest', label: 'Latest' },
  { href: '#videos', label: 'Videos' },
  { href: '#about', label: 'About' },
  { href: '#follow', label: 'Follow' },
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between" aria-label="Main navigation">
        <Link to="/" className="text-xl font-bold tracking-wider text-white hover:text-accent transition-colors">
          GAEL
        </Link>
        <ul className="flex gap-6 md:gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm md:text-base text-white/80 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/timeline"
              className="text-sm md:text-base text-white/80 hover:text-accent transition-colors"
            >
              Historia
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}
