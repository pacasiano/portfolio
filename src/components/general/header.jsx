
import { Link, useLocation } from 'react-router-dom'
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
        <div style={{ top: visible ? '0' : '-100px' }} className="fixed w-screen transition-all ease-in-out duration-300 pt-4 flex
            sm:flex-row flex-col sm:justify-between justify-start sm:items-center items-start z-50 ">   
            <div className='absolute shadow-black shadow-2xl w-full h-full sm:-translate-y-[60px] -translate-y-[120px] ' />

            <div className='text-2xl font-bold text-white flex flex-row gap-1 items-center pl-5'>
                <p className='text-[#7964be] text-md'>{"<"}</p><div className='text-xl md:text-3xl pl-2'>pacasiano</div>
            </div>

            <div className='text-md font-bold flex flex-row justify-center items-center gap-2 pr-5 sm:pl-0 pl-5 sm:mt-0 mt-2'>
                <Link to="#Start" className={`flex items-center text-sm md:text-base ${hash === "Start" ? "text-white" : "text-neutral-400"} `}>Start<p className='text-[#7964be]'>{"/>"}</p></Link>
                <Link to="#Works" className={`flex items-center text-sm md:text-base ${hash === "Works" ? "text-white" : "text-neutral-400"} `}>Works<p className='text-[#7964be]'>{"/>"}</p></Link>
                <Link to="#About" className={`flex items-center text-sm md:text-base ${hash === "About" ? "text-white" : "text-neutral-400"} `}>About<p className='text-[#7964be]'>{"/>"}</p></Link>
            </div>

        </div>
    )
}