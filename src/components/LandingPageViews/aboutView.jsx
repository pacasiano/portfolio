import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const interests = [
  {
    title: 'Photography',
    description:
      'A way to slow down, notice details, and make something visual away from software.',
  },
  {
    title: 'IoT & Hardware',
    description:
      'I enjoy projects where software reaches beyond the screen and interacts with physical systems.',
  },
  {
    title: 'Self-Hosting',
    description:
      'Running my own services gives me room to learn deployment, networking, and system maintenance.',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutView() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [-40, 70]);

  return (
    <section
      id="about"
      ref={container}
      className="relative w-full overflow-hidden bg-[#111216] px-5 py-28 text-white sm:px-10 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: glowY }}
          className="absolute -left-44 top-[30%] h-[520px] w-[520px] rounded-full bg-[#7779FF]/[0.035] blur-[160px]"
        />
        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.035]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1250px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#829187]">
              About me
            </span>

            <h2 className="mt-4 text-4xl font-black leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Developer by profession,
              <span className="block text-[#B1B2FF]">builder by curiosity.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="border-l border-white/[0.07] pl-6 lg:pl-8"
          >
            <p className="text-sm leading-7 text-[#B4B5BE] sm:text-base">
              Hey, I&apos;m <span className="font-semibold text-white">Peter Andre Casiano</span>, a
              Computer Science graduate from Ateneo de Davao University based in Davao City,
              Philippines.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#7f8982] sm:text-base">
              I like understanding software beyond one layer. That curiosity has taken me from
              frontend and backend development to mobile, IoT, automation, deployment, and
              self-hosted infrastructure.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 border-y border-white/[0.06] py-10 sm:py-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#829187]">
            How I think about software
          </span>
          <p className="mt-5 max-w-4xl text-xl font-medium leading-9 text-[#D2D3D9] sm:text-2xl sm:leading-10">
            I like being able to follow software from the interface a user sees, through the
            backend and data layer, all the way to the infrastructure that keeps it running.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#829187]">
            Away from the day job
          </span>
          <h3 className="mt-3 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
            Things I&apos;m curious about.
          </h3>

          <div className="mt-9 grid grid-cols-1 border-t border-white/[0.06] md:grid-cols-3">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="border-b border-white/[0.06] py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <span className="font-mono text-xs text-[#626473]">0{index + 1}</span>
                <h4 className="mt-4 text-xl font-bold text-white">{interest.title}</h4>
                <p className="mt-3 text-sm leading-7 text-[#7f8982]">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 flex flex-col gap-5 border-t border-white/[0.06] pt-9 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#626473]">Based in</span>
            <p className="mt-2 font-medium text-[#B4B5BE]">Davao City, Philippines</p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 self-start text-sm font-semibold text-[#B4B5BE] transition hover:text-[#9B9DFF] sm:self-auto"
          >
            Get in touch <span>↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
