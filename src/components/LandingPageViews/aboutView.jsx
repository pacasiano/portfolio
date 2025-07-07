
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// eslint-disable-next-line no-unused-vars
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useMemo } from 'react';
import { useRef } from 'react';
import { motion, useInView } from "framer-motion";

export default function AboutView() {

    const codeString = `
class AboutMe {
    constructor() {
        this.name = "Peter Andre Casiano";
        this.location = "Davao City";
        this.email = "pacasiano@icloud.com";
    }
    
    workExperience() {
        return ([
        { "2024-2025": "ARISEn Intern" }
        ]);
    }
    
    education() {
        return ([
        {"2020-2025": "Ateneo de Davao University"},
        {"2018-2020": "San Pedro College Davao City"},
        {"2015-2018": "ABC Educational Development Center"},
        ]);
    }
    
    skills() {
        return [
            "HTML", "CSS", "JavaScript", "Vue.js",
            "Tailwind CSS", "React.js", "Next.js",
            "Laravel", "C++", "Python", "Node.js",
            "Express.js", "Django", "Wordpress",
            "Php", "MySQL", "PostgreSQL", "Git",
            "Figma", "Lightroom", "Arduino",
            "Dart", "Flutter"
        ];
    }
}
`;

    const memoizedHighlighter = useMemo(
        () => (
            <SyntaxHighlighter language="javascript" style={okaidia} showLineNumbers className="select-text">
                {codeString}
            </SyntaxHighlighter>
        ),
        [codeString]
    );

    const ref = useRef(null);
    const isInView = useInView(ref, { 
        once: true,
     });  // Animates only the first time it's in view

    return (
        <div className="relative w-full h-full flex flex-col justify-center items-center sm:py-36 py-0  overflow-hidden">

            {/* <div className="absolute flex flex-col justify-center items-center top-0 -translate-x-[150px]">
                <div className="bg-[#54438b] h-[150px] w-1"></div>
            </div> */}

            {/* <p className="absolute text-[55vh] font-bold text-[#9f9f9f] z-0">About</p> */}
            <p className="absolute text-9xl font-bold text-[#9f9f9f] top-14 left-11 -rotate-12 z-0">About</p>
            <p className="absolute text-9xl font-bold text-[#9f9f9f] right-8 bottom-10 -rotate-6 z-0 overflow-hidden">About</p>

            <div className='sm:w-[80%] w-[180%] sm:scale-100 scale-50 z-10 select-text'>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}} // Only animate if in view
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >   
                    <div className="w-full">
                        {memoizedHighlighter}
                    </div>
                </motion.div>
            </div>

        </div>
    )
}