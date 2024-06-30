import GlitchText from "../general/glitch"
import { useState } from 'react'

export default function StartView() {

    const [texts, setTexts] = useState([
        "A Front-End Developer",
        "A Computer Science Student",
        "An Atenean"
    ])

    return (
        <div className="relative w-full h-full flex flex-col justify-center items-center">
            
            <div className="absolute flex flex-col justify-center items-center translate-y-[400px] left-1/3 -translate-x-2.5">
                <div className="relative flex items-center justify-center border-[#54438b] border-4 rounded-full w-6 h-6"></div>
                <div className="bg-[#54438b] h-[1000px] w-1"></div>
            </div>

            <div className="absolute left-1/3 translate-x-10 flex flex-col items-start justify-center font-semibold gap-2 -translate-y-10 drop-shadow-lg">
                <div className="text-4xl flex flex-row gap-6 justify-center items-center">
                    <span className="text-2xl">Hi, I&apos;m </span>
                    <span className="text-[#f7f7f7] font-semibold flex flex-row justify-center items-center">
                        <span className='text-[#7964be] text-2xl'>{"<"}</span>
                            Peter
                        <span className='text-[#7964be] text-2xl'>{"/>"}</span>
                    </span>
                </div>
                <div className="w-[200px]">
                    <p className="text-2xl text-[#f7f7f7] font-semibold translate-x-4 text-nowrap"><GlitchText texts={texts}/></p>
                </div>
            </div>

        </div>
    )
}