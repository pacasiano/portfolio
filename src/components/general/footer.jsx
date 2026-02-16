import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Footer() {

  // get current width of the screen
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width < 768;
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>

    {isMobile ? (<footer className="relative h-[500px] py-12 px-6 bg-[#1b1b1b]"
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='relative h-[calc(100vh+400px)] -top-[100vh]'>
        <div className={` h-[400px] sticky top-[calc(100vh-450px)] flex flex-col justify-between items-center gap-8 text-white`}>
          <FooterData />
        </div>
      </div>
    </footer>

    ) : (

    <footer className="relative px-20 h-[200px] py-12 bg-[#1b1b1b]"
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='relative h-[calc(100vh+150px)] -top-[100vh]'>
        <div className={` h-[200px] sticky top-[calc(100vh-200px)] flex flex-row justify-between items-center gap-8 text-white`}>
          <FooterData />
        </div>
      </div>
    </footer>
    )}

    </>
  );
}

const FooterData = () => {
  return (
    <>
      <section className="flex flex-col items-center sm:items-start gap-2">
        <div className="flex flex-col lg:flex-row items-center sm:items-start">
          <h2 className="text-3xl font-bold text-accent lg:mr-4">Peter Andre</h2>
          <h2 className="text-3xl font-bold text-accent">Casiano</h2>
        </div>
        <p className="text-gray-300 text-sm md:text-base">Davao City, Philippines</p>
      </section>

      {/* Contact */}
      <section className="flex flex-col items-center sm:items-start gap-4">
        <h3 className="font-semibold text-lg">Contact Me</h3>
        <div className="flex flex-col gap-2 text-gray-300">
          <a href="mailto:pacasiano@icloud.com" className="flex items-center gap-2 hover:text-[#7964be] transition">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
          <a href="tel:+639171234567" className="flex items-center gap-2 hover:text-[#7964be] transition">
            <FontAwesomeIcon icon={faPhone} /> Phone
          </a>
        </div>
      </section>

      {/* Socials */}
      <section className="flex flex-col items-center md:items-start gap-4">
        <h3 className="font-semibold text-lg">Follow Me</h3>
        <div className="flex gap-4 text-gray-300 text-2xl">
          <a href="https://linkedin.com/in/pacasiano" target="_blank" rel="noopener noreferrer" className="hover:text-[#7964be] transition transform hover:scale-125">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/pacasiano" target="_blank" rel="noopener noreferrer" className="hover:text-[#7964be] transition transform hover:scale-125">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://facebook.com/pacasiano" target="_blank" rel="noopener noreferrer" className="hover:text-[#7964be] transition transform hover:scale-125">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </section>
    </>
  )
}