import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
const WorkCard = ({ title, description, image, link }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
        once: false,
        amount: 0.5,
     }); // Animates only the first time it's in view

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}} // Only animate if in view
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <Link to={link} className="relative w-full max-w-lg block pl-20 rounded-xl shadow-lg">
                <div className="absolute bottom-0 left-0 flex flex-col justify-end p-4 z-10">
                    <div className="text-white flex flex-col gap-2 justify-start items-start drop-shadow-2xl">
                        <div className="text-3xl font-black">{title}</div>
                        <div className="text-xs">{description}</div>
                    </div>
                </div>
                <div className="relative min-w-full rounded-xl overflow-hidden">
                    <img src={image} alt={title} className="min-w-full min-h-full object-cover rounded-xl resize-none" />
                    <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
                </div>
            </Link>
        </motion.div>
    );
};

export default WorkCard;