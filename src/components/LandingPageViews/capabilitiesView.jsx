import { motion } from 'framer-motion';

const capabilityGroups = [
  {
    number: '01',
    title: 'Frontend',
    description:
      'Responsive interfaces and application experiences across modern web stacks.',
    skills: ['React', 'Vue.js', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    number: '02',
    title: 'Backend',
    description:
      'APIs, business logic, integrations, data workflows, and server-side application features.',
    skills: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'Python', 'Django', 'PHP', 'Laravel', 'REST APIs'],
  },
  {
    number: '03',
    title: 'Mobile & Embedded',
    description:
      'Cross-platform applications and experiments involving connected devices and embedded systems.',
    skills: ['Flutter', 'Dart', 'Arduino', 'C++', 'IoT'],
  },
  {
    number: '04',
    title: 'Data & Storage',
    description:
      'Relational databases, caching, backend services, and persistent application data.',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'Supabase', 'PocketBase'],
  },
];

const infrastructure = [
  {
    title: 'Containerized Deployment',
    description: 'Deploying and maintaining applications and services with Docker and Docker Compose.',
    skills: ['Docker', 'Docker Compose'],
  },
  {
    title: 'Networking & Access',
    description: 'Reverse proxies, DNS, SSL, and secure external access for self-hosted services.',
    skills: ['Cloudflare', 'Cloudflare Tunnel', 'Nginx', 'Nginx Proxy Manager', 'DNS'],
  },
  {
    title: 'Automation & Integration',
    description: 'Connecting systems through APIs, webhooks, workflow automation, and scheduled jobs.',
    skills: ['n8n', 'Webhooks', 'REST APIs', 'SFTP', 'Google APIs'],
  },
  {
    title: 'Self-Hosted Infrastructure',
    description: 'Operating personal services for development, authentication, monitoring, and experimentation.',
    skills: ['Linux', 'Gitea', 'Zitadel', 'CloudBeaver', 'MeshCentral'],
  },
];

const tools = ['Git', 'GitHub', 'Gitea', 'Figma', 'WordPress', 'Yaak', 'Docker', 'n8n'];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function CapabilitiesView() {
  return (
    <section
      id="capabilities"
      className="relative w-full overflow-hidden bg-[#0B0C10] px-5 py-28 text-white sm:px-10 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-[10%] h-[560px] w-[560px] rounded-full bg-[#7779FF]/[0.04] blur-[170px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.035]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1250px]">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-16 max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#829187]">
            Capabilities
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            From idea to
            <span className="block text-[#B1B2FF]">running software.</span>
          </h2>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-[#7f8982] sm:text-base">
            I work across application development, integrations, deployment, and infrastructure —
            with an interest in the full lifecycle of software rather than only one layer of it.
          </p>
        </motion.div>

        {/* Core areas: editorial rows instead of cards. */}
        <div className="border-t border-white/[0.06]">
          {capabilityGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="grid grid-cols-1 gap-5 border-b border-white/[0.06] py-9 md:grid-cols-[80px_220px_1fr] md:items-start"
            >
              <span className="font-mono text-xs text-[#626473]">{group.number}</span>
              <h3 className="text-xl font-bold text-white">{group.title}</h3>
              <div>
                <p className="max-w-2xl text-sm leading-7 text-[#7f8982]">{group.description}</p>
                <p className="mt-4 text-xs leading-6 text-[#626473]">{group.skills.join(' · ')}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#829187]">
            Deployment & infrastructure
          </span>
          <h3 className="mt-3 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
            I deploy what I build.
          </h3>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#7f8982]">
            I maintain a self-hosted environment where I deploy applications, configure networking,
            automate workflows, and operate supporting services.
          </p>
        </motion.div>

        <div className="mt-9 grid grid-cols-1 border-t border-white/[0.06] md:grid-cols-2">
          {infrastructure.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border-b border-white/[0.06] py-8 md:px-8 md:odd:border-r md:odd:pl-0 md:even:pr-0"
            >
              <h4 className="text-lg font-bold text-white">{item.title}</h4>
              <p className="mt-3 text-sm leading-6 text-[#7f8982]">{item.description}</p>
              <p className="mt-4 text-xs leading-6 text-[#626473]">{item.skills.join(' · ')}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-6 border-y border-white/[0.06] py-9 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#829187]">
              Homelab
            </span>
            <h3 className="mt-3 text-2xl font-bold">My infrastructure playground.</h3>
          </div>
          <p className="text-sm leading-7 text-[#7f8982]">
            My self-hosted environment gives me a place to experiment with deployment, networking,
            authentication, databases, automation, persistence, and maintenance outside a local
            development environment.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#829187]">
            Tools I regularly use
          </span>
          <p className="mt-4 text-sm leading-7 text-[#626473]">{tools.join(' · ')}</p>
        </motion.div>
      </div>
    </section>
  );
}
