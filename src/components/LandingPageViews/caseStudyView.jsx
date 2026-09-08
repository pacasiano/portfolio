import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const metrics = [
  { value: '68%', label: 'Fewer parameters', detail: '3.01M → 0.96M' },
  { value: '61%', label: 'Faster inference', detail: '37.61ms → 14.63ms' },
  { value: '99%', label: 'Mean recall', detail: 'Best pruned model' },
  { value: '0.848', label: 'mAP50–95', detail: 'Best pruned model' },
];

const pipeline = [
  {
    number: '01',
    title: 'Data Collection',
    description:
      'Captured real-world vehicle footage at the Ateneo de Davao University parking entrance using an IoT camera.',
  },
  {
    number: '02',
    title: 'Model Training',
    description:
      'Built a custom dataset for car-front, car-back, and license-plate detection and trained a YOLOv8 Nano model.',
  },
  {
    number: '03',
    title: 'Model Optimization',
    description:
      'Applied iterative model pruning and fine-tuning across multiple experimental configurations to reduce computational cost.',
  },
  {
    number: '04',
    title: 'Edge Integration',
    description:
      'Designed the optimized model for Raspberry Pi deployment and integration with the UniPass parking management system.',
  },
];

const stack = [
  'Python',
  'YOLOv8',
  'PyTorch',
  'Torch-Pruning',
  'OpenCV',
  'PyTesseract',
  'Raspberry Pi',
  'IoT',
  'Laravel',
  'Vue.js',
  'REST API',
];

const classes = [
  { name: 'car_front', recall: '100%', precision: '97.0%', map: '91.4%' },
  { name: 'car_back', recall: '100%', precision: '98.5%', map: '93.1%' },
  { name: 'license_plate', recall: '97%', precision: '82.6%', map: '70.0%' },
];

export default function CaseStudyView() {
  return (
    <section
      id="case-study"
      className="relative w-full overflow-hidden bg-[#0B0C10] px-5 py-28 text-white sm:px-10 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[10%] top-[8%] h-[560px] w-[560px] rounded-full bg-[#7779FF]/[0.04] blur-[170px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.035]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1250px]">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-4xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#829187]">
            Featured case study · Undergraduate thesis
          </span>

          <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Real-time vehicle detection
            <span className="block text-[#B1B2FF]">with optimized YOLO.</span>
          </h2>

          <p className="mt-7 max-w-3xl text-sm leading-7 text-[#7f8982] sm:text-base">
            A computer vision and IoT project built to automate vehicle monitoring at the Ateneo de
            Davao University parking area. The system detects license plates, determines vehicle
            orientation, and optimizes YOLOv8 for real-time execution on constrained hardware.
          </p>

          <p className="mt-5 text-xs leading-6 text-[#626473]">
            Computer Vision · Deep Learning · Model Optimization · IoT · Edge Computing
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 border-y border-white/[0.06] lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="border-b border-white/[0.06] py-7 pr-5 odd:border-r lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <span className="text-3xl font-black tracking-tight text-[#B1B2FF] sm:text-4xl">
                {metric.value}
              </span>
              <h3 className="mt-3 text-sm font-semibold text-white">{metric.label}</h3>
              <p className="mt-1 text-xs text-[#626473]">{metric.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-14 lg:grid-cols-2">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#829187]">
              The problem
            </span>
            <h3 className="mt-3 text-2xl font-bold">Manual parking monitoring creates bottlenecks.</h3>
            <p className="mt-5 text-sm leading-7 text-[#7f8982]">
              Vehicle entry and exit information was manually recorded by security personnel.
              Recording license plates manually takes time and introduces human error, especially as
              traffic volume increases.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#7f8982]">
              Because the same entrance also serves as the exit, the system needed to identify the
              plate and determine whether the front or rear of the vehicle was facing the camera.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="border-l border-white/[0.07] pl-6 lg:pl-10"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#829187]">
              The approach
            </span>
            <h3 className="mt-3 text-2xl font-bold">One camera. Three detection classes.</h3>
            <div className="mt-6 space-y-4 text-sm leading-6 text-[#B4B5BE]">
              {[
                'Detect the front of a vehicle',
                'Detect the rear of a vehicle',
                'Detect and extract the license plate',
                'Determine whether the vehicle is entering or exiting',
                'Send detection events to the parking management API',
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[#9B9DFF]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-20"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#829187]">
            Development pipeline
          </span>
          <h3 className="mt-3 text-3xl font-bold tracking-[-0.03em]">From parking lot to edge deployment.</h3>

          <div className="mt-8 border-t border-white/[0.06]">
            {pipeline.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="grid grid-cols-1 gap-4 border-b border-white/[0.06] py-7 md:grid-cols-[70px_220px_1fr]"
              >
                <span className="font-mono text-xs text-[#626473]">{step.number}</span>
                <h4 className="text-lg font-bold text-white">{step.title}</h4>
                <p className="text-sm leading-7 text-[#7f8982]">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#829187]">
              Model optimization
            </span>
            <h3 className="mt-3 text-2xl font-bold">65 pruning experiments.</h3>
            <p className="mt-5 text-sm leading-7 text-[#7f8982]">
              Multiple combinations of pruning rate, pruning iterations, and fine-tuning epochs were
              evaluated to find a model that balanced accuracy, size, and inference performance.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#7f8982]">
              Multi-Criteria Decision Analysis combined precision, recall, mAP50–95, inference time,
              and parameter count instead of selecting a model from one metric alone.
            </p>
            <div className="mt-7 border-l border-[#9B9DFF]/30 pl-5">
              <span className="text-xs uppercase tracking-[0.2em] text-[#626473]">Selected model</span>
              <div className="mt-2 font-mono text-lg font-semibold text-[#B1B2FF]">25ep-50pr-12iter</div>
              <p className="mt-1 text-xs text-[#626473]">Composite score · 0.8124</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#829187]">
              Detection performance
            </span>
            <h3 className="mt-3 text-2xl font-bold">Best pruned model.</h3>

            <div className="mt-6 overflow-x-auto border-t border-white/[0.06]">
              <table className="w-full min-w-[550px] text-left">
                <thead>
                  <tr className="border-b border-white/[0.06] text-xs uppercase tracking-[0.15em] text-[#626473]">
                    <th className="py-4 pr-5 font-medium">Class</th>
                    <th className="px-5 py-4 font-medium">Recall</th>
                    <th className="px-5 py-4 font-medium">Precision</th>
                    <th className="py-4 pl-5 font-medium">mAP50–95</th>
                  </tr>
                </thead>
                <tbody>
                  {classes.map((item) => (
                    <tr key={item.name} className="border-b border-white/[0.05] last:border-0">
                      <td className="py-5 pr-5 font-mono text-sm text-[#B1B2FF]">{item.name}</td>
                      <td className="px-5 py-5 text-sm text-[#B4B5BE]">{item.recall}</td>
                      <td className="px-5 py-5 text-sm text-[#B4B5BE]">{item.precision}</td>
                      <td className="py-5 pl-5 text-sm text-[#B4B5BE]">{item.map}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-20 border-y border-white/[0.06] py-10"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#829187]">
            Full system
          </span>
          <h3 className="mt-3 text-3xl font-bold">More than just a model.</h3>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#7f8982]">
            The optimized model formed part of UniPass. A Raspberry Pi runs the detection pipeline,
            identifies vehicle orientation and license plates, and sends detection events to a web
            API. Laravel handles the backend while Vue provides the management interface.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[#B4B5BE]">
            {['Camera', 'Raspberry Pi', 'YOLO Detection', 'REST API', 'UniPass'].map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <span>{item}</span>
                {index < 4 && <span className="text-[#626473]">→</span>}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#829187]">
            Technology
          </span>
          <p className="mt-4 text-sm leading-7 text-[#626473]">{stack.join(' · ')}</p>
        </motion.div>
      </div>
    </section>
  );
}
