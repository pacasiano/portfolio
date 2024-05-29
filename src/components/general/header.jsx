
import { useLocation } from 'react-router-dom'
import Button from "./button"

export default function Header() {

    const hash = useLocation().hash.slice(1)

    return (
        <div className="fixed top-0 w-screen pt-4 px-6 flex flex-row justify-between items-center ">   

            <div className='text-2xl font-bold text-white flex flex-row gap-1 items-center'>
                <p className='text-[#7964be] text-md'>{"<"}</p><div className='text-3xl'>Cephas</div>
            </div>

            <div className='text-md font-bold flex flex-row justify-center items-center gap-2'>
                <Button to="#Start" className={`flex items-center ${hash === "Start" ? "text-white" : "text-neutral-400"} `}>Start<p className='text-[#7964be]'>{"/>"}</p></Button>
                <Button to="#Works" className={`flex items-center ${hash === "Works" ? "text-white" : "text-neutral-400"} `}>Works<p className='text-[#7964be]'>{"/>"}</p></Button>
                <Button to="#About" className={`flex items-center ${hash === "About" ? "text-white" : "text-neutral-400"} `}>About<p className='text-[#7964be]'>{"/>"}</p></Button>
            </div>

        </div>
    )
}