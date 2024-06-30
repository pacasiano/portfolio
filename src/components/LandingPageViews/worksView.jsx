
import { useEffect, useState } from 'react'
import WorkCard from '../general/WorkCard'

export default function WorksView() {

    const [projects, setProject] = useState([
        {
            title: "AC7",
            description: "E-commerce website for a beauty brand",
            image: "https://lh3.googleusercontent.com/a/ACg8ocIdcepCHmp0PwowN470-Slk5ozppbu6w1CqwHKw6z57JLAfnLOO=s96-c",
            link: "https://www.google.com",
            x_location: 200,
            y_location: 200,
        },
        {
            title: "Workwize",
            description: "A platform for Task Management",
            image: "https://lh3.googleusercontent.com/a/ACg8ocIdcepCHmp0PwowN470-Slk5ozppbu6w1CqwHKw6z57JLAfnLOO=s96-c",
            link: "/works/2",
            x_location: 600,
            y_location: 300,
        },
        {
            title: "UPASS",
            description: "Parking Management System for Ateneo de Davao University",
            image: "https://lh3.googleusercontent.com/a/ACg8ocIdcepCHmp0PwowN470-Slk5ozppbu6w1CqwHKw6z57JLAfnLOO=s96-c",
            link: "/works/3",
            x_location: 1000,
            y_location: 150,
        },
    ])

    return (
        <div className="h-screen w-full flex flex-row justify-center items-center gap-20 relative overflow-hidden">

            <div className="absolute flex flex-col justify-center items-center top-0 left-1/3">
                <div className="bg-[#54438b] h-screen w-1"></div>
            </div>

            <span className="absolute text-[60vh] rotate-6 font-bold text-[#1d1731]/40 -z-0 overflow-hidden text-nowrap">Works</span>

            
            {projects.map((project, index) => (
                <div key={index} className={`absolute z-20 hover:scale-105 `} style={{left: `${project.x_location}px`, top: `${project.y_location}px`}}>
                <WorkCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                />
                </div>
            ))}

        </div>
    )
}