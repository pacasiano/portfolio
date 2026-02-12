import { motion, useInView } from "framer-motion";
import { useRef } from 'react';
import Typewriter from 'typewriter-effect';

export default function AboutView() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: "some" });

  const skills = [
    "HTML", "CSS", "JavaScript", "Vue.js",
    "Tailwind CSS", "React.js", "Next.js",
    "Laravel", "C++", "Python", "Node.js",
    "Express.js", "Django", "Wordpress",
    "PHP", "MySQL", "PostgreSQL", "Git",
    "Figma", "Lightroom", "Arduino",
    "Dart", "Flutter"
  ];

  const workExperience = [
    { "2024-2025": "Ateneo De Davao Research in Information Systems and Software Engineering Lab Intern" }, 
    { "2024-2024": "SAMAHAN Systems and Development | Front-end Developer" }
  ];

  const education = [
    {"2020-2025": "Ateneo de Davao University"},
    {"2018-2020": "San Pedro College Davao City"},
  ];

  const ref2 = useRef(null);
  const isInViewWord = useInView(ref, {
      once: false,
      amount: "some",
  });

  return (
    <div className="relative w-full min-h-screen flex flex-col pt-36 justify-center items-center overflow-hidden text-white">

      {/* Background decorative text */}
      <p className="absolute text-[15rem] font-bold text-[#2a2a2a] top-10 left-0 -rotate-12 z-0 select-none pointer-events-none">About</p>
      <p className="absolute text-[15rem] font-bold text-[#2a2a2a] right-0 bottom-0 -rotate-6 z-0 select-none pointer-events-none">About</p>

      {/* Main container */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col sm:w-[80%] w-[95%] gap-12"
      >

        {/* move to inside the main container */}
      <span className="absolute font-black overflow-visible -top-28 sm:-left-16 left-50 text-[5vh] font-sans -rotate-6 text-highlight">
        <motion.div
            ref={ref2}
            initial={{ opacity: 0, x: -100 }}
            animate={isInViewWord ? { opacity: 1, x: 10 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
        About Me!
        </motion.div>
      </span> 

        {/* Personal info + typewriter code */}
        <div className="bg-[#1b1b1b] p-8 rounded-xl shadow-lg border border-[#444]">
          <p className="text-xl mb-4">Hey, I&apos;m <span className="text-accentDark font-bold">Peter Andre Casiano</span>!</p>
          <div className="bg-[#111] p-4 rounded-md overflow-x-auto">

            <div>
            A Bachelor of Science in Computer Science Graduate from Ateneo de Davao University.{" "}
            <span style={{ display: "inline-block" }}>
              <Typewriter
                options={{
                  strings: ["I Like Creating!", "I Like Exploring!", "And I Love Learning New Things!"],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 20
                }}
              />
            </span>
          </div>


            {/* <Typewriter
              options={{
                strings: [
                  'class AboutMe {',
                  '  constructor() {',
                  '    this.name = "Peter Andre Casiano";',
                  '    this.location = "Davao City";',
                  '    this.email = "pacasiano@icloud.com";',
                  '  }',
                  '}'
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 20
              }}
            /> */}

          </div>
        </div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1b1b1b] p-6 rounded-xl shadow-lg border border-[#444]"
        >
          <h2 className="text-lg font-semibold text-accentDark mb-3">💼 Experience</h2>
          <ul className="list-disc list-inside space-y-2">
            {workExperience.map((job, i) => (
              <li key={i}>
                <span className="font-semibold">{Object.keys(job)[0]}</span>: {Object.values(job)[0]}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#1b1b1b] p-6 rounded-xl shadow-lg border border-[#444]"
        >
          <h2 className="text-lg font-semibold text-accentDark mb-3">🎓 Education</h2>
          <ul className="list-disc list-inside space-y-2">
            {education.map((school, i) => (
              <li key={i}>
                <span className="font-semibold">{Object.keys(school)[0]}</span>: {Object.values(school)[0]}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-[#1b1b1b] p-6 rounded-xl shadow-lg border border-[#444]"
        >
          <h2 className="text-lg font-semibold text-accentDark mb-3">🛠 Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="bg-[#333] px-3 py-1 rounded-full text-sm hover:bg-accentDark hover:text-black transition cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </motion.div>

    </div>
  );
}