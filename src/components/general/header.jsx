
import { useLocation } from 'react-router-dom'
import Button from "./button"
import GlitchText from './glitch'
import { useState, useEffect } from 'react'

export default function Header() {

    const hash = useLocation().hash.slice(1)

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    return (
        <div style={{ top: visible ? '0' : '-100px' }} className="fixed transition-all ease-in-out duration-300 w-screen pt-4 flex flex-row justify-between items-center z-50 ">   
            <div className='absolute shadow-black shadow-2xl w-full h-full -translate-y-[60px]' />

            <div className='text-2xl font-bold text-white flex flex-row gap-1 items-center pl-5'>
                <p className='text-[#7964be] text-md'>{"<"}</p><div className='text-3xl'><GlitchText text="Cephas" /></div>
            </div>

            <div className='text-md font-bold flex flex-row justify-center items-center gap-2 pr-5'>
                <Button to="#Start" className={`flex items-center ${hash === "Start" ? "text-white" : "text-neutral-400"} `}>Start<p className='text-[#7964be]'>{"/>"}</p></Button>
                <Button to="#Works" className={`flex items-center ${hash === "Works" ? "text-white" : "text-neutral-400"} `}>Works<p className='text-[#7964be]'>{"/>"}</p></Button>
                <Button to="#About" className={`flex items-center ${hash === "About" ? "text-white" : "text-neutral-400"} `}>About<p className='text-[#7964be]'>{"/>"}</p></Button>
            </div>

        </div>
    )
}