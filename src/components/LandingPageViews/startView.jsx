import { useState } from 'react'

import { Link } from "react-router-dom"
import { motion, useTransform } from "framer-motion"
import PropTypes from "prop-types"
import Typewriter from "typewriter-effect"

export default function StartView({scrollYProgress}) {

    // eslint-disable-next-line no-unused-vars
    const [texts, setTexts] = useState([
        "Fullstack Developer",
        "IoT Enthusiast",
        "Hobbyist Photographer",
    ])

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -10])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
    <div className="sticky top-0 h-screen w-screen overflow-clip flex flex-col justify-between items-center">
        <motion.div className="absolute top-1/3 flex flex-col items-start justify-center font-semibold gap-4" style={{scale, rotate, opacity}}>
            <div className="flex flex-col gap-2 transition-transform">
            <div className="sm:text-[5rem] text-[2rem] flex flex-row items-center justify-center gap-6">
                <div className="flex flex-row items-center justify-center">
                    <span className="text-[#6B9374] font-black">pacasiano</span>
                    <span className="text-[#687569] opacity-60 pl-10 pt-1">/&gt;</span>
                </div>
            </div>

            <div className="w-[250px] flex flex-col gap-1.5">
                <span className="text-lg text-primary font-semibold text-wrap md:text-nowrap">
                    <span style={{ display: "inline-block" }}>
                        <Typewriter
                            options={{
                            strings: texts,
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            deleteSpeed: 20
                            }}
                        />
                    </span>
                </span>
            </div>
            </div>
        </motion.div>

        <div className="absolute bottom-56 flex flex-col items-center gap-6">
            <Link
            to="#works"
            className="flex flex-col items-center text-[#2b2b2b] hover:text-[#6B9374] transition"
            >
            <i className="text-2xl animate-bounce fa fa-computer-mouse" />
            <span className="text-sm mt-1">Learn More</span>
            </Link>
        </div>
    </div>
    )
}

StartView.propTypes = {
    scrollYProgress: PropTypes.object.isRequired,
}