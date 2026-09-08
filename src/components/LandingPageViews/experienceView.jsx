import { motion } from 'framer-motion';

const experiences = [
  {
    period: '2026 — Present',
    company: 'Global Worklife / CDP Group',
    role: 'Developer / QA',
    description:
      'Working across enterprise HR software development, integration, testing, and product delivery.',
    highlights: [
      'Vue 3 and TypeScript frontend development',
      'Java and Spring Boot backend development',
      'REST API and third-party integrations',
      'HR, payroll, certificate, and reporting features',
      'Excel import/export workflows',
      'Test case design and release validation',
    ],
  },
  {
    period: '2024 — 2025',
    company: 'Research in Information Systems and Software Engineering Lab',
    role: 'Intern · Ateneo de Davao University',
    description:
      'Worked on software engineering and information systems projects within an academic research environment.',
    highlights: [],
  },
  {
    period: '2024',
    company: 'SAMAHAN Systems and Development',
    role: 'Front-end Developer',
    description:
      'Contributed to frontend development for student-led systems and digital projects.',
    highlights: [],
  },
];

export default function ExperienceView() {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden bg-[#111216] px-5 py-28 text-white sm:px-10 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[8%] top-[15%] h-[480px] w-[480px] rounded-full bg-[#7779FF]/[0.03] blur-[160px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.035]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#829187]">
            Professional journey
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Experience.
          </h2>
        </motion.div>

        <div className="space-y-0 border-t border-white/[0.06]">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="grid grid-cols-1 gap-6 border-b border-white/[0.06] py-10 md:grid-cols-[190px_1fr] md:py-12"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#829187]">
                  {experience.period}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold tracking-[-0.02em] text-white">
                  {experience.company}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#B1B2FF]">{experience.role}</p>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-[#7f8982]">
                  {experience.description}
                </p>

                {experience.highlights.length > 0 && (
                  <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">
                    {experience.highlights.map((highlight) => (
                      <div key={highlight} className="flex gap-3 text-sm text-[#B4B5BE]">
                        <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[#9B9DFF]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
