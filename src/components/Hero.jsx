import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="uppercase tracking-[0.35em] text-xs text-zinc-300"
          >
            Swiss Crafted • Automatic • 200m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-4 text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.1]"
          >
            Precision. <span className="text-amber-400">Power.</span> Perfection.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg text-zinc-300"
          >
            A futurist interpretation of haute horlogerie — engineered to command
            every second.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-10 flex items-center gap-4"
          >
            <a
              href="#collection"
              className="relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium text-black bg-amber-400 hover:bg-amber-300 transition shadow-[0_0_40px_-15px_rgba(251,191,36,0.8)]"
            >
              Explore Collection
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition"
            >
              Our Legacy
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
