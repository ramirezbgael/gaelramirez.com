import { motion } from 'framer-motion'
import { content } from '../content'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-[0_0_60px_-15px_rgba(51,230,255,0.2),4px_4px_0_rgba(51,230,255,0.06)] hover:shadow-[0_0_80px_-10px_rgba(51,230,255,0.3)] transition-shadow duration-500">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 flex-shrink-0">
              <img
                src="/assets/hero.jpeg"
                alt="Gael Ramirez"
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="space-y-4 text-white/90 text-base md:text-lg leading-relaxed">
                {content.aboutText.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
