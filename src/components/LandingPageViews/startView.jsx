import GlitchText from "../general/glitch"
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComputerMouse } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
// import DownloadButton from "../general/cv_button"
import { useEffect } from "react"

export default function StartView() {

    const [texts,] = useState([
        "Fullstack Developer",
        "IoT Enthusiast",
        "Hobbyist Photographer",
    ])

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scale = Math.max(1 - scrollY / 5000, 0.6);
    const opacity = Math.max(1 - scrollY / 400, 0.2);

    return (
    <div className="relative w-full h-full flex flex-col justify-between items-center z-40" style={{ transform: `scale(${scale})`, opacity }}>
        <div className="absolute top-1/3 flex flex-col items-start justify-center font-semibold gap-4 drop-shadow-lg">
            <div className="flex flex-col gap-2 transition-transform">
            <div className="sm:text-[5rem] text-[2rem] flex flex-row items-center justify-center gap-6">
                <div className="flex flex-row items-center justify-center">
                    <span className="text-[#6B9374] font-black">pacasiano</span>
                    <span className="text-[#687569] opacity-60 pl-10 pt-1">/&gt;</span>
                </div>
            </div>

            <div className="w-[250px] flex flex-col gap-1.5">
                <p className="text-lg text-primary font-semibold text-wrap md:text-nowrap">
                <GlitchText phrases={texts} delay={1500} />
                </p>
            </div>
            </div>
        </div>

        <div className="absolute bottom-56 flex flex-col items-center gap-6">
            <Link
            to="#Works"
            className="flex flex-col items-center text-[#2b2b2b] hover:text-[#7964be] transition"
            >
            <FontAwesomeIcon icon={faComputerMouse} className="text-2xl animate-bounce" />
            <span className="text-sm mt-1">Learn More</span>
            </Link>
        </div>

        {/* <DownloadButton label="Download Resume"/> */}
    </div>
    )
}