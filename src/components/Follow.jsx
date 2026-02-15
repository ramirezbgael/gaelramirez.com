import { motion } from 'framer-motion'
import { links, content } from '../content'
import SpotifyIcon from './icons/SpotifyIcon'
import YoutubeIcon from './icons/YoutubeIcon'
import InstagramIcon from './icons/InstagramIcon'
import TikTokIcon from './icons/TikTokIcon'
import AppleMusicIcon from './icons/AppleMusicIcon'

const socialLinks = [
  { href: links.spotify, label: 'Spotify', Icon: SpotifyIcon, color: 'text-[#1DB954]' },
  { href: links.youtube, label: 'YouTube', Icon: YoutubeIcon, color: 'text-[#FF0000]' },
  { href: links.instagram, label: 'Instagram', Icon: InstagramIcon, color: 'text-white' },
  { href: links.tiktok, label: 'TikTok', Icon: TikTokIcon, color: 'text-white' },
  { href: links.appleMusic, label: 'Apple Music', Icon: AppleMusicIcon, color: 'text-white' },
]

export default function Follow() {
  return (
    <section id="follow" className="py-24 md:py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          {content.followTitle}
        </h2>
        <p className="text-white/70 text-base md:text-lg max-w-md mx-auto">
          {content.followSubtitle}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-6 md:gap-8"
      >
        {socialLinks.map(({ href, label, Icon, color }, index) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 24px rgba(51, 230, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center hover:border-accent/50 transition-colors"
          >
            <Icon className={`w-6 h-6 md:w-7 md:h-7 ${color}`} />
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
