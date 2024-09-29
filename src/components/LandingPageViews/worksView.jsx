
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import WorkCard from '../general/WorkCard'
import unipass from '../../assets/unipass.png'
import workwize from '../../assets/workwize.png'
import ac7 from '../../assets/ac7.png'

export default function WorksView() {

    // isMobile?
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    const [projects, setProject] = useState([
        {
            title: "Workwize",
            description: "A platform for Task Management",
            image: workwize,
            link: "https://github.com/pacasiano/FullStack",
            x_location: 7,
            y_location: 130,
        },
        {
            title: "AC7",
            description: "E-commerce website for a beauty brand",
            image: ac7,
            link: "https://github.com/pacasiano/AC7",
            x_location: 10,
            y_location: -100,
        },
        {
            title: "UniPASS",
            description: "A Parking Management System for Ateneo de Davao University",
            image: unipass,
            link: "https://unipass.arisenlab.org/login",
            x_location: -4,
            y_location: -150,
        },
    ])

    return (
        <>
            <div className="absolute flex flex-col justify-center items-center top-0 -translate-x-[150px]">
                <div className="bg-[#54438b] h-[100vh] w-1"></div>
            </div>
            <div className="h-full py-20 px-10 w-full flex flex-row justify-center items-center gap-20 relative overflow-hidden">

                <span className="absolute text-[60vh] rotate-6 font-bold text-[#1d1731]/40 -z-0 overflow-hidden text-nowrap">Works</span>

                {!isMobile ? (
                <div className='flex flex-row flex-wrap gap-28 justify-center items-center w-screen'>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative z-20 hover:scale-105 transition-all duration-200"
                        
                    >
                        <WorkCard
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            link={project.link}
                        />
                    </div>
                ))}
                </div>
                ) : (
                <div className='flex flex-col gap-20 pl-12'>
                {projects.map((project, index) => (
                    <div key={index}
                        className="relative z-20 w-56 hover:scale-105 transition-all duration-200">
                        <WorkCard
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            link={project.link}
                        />
                    </div>
                ))}
                </div>
                )}


            </div>
        </>
    )
}