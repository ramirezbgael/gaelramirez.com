import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { content } from '../content'

export default function Videos() {
  return (
    <section id="videos" className="py-24 md:py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-3">
          {content.videosTitle}
        </h2>
        <p className="text-white/60 text-sm md:text-base tracking-wide">
          {content.videosSubtitle}
        </p>
      </motion.div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {content.videos.map((video, index) => (
          <motion.a
            key={video.id}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group block"
          >
            <div className="relative aspect-square rounded-xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm">
              <img
                src={video.thumbnail}
                alt={`${video.title} — video`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-accent/30 group-hover:shadow-[0_0_30px_rgba(51,230,255,0.4)] transition-all">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
            </div>
            <p className="text-center mt-4 text-white/70 group-hover:text-white transition-colors">
              {video.title}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
