import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import LazyLoad from 'react-lazyload';

// eslint-disable-next-line react/prop-types
const WorkCard = ({ title, description, image, link, role, stack }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.5,
  });

  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg)"
  );

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y / height) - 0.5) * -20;
    const rotateY = ((x / width) - 0.5) * 20;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1)`
    );
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
    );
  };

  return (
    <div ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="transition-transform duration-200"
      >
        <Link to={link} className="relative block rounded-xl">
          <div
            className="relative min-w-[300px] h-[400px] rounded-xl overflow-visible 
                      bg-white/5 backdrop-blur-xl shadow-lg 
                      transition-transform duration-200 ease-out"
            style={{ transform }}
          >
            <LazyLoad offset={100} height={400} once>
              <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            </LazyLoad>
            <div className="absolute inset-0 bg-black/40 rounded-xl" />

            <div className="absolute top-2 left-2 flex flex-row flex-wrap gap-2">
              {/* eslint-disable-next-line react/prop-types */}
              {stack.map((e,index) => (
                 <div key={index} className="radius-50 bg-[#03191F]/80 text-white px-2 py-1 text-xs rounded-full shadow-lg whitespace-nowrap">
                  {e}
              </div>
              ))}
            </div>

            {/* Text overlay */}
            <div className="absolute -bottom-12 left-0 right-0 p-4">
              <div className="flex flex-col gap-1">
                <div className="text-white text-4xl font-black">{title}</div>
                <div className="text-gray-200 text-sm">{description}</div>
                {role && (
                  <div className="text-primary text-xs text-right italic invert">
                    {role}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default WorkCard;