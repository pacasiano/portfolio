import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import WorkCard from "../general/WorkCard";
import { motion, useTransform, useScroll } from "framer-motion";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

function WorksView({scrollYProgress}) {

    const [projects, setProjects] = useState([]);

    const get_projects = gql`
        query GetProjects {
            projects{
                nodes{
                title
                featuredImage{
                    node{
                    sourceUrl
                    altText
                    }
                }
                fields{
                    description
                    link
                    role
                    stack
                }
                }
            }
        }`;

    const { loading, error, data } = useQuery(get_projects);

    useEffect(() => {
        if (data) {
            const fetchedProjects = data.projects.nodes.map((project) => ({
                title: project.title,
                description: project.fields.description,
                image: project.featuredImage.node.sourceUrl,
                link: project.fields.link,
                role: project.fields.role,
                stack: project.fields.stack.split(",").map((tech) => tech.trim()),
            }));
            setProjects(fetchedProjects);
        }
    }, [data]);

    const [isLgUp, setIsLgUp] = useState(true);

    useEffect(() => {
        const checkScreen = () => setIsLgUp(window.innerWidth >= 1024);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

    const container = useRef();

    return (
        <motion.div ref={container} className="relative w-screen min-h-screen py-36 flex justify-center items-center overflow-hidden mt-52 bg-[#1C1C1C] border-[#444] border-2 rounded-lg"
            style={{scale: isLgUp ? scale : 1,  rotate: isLgUp ? rotate : 0}}>
            <WorksText container={container} />

            {/* horizontal scroll wrapper */}
            {error ? <p className="flex justify-center items-center text-center text-white">Error loading projects.</p> :
            <div className="relative sm:p-10 p-0">
                <div
                    className="relative grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 items-center gap-20 no-scrollbar z-10 "
                >
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`w-[300px] md:w-[400px] lg:w-[450px] 
                            ${index % 3 === 1 ? "2xl:mt-36 mt-0" : "2xl:-mt-36 mt-0"}
                        `}
                            
                        >
                            <div className="transition-transform duration-200">
                                <WorkCard
                                    loading={loading}
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    link={project.link}
                                    role={project.role}
                                    stack={project.stack}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            }
        </motion.div>
    );
}

const WorksText = ({container}) => {

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    const sm = useTransform(scrollYProgress, [0, 1], [0, 1000]);

    return (
        <motion.span style={{ y:sm }} className="absolute text-[60vh] -top-[200px] rotate-6 font-bold text-[#252525] font-sans -z-0 text-nowrap">
            Works
        </motion.span>
    )
}

WorksText.propTypes = {
    container: PropTypes.object.isRequired,
}

WorksView.propTypes = {
    scrollYProgress: PropTypes.object.isRequired,
};

export default WorksView;