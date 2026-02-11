import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const hash = useLocation().hash.slice(1);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      style={{ top: visible ? "0" : "-110px" }}
      className="fixed w-screen transition-all ease-in-out overflow-x-visible duration-300 pt-10 flex
                 sm:flex-row flex-col sm:justify-between justify-start sm:items-center items-start z-50"
    >
      {/* Background shadow */}
      <div className="absolute shadow-black shadow-2xl -inset-x-32 w-[150vw] h-full sm:-translate-y-[98px] -translate-y-[153px]" />

      {/* Left Nav Links */}
      <div className="text-2xl font-bold flex flex-row gap-1 items-center sm:pl-10 pl-5">
        {/* <p className="text-accent text-md">{"<"}</p>
        <div className="text-xl md:text-3xl pl-2 text-primary">pacasiano</div>
        <p className="text-accent text-md">{"/>"}</p> */}
          <div className="flex gap-4 text-gray-900 text-2xl  sm:items-start">
            <a href="https://linkedin.com/in/pacasiano" target="_blank" rel="noopener noreferrer" className="hover:text-[#7964be] transition transform hover:scale-125">
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
            <a href="https://github.com/pacasiano" target="_blank" rel="noopener noreferrer" className="hover:text-[#7964be] transition transform hover:scale-125">
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
            <a href="https://facebook.com/pacasiano" target="_blank" rel="noopener noreferrer" className="hover:text-[#7964be] transition transform hover:scale-125">
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </a>
          </div>
      </div>

      {/* Right Nav Links */}
      <div className="text-xl font-bold flex flex-row justify-center items-center gap-4 pr-10 sm:pl-0 pl-5 sm:mt-0 mt-2">
        <Link
          to="#Start"
          className={`flex items-center text-md sm:text-2xl transition ${
            hash === "Start" ? "text-accent" : "text-primary"
          } hover:text-highlight`}
        >
          Start<p className="text-slash">{"/>"}</p>
        </Link>
        <Link
          to="#Works"
          className={`flex items-center text-md sm:text-2xl transition ${
            hash === "Works" ? "text-accent" : "text-primary"
          } hover:text-highlight`}
        >
          Works<p className="text-slash">{"/>"}</p>
        </Link>
        <Link
          to="#About"
          className={`flex items-center text-md sm:text-2xl transition ${
            hash === "About" ? "text-accent" : "text-primary"
          } hover:text-highlight`}
        >
          About<p className="text-slash">{"/>"}</p>
        </Link>
      </div>
    </div>
  );
}