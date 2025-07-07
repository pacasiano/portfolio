
import { useState } from 'react'
import WorkCard from '../general/WorkCard'
import unipass from '../../assets/unipass.png'
import workwize from '../../assets/workwize.png'
import ac7 from '../../assets/ac7.png'
import esp32 from '../../assets/esp32.png'
import dragonKnight from '../../assets/dragonknight.png'
import unicamp from '../../assets/unicamp.png'


export default function WorksView() {

    const [projects] = useState([
        {
            title: "Workwize",
            description: "A platform for Task Management",
            image: workwize,
            link: "https://github.com/pacasiano/FullStack"
        },
        {
            title: "AC7",
            description: "E-commerce website for a beauty brand",
            image: ac7,
            link: "https://github.com/pacasiano/AC7"
        },
        {
            title: "UniPASS",
            description: "A Parking Management System for Ateneo de Davao University",
            image: unipass,
            link: "https://unipass.arisenlab.org/login"
        },
        {
            title: "SensorStack",
            description: "ESP32 Environmental Monitoring System with Blynk",
            image: esp32,
            link: "https://github.com/pacasiano/SensorStack"
        },
        {
            title: "DragonKnight",
            description: "A simple 2D game made for fun using Godot and C0 assets",
            image: dragonKnight,
            link: "https://github.com/pacasiano/DragonKnight"   
        },
        {
            title: "Unicamp",
            description: "Web-based admin application designed to help administrators efficiently manage campus facilities.",
            image: unicamp,
            link: "https://github.com/pacasiano/uni_camp"
        }
    ])

    return (
        <div>
            {/* <div className="absolute flex flex-col justify-center items-center top-0 -translate-x-[150px]">
                <div className="bg-[#54438b] h-[100vh] w-1"></div>
            </div> */}
            <div className="h-full py-20 px-10 w-screen flex flex-row justify-center items-center gap-20 relative overflow-hidden">

                <span className="absolute text-[60vh] rotate-6 font-bold text-[#1d1731]/40 -z-0 text-nowrap">Works</span>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-20 gap-14 sm:p-10 p-0 place-items-center">
                {projects.map((project, index) => (
                    <div
                    key={index}
                    className="relative h-64 w-fit content-center overflow-visible"
                    >
                    <div
                        className={`transition-transform w-fit duration-200 hover:scale-105`}
                        style={{ width: '100%' }}
                    >
                        <WorkCard
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                        />
                    </div>
                    </div>
                ))}
                </div>
                


            </div>
        </div>
    )
}