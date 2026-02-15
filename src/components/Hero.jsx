import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { links, content } from '../content'
import SpotifyIcon from './icons/SpotifyIcon'
import YoutubeIcon from './icons/YoutubeIcon'

export default function Hero() {
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 800], [0, 120])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background — parallax on scroll */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <img
          src="/assets/hero.jpeg"
          alt="Gael Ramirez"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale opacity-90 scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: 'inset 0 0 120px 40px rgba(0,0,0,0.4)' }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.2em] mb-4">
          {content.artistName}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 tracking-[0.3em] italic">
          {content.heroSubtitle}
        </p>

        <div className="space-y-3 mb-12 max-w-md mx-auto">
          {content.heroStory.map((line, i) => (
            <p key={i} className="text-white/80 text-base md:text-lg">
              {line}
            </p>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <motion.a
            href={links.spotify}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(29, 185, 84, 0.5), 0 0 60px rgba(51, 230, 255, 0.2)' }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl hover:border-accent/50 hover:shadow-[0_0_24px_rgba(51,230,255,0.3)] transition-all"
          >
            <SpotifyIcon className="w-6 h-6 text-[#1DB954]" />
            <span className="font-medium">Listen on Spotify</span>
          </motion.a>
          <motion.a
            href={links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255, 0, 0, 0.5), 0 0 60px rgba(51, 230, 255, 0.2)' }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl hover:border-accent/50 hover:shadow-[0_0_24px_rgba(51,230,255,0.3)] transition-all"
          >
            <YoutubeIcon className="w-6 h-6 text-[#FF0000]" />
            <span className="font-medium">Watch on YouTube</span>
          </motion.a>
        </div>

        <p className="text-sm text-white/50 mb-6">
          {content.heroCta}
        </p>
        <Link
          to="/timeline"
          className="inline-block text-sm text-white/60 hover:text-white/90 transition-colors border-b border-white/30 hover:border-white/50 pb-0.5"
        >
          Historia
        </Link>
      </motion.div>
    </section>
  )
}
