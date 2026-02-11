import { useState, useRef } from "react";
import WorkCard from "../general/WorkCard";
import unipass from "../../assets/unipass.png";
import workwize from "../../assets/workwize.png";
import ac7 from "../../assets/ac7.png";
import esp32 from "../../assets/esp32.png";
import anna from "../../assets/anna.png";
import dragonKnight from "../../assets/dragonknight.png";
import unicamp from "../../assets/unicamp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { motion, useInView } from "framer-motion";

export default function WorksView() {
    const [projects] = useState([
        {
            title: "Workwize",
            description: "A platform for Task Management",
            image: workwize,
            link: "https://github.com/pacasiano/FullStack",
            role: "Frontend Developer",
        },
        {
            title: "AC7",
            description: "E-commerce website for a beauty brand",
            image: ac7,
            link: "https://github.com/pacasiano/AC7",
            role: "Fullstack Developer",
        },
        {
            title: "UniPASS",
            description: "A Parking Management System for Ateneo de Davao University",
            image: unipass,
            link: "https://unipass.arisenlab.org/login",
            role: "UI/UX & Frontend Developer",
        },
        {
            title: "SensorStack",
            description: "ESP32 Environmental Monitoring System with Blynk",
            image: esp32,
            link: "https://github.com/pacasiano/SensorStack",
            role: "Embedded Systems Developer",
        },
        {
            title: "Unicamp",
            description:
                "Web-based admin application designed to help administrators efficiently manage campus facilities.",
            image: unicamp,
            link: "https://github.com/pacasiano/uni_camp",
            role: "Frontend Developer",
        },
        {
            title: "Anna's Portfolio",
            description: "A commissioned web portfolio using Next.js and Wordpress (headless CMS)",
            image: anna,
            link: "https://annas-portfolio.vercel.app/",
            role: "Fullstack Developer",
        },
    ]);

    const scrollRef = useRef(null);
    const buttonsRef = useRef(null);
    const isInView = useInView(buttonsRef, {
        amount: 0,
        once: false,
        margin: "-300px 0px 0px 0px",
    });

    const scroll = (direction) => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.querySelector("div.snap-center")?.clientWidth || 400;
            scrollRef.current.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
        }
    };

    const ref = useRef(null);
    const isInViewWord = useInView(ref, {
        once: false,
        amount: "some",
    });

    return (
        <div className="relative w-screen py-36 flex justify-center items-center overflow-hidden mt-52 ">
            <span className="absolute text-[60vh] rotate-6 font-bold text-[#1d1731]/40 font-sans -z-0 text-nowrap">
                Works
            </span>

            {/* Scroll buttons */}
            {/* <div ref={buttonsRef} className="absolute left-1/2 bottom-10 flex transform -translate-x-1/2">
                <motion.button
                    onClick={() => scroll("left")}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    whileHover={{ scale: 1.25, zIndex: 30 }}
                    whileTap={{ scale: 0.9 }}
                    className="z-20 bg-[#03191F]/80 hover:bg-[#294035] text-white px-3.5 py-2 rounded-full rounded-r-none shadow-lg cursor-pointer"
                >
                    <FontAwesomeIcon icon={faChevronLeft} size="lg" />
                </motion.button>

                <motion.button
                    onClick={() => scroll("right")}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    whileHover={{ scale: 1.25, zIndex: 30 }}
                    whileTap={{ scale: 0.9 }}
                    className="z-20 bg-[#03191F]/80 hover:bg-[#294035] text-white px-3.5 py-2 rounded-full rounded-l-none shadow-lg cursor-pointer"
                >
                    <FontAwesomeIcon icon={faChevronRight} size="lg" />
                </motion.button>
            </div> */}

            {/* horizontal scroll wrapper */}
            <div className="relative sm:p-10 p-0">
                <span className="absolute font-black -top-28 lg:-top-20 sm:-left-16 lg:left-0 2xl:-left-16 left-0 text-[5vh] font-sans -rotate-6 text-highlight">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -100 }}
                        animate={isInViewWord ? { opacity: 1, x: 10 } : { opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                    My Works!
                    </motion.div>
                </span>
                <div
                    className="relative grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 items-center gap-20 no-scrollbar z-10 "
                    // style={{ scrollPaddingInline: 'calc(50vw - 150px)' }}
                    ref={scrollRef}
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
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}