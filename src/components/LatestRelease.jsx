import { motion } from 'framer-motion'
import { links, content } from '../content'
import SpotifyIcon from './icons/SpotifyIcon'
import YoutubeIcon from './icons/YoutubeIcon'
import AppleMusicIcon from './icons/AppleMusicIcon'

const platformButtons = [
  { label: 'Spotify', href: links.spotifyTracks[0], Icon: SpotifyIcon, color: 'text-[#1DB954]' },
  { label: 'Music', href: links.appleMusic, Icon: AppleMusicIcon, color: 'text-white' },
  { label: 'YouTube', href: links.youtube, Icon: YoutubeIcon, color: 'text-[#FF0000]' },
]

export default function LatestRelease() {
  return (
    <section id="latest" className="py-24 md:py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-[0_0_60px_-15px_rgba(51,230,255,0.2),4px_4px_0_rgba(51,230,255,0.06)] hover:shadow-[0_0_80px_-10px_rgba(51,230,255,0.3),4px_4px_0_rgba(51,230,255,0.1)] transition-shadow duration-500">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 flex-shrink-0">
              <img
                src="/assets/album.jpeg"
                alt="Unnamed Album"
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <p className="text-accent text-xs font-semibold tracking-[0.25em] mb-3">
                {content.latestLabel}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.albumTitle}</h2>
              <div className="space-y-2 mb-8 text-white/70 leading-relaxed">
                {content.albumDescription.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {platformButtons.map(({ label, href, Icon, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(51,230,255,0.2)] transition-all"
                  >
                    <Icon className={`w-4 h-4 ${color}`} />
                    <span className="text-sm">{label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
