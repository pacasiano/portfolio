import { motion, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';

export default function StartView({ scrollYProgress }) {
  const texts = ['Fullstack Developer', 'IoT Enthusiast', 'Hobbyist Photographer'];

  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);

  return (
    <section
      id="start"
      className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-[#0B0C10]"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[35%] top-[30%] h-[600px] w-[600px] rounded-full bg-[#7779FF]/[0.08] blur-[150px]" />

        <div className="absolute right-[15%] top-[45%] h-[450px] w-[450px] rounded-full bg-[#4B7CFF]/[0.05] blur-[140px]" />

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#111216] to-transparent" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
          className="absolute -right-60 -top-60 h-[550px] w-[550px] rounded-full border border-white/[0.025]"
        />
      </div>

      <motion.div
        style={{ y, scale, opacity }}
        className="relative z-10 flex max-w-5xl flex-col items-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#829187]"
        >
          Portfolio / 2026
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center"
        >
          <h1 className="text-[3rem] font-black tracking-[-0.06em] text-[#B1B2FF] sm:text-[5rem] lg:text-[7rem]">
            pacasiano
          </h1>

          <span className="ml-4 mt-4 text-2xl font-light text-[#626473] sm:text-4xl">/&gt;</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-2 min-h-[32px] text-lg font-medium text-[#B4B5BE] sm:text-xl"
        >
          <Typewriter
            options={{
              strings: texts,
              autoStart: true,
              loop: true,
              delay: 45,
              deleteSpeed: 25,
              pauseFor: 1800,
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-7 max-w-xl text-sm leading-7 text-[#7f8982] sm:text-base"
        >
          Building thoughtful digital experiences across web, mobile, backend, and embedded systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-9 flex items-center gap-3"
        >
          <a
            href="#works"
            className="rounded-full bg-[#9B9DFF] px-6 py-3 text-sm font-semibold text-[#0B0C10] transition hover:bg-[#B6B7FF]"
          >
            View my work
          </a>

          <a
            href="#about"
            className="rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-[#B4B5BE] transition hover:border-[#9B9DFF]/40 hover:bg-[#9B9DFF]/5 hover:text-white"
          >
            About me
          </a>
        </motion.div>
      </motion.div>

      {/* Next section indicator */}
      <motion.a
        href="#works"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-[#667069] transition hover:text-[#8FAF96]"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Explore</span>

        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-lg"
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}

StartView.propTypes = {
  scrollYProgress: PropTypes.object.isRequired,
};
