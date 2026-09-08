import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import WorkCard from '../general/WorkCard';
import { motion } from 'framer-motion';
import { supabase } from '../../lib/supabase';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const projectLayouts = [
  'lg:col-span-7',
  'lg:col-span-5',
  'lg:col-span-5',
  'lg:col-span-7',
  'lg:col-span-6',
  'lg:col-span-6',
];

function WorksView() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const container = useRef(null);

  useEffect(() => {
    const loadProjects = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Failed to load projects:', error);
        setLoading(false);
        return;
      }

      setProjects(
        (data ?? []).map((row) => ({
          id: row.id,
          title: row.title,
          description: row.description,
          imageUrls: Array.isArray(row.imageUrls) ? row.imageUrls : [],
          link: row.link,
          role: row.role,
          stack: (row.stack ?? '')
            .split(',')
            .map((tech) => tech.trim())
            .filter(Boolean),
        }))
      );

      setLoading(false);
    };

    loadProjects();
  }, []);

  useEffect(() => {
    if (window.location.hash.toLowerCase() !== '#works') return;

    requestAnimationFrame(() => {
      container.current?.scrollIntoView({
        behavior: 'auto',
        block: 'start',
      });
    });
  }, []);

  return (
    <section
      id="works"
      ref={container}
      className="relative w-full overflow-hidden bg-[#111216] text-white"
    >
      {/* Same ambient language as StartView, kept intentionally subtle. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[12%] top-[8%] h-[520px] w-[520px] rounded-full bg-[#7779FF]/[0.035] blur-[160px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.035]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 py-28 sm:px-10 lg:px-16 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#829187]">
            Selected Work
          </span>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Things I&apos;ve built.
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#7f8982] sm:text-base">
            Projects across web, mobile, backend, automation, and embedded systems.
          </p>
        </motion.div>

        {loading && (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <ProjectSkeleton className="lg:col-span-7" />
            <ProjectSkeleton className="lg:col-span-5" />
            <ProjectSkeleton className="lg:col-span-5" />
            <ProjectSkeleton className="lg:col-span-7" />
          </div>
        )}

        {!loading && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.02 }}
            className="grid grid-cols-1 gap-x-10 gap-y-20 lg:grid-cols-12"
          >
            {projects.map((project, index) => {
              const layout = projectLayouts[index % projectLayouts.length];
              const featured = index % projectLayouts.length === 0 || index % projectLayouts.length === 3;

              return (
                <motion.div
                  key={project.id ?? `${project.title}-${index}`}
                  variants={cardVariants}
                  className={`w-full ${layout}`}
                >
                  <WorkCard
                    title={project.title}
                    description={project.description}
                    imageUrls={project.imageUrls}
                    link={project.link}
                    role={project.role}
                    stack={project.stack}
                    featured={featured}
                    projectNumber={index + 1}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {!loading && projects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-20 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/[0.05] pt-8"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-[#626473]">
              More experiments on
            </span>
            <a
              href="https://github.com/pacasiano"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#B4B5BE] transition hover:text-[#9B9DFF]"
            >
              GitHub
              <span className="transition-transform group-hover:translate-x-1">↗</span>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}

const ProjectSkeleton = ({ className = '' }) => (
  <div className={`h-[420px] animate-pulse bg-white/[0.025] ${className}`} />
);

ProjectSkeleton.propTypes = {
  className: PropTypes.string,
};

export default WorksView;
