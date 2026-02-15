import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const timelineData = [
  {
    title: 'Este fue mi primer EP en inglés',
    body: 'Mi primer proyecto formal. Todo en inglés. Estaba buscando mi sonido.',
    embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A642126165&color=%23888888&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true',
    embedHeight: 450,
  },
  {
    title: 'Aquí sentía que encontraba mi sonido',
    body: 'Sentía que por fin el sonido era mío. Bendita Convicción.',
    embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A664899884&color=%23888888&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true',
    embedHeight: 166,
  },
  {
    title: 'Aquí agarraron a mi mamá',
    body: 'Detuvieron a mi mamá. La vida se movió. Seguí haciendo música.',
    embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A889601074&color=%23888888&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true',
    embedHeight: 166,
  },
  {
    title: 'Aquí no me hallaba (rapero triste)',
    body: 'No estaba bien. Fase de rapero triste. Era real.',
    embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A899992204&color=%23888888&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true',
    embedHeight: 166,
  },
  {
    title: 'Me enamoré',
    body: 'Me enamoré. La música cambió.',
    youtubeId: 'qytB9GlEepg',
  },
  {
    title: 'La relación empezó a tener pedos',
    body: 'Las cosas se complicaron. Intentamos que funcionara.',
    youtubeId: 'RDu4PmV6vnk',
  },
  {
    title: 'La relación se iba fracturando',
    body: 'Se estaba rompiendo. Lo sentía.',
    youtubeId: 'Vd0GsRtR8bY',
  },
  {
    title: 'Mataron a mi papá',
    body: 'Mataron a mi papá. Nada volvió a ser igual.',
    youtubeId: '4e_v6oZBYkQ',
  },
  {
    title: 'Sigo con pistas o rastros de mi papá, me duele su ausencia',
    body: 'Sigo encontrando rastros de él. La ausencia se queda.',
    youtubeId: 'BlOgKuJA9i0',
  },
  {
    title: '"Un hijo ha dejado y a su mujer"',
    body: 'Mi papá asesinó a un policía el día que murió.',
    youtubeId: 'Q1BPJLx7VwY',
  },
  {
    title: '"Hijo de un asesino, ahora en eso me convierte"',
    body: 'Cargar con eso. La música lo dice.',
    youtubeId: 'VoIPPRvDmzg',
  },
  {
    title: 'Una para el cumpleaños de mi papá',
    body: 'Para su cumple. Una canción.',
    youtubeId: 'NARpjBkCNDs',
  },
  {
    title: 'Empiezo a sacar lo que me dolía (presente, álbum trabajando)',
    body: 'Por fin estoy sacando lo que guardé. El álbum en el que trabajo ahora.',
  },
]

export default function Timeline() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <nav className="max-w-3xl mx-auto px-6 py-4" aria-label="Navegación">
          <Link
            to="/"
            className="text-lg font-semibold tracking-wide text-white/90 hover:text-white transition-colors"
          >
            GAEL
          </Link>
        </nav>
      </header>

      <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-32">
        <div className="max-w-2xl mx-auto px-6 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-medium text-white/95 tracking-tight mb-16 md:mb-24"
          >
            Historia
          </motion.h1>

          <div className="relative">
            {/* Línea vertical */}
            <div
              className="absolute left-[11px] md:left-[13px] top-0 bottom-0 w-px bg-gradient-to-b from-slate-500/60 via-slate-500/40 to-transparent"
              aria-hidden
            />

            <ul className="space-y-16 md:space-y-20">
              {timelineData.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px 0px -60px 0px' }}
                  transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative pl-10 md:pl-12"
                >
                  {/* Dot */}
                  <div
                    className="absolute left-0 top-1.5 w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-full border border-slate-400/70 bg-[#0a0a0a]"
                    aria-hidden
                  />
                  <h2 className="text-base md:text-lg font-medium text-white/95 leading-snug mb-3">
                    {item.title}
                  </h2>
                  <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-lg mb-4">
                    {item.body}
                  </p>
                  {item.embed && (
                    <div className="mt-4 rounded overflow-hidden">
                      <iframe
                        width="100%"
                        height={item.embedHeight || 166}
                        scrolling="no"
                        frameBorder="0"
                        allow="autoplay"
                        src={item.embed}
                        className="w-full"
                        title={item.title}
                      />
                    </div>
                  )}
                  {item.youtubeId && (
                    <div className="mt-4 rounded overflow-hidden aspect-video w-full max-w-lg">
                      <iframe
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/${item.youtubeId}`}
                        title={item.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 pt-8 border-t border-white/10"
          >
            <Link
              to="/"
              className="text-sm text-white/50 hover:text-white/80 transition-colors"
            >
              ← Volver
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  )
}
