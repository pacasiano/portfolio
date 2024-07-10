import GlitchText from "../general/glitch"
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComputerMouse } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export default function StartView() {

    const [texts, setTexts] = useState([
        "A Front-End Developer",
        "A Photographer",
        "A Videographer",
    ])

    return (
        <div className="relative w-full h-full flex flex-col justify-center items-center">
            
            <div className="absolute flex flex-col justify-center items-center translate-y-[400px] -translate-x-[150px]">
                <div className="relative flex items-center justify-center border-[#54438b] border-4 rounded-full w-6 h-6"></div>
                <div className="absolute -translate-y-[350px] bg-[#0A0F15] p-2">
                    <Link to="#Works">
                        <div className="relative transition-all hover:scale-105 cursor-pointer">
                            <FontAwesomeIcon icon={faComputerMouse} className="text-[#54438b] rotate-180  duration-75 text-4xl translate-y-[1.5px]" />
                            <span className="absolute -bottom-24 -left-[135%] rotate-90 text-sm text-nowrap text-[#54438b] bg-[#0A0F15] p-2">Learn more</span>
                        </div>
                    </Link>
                </div>
                <div className="bg-[#54438b] h-[1000px] w-1"></div>
            </div>

            <div className="absolute translate-x-10 flex flex-col items-start justify-center font-semibold gap-4 -translate-y-10 drop-shadow-lg">
                <div className="text-5xl flex flex-col -space-y-6 md:space-y-0 md:flex-row items-center justify-center gap-6">
                    <span className="text-3xl -ml-5 text-[#e4e4e4] font-semibold">Hi, I&apos;m</span>
                    <div className="flex items-center md:translate-x-0 translate-x-5">
                        {/* <span className="text-[#7964be] text-3xl">&lt;</span> */}
                        <span className="text-[#e4e4e4]  font-black text-4xl">Peter</span>
                        <span className="text-[#7964be] pl-1 pt-1 text-3xl">/&gt;</span>
                    </div>
                </div>
                <div className="w-[250px]  flex flex-col gap-1.5">
                    <span className="text-wrap md:text-nowrap">Currently A 4th Year BSCS Student</span>
                    <p className="text-lg text-[#e4e4e4] font-semibold translate-x-5 text-wrap md:text-nowrap"><GlitchText texts={texts}/></p>
                </div>
            </div>


        </div>
    )
}