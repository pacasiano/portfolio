import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="w-full text-white py-12 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-8">
      {/* Logo / Name */}
      <div className="flex flex-col items-center md:items-start gap-2">
        <h2 className="text-3xl font-bold text-accent">Peter Andre Casiano</h2>
        <p className="text-gray-300 text-sm md:text-base">Davao City, Philippines</p>
      </div>

      {/* Contact */}
      <div className="flex flex-col items-center md:items-start gap-4">
        <h3 className="font-semibold text-lg">Contact Me</h3>
        <div className="flex flex-col gap-2 text-gray-300">
          <a href="mailto:pacasiano@icloud.com" className="flex items-center gap-2 hover:text-[#7964be] transition">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
          <a href="tel:+639171234567" className="flex items-center gap-2 hover:text-[#7964be] transition">
            <FontAwesomeIcon icon={faPhone} /> Phone
          </a>
        </div>
      </div>

      {/* Socials */}
      <div className="flex flex-col items-center md:items-start gap-4">
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
      </div>
    </footer>
  );
}