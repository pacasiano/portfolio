import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import WorkCard from "../general/WorkCard";
import unipass from "../../assets/unipass.png";
import workwize from "../../assets/workwize.png";
import ac7 from "../../assets/ac7.png";
import esp32 from "../../assets/esp32.png";
import anna from "../../assets/anna.png";
import unicamp from "../../assets/unicamp.png";
import { motion, useTransform, useScroll } from "framer-motion";

function WorksView({scrollYProgress}) {
    const [projects] = useState([
        {
            title: "Workwize",
            description: "A platform for Task Management",
            image: workwize,
            link: "https://github.com/pacasiano/FullStack",
            role: "Frontend Developer",
            stack: ["React.js", "Tailwind CSS", "Django", "PostgreSQL"],
        },
        {
            title: "AC7",
            description: "E-commerce website for a beauty brand",
            image: ac7,
            link: "https://github.com/pacasiano/AC7",
            role: "Fullstack Developer",
            stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js"],
        },
        {
            title: "UniPASS",
            description: "A Parking Management System for Ateneo de Davao University",
            image: unipass,
            link: "https://unipass.arisenlab.org/login",
            role: "UI/UX & Frontend Developer",
            stack: ["Vue.js", "Tailwind CSS", "Laravel", "MySQL"],
        },
        {
            title: "SensorStack",
            description: "ESP32 Environmental Monitoring System with Blynk",
            image: esp32,
            link: "https://github.com/pacasiano/SensorStack",
            role: "Embedded Systems Developer",
            stack: ["Arduino", "Blynk IoT Platform"],
        },
        {
            title: "Unicamp",
            description:
                "Web-based admin application designed to help administrators efficiently manage campus facilities.",
            image: unicamp,
            link: "https://github.com/pacasiano/uni_camp",
            role: "Frontend Developer",
            stack: ["Flutter", "Material", "Firebase"],
        },
        {
            title: "Anna's Portfolio",
            description: "A commissioned web portfolio using Next.js and Wordpress (headless CMS)",
            image: anna,
            // link: "https://annas-portfolio.vercel.app/",
            role: "Fullstack Developer",
            stack: ["Next.js", "Tailwind CSS", "Wordpress (Headless CMS)"],
        },
    ]);

    const [isLgUp, setIsLgUp] = useState(true);

    useEffect(() => {
        const checkScreen = () => setIsLgUp(window.innerWidth >= 1024);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

    const container = useRef();

    return (
        <motion.div ref={container} className="relative w-screen min-h-screen py-36 flex justify-center items-center overflow-hidden mt-52 bg-[#1C1C1C] border-[#444] border-2 rounded-lg"
            style={{scale: isLgUp ? scale : 1,  rotate: isLgUp ? rotate : 0}}>
            <WorksText container={container} />

            {/* horizontal scroll wrapper */}
            <div className="relative sm:p-10 p-0">
                <div
                    className="relative grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 items-center gap-20 no-scrollbar z-10 "
                >
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`w-[300px] md:w-[400px] lg:w-[450px] 
                            ${index % 3 === 1 ? "2xl:mt-36 mt-0" : "2xl:-mt-36 mt-0"}
                        `}
                            
                        >
                            <div className="transition-transform duration-200">
                                <WorkCard
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    link={project.link}
                                    role={project.role}
                                    stack={project.stack}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

const WorksText = ({container}) => {

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    const sm = useTransform(scrollYProgress, [0, 1], [0, 1000]);

    return (
        <motion.span style={{ y:sm }} className="absolute text-[60vh] -top-[200px] rotate-6 font-bold text-[#252525] font-sans -z-0 text-nowrap">
            Works
        </motion.span>
    )
}

WorksText.propTypes = {
    container: PropTypes.object.isRequired,
}

WorksView.propTypes = {
    scrollYProgress: PropTypes.object.isRequired,
};

export default WorksView;