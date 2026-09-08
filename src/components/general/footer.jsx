import { useState, useEffect } from 'react';

export default function Footer() {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width < 768;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <footer
          className="relative h-[500px] bg-[#0B0C10] px-6 py-12"
          style={{
            clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
          }}
        >
          <div className="relative -top-[100vh] h-[calc(100vh+400px)]">
            <div className="sticky top-[calc(100vh-450px)] flex h-[400px] flex-col items-center justify-between gap-8 text-white">
              <FooterData />
            </div>
          </div>
        </footer>
      ) : (
        <footer
          className="relative h-[200px] bg-[#0B0C10] px-20 py-12"
          style={{
            clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
          }}
        >
          <div className="relative -top-[100vh] h-[calc(100vh+150px)]">
            <div className="sticky top-[calc(100vh-200px)] flex h-[200px] flex-row items-center justify-between gap-8 text-white">
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
      <section className="flex flex-col items-center gap-2 sm:items-start">
        <div className="flex flex-col items-center sm:items-start lg:flex-row">
          <h2 className="text-3xl font-bold text-[#B4B5BE] lg:mr-4">Peter Andre</h2>

          <h2 className="text-3xl font-bold text-[#B4B5BE]">Casiano</h2>
        </div>

        <p className="text-sm text-[#7f8982] md:text-base">Davao City, Philippines</p>
      </section>

      {/* Contact */}
      <section className="flex flex-col items-center gap-4 sm:items-start">
        <h3 className="text-lg font-semibold text-[#B4B5BE]">Contact Me</h3>

        <div className="flex flex-col gap-2 text-[#7f8982]">
          <a
            href="mailto:pacasiano@icloud.com"
            className="flex items-center gap-2 transition hover:text-[#9B9DFF]"
          >
            <i className="fa-solid fa-envelope" />
            <span>Email</span>
          </a>

          <a
            href="tel:+63967200981"
            className="flex items-center gap-2 transition hover:text-[#9B9DFF]"
          >
            <i className="fa-solid fa-phone" />
            <span>Phone</span>
          </a>
        </div>
      </section>

      {/* Socials */}
      <section className="flex flex-col items-center gap-4 md:items-start">
        <h3 className="text-lg font-semibold text-[#B4B5BE]">Follow Me</h3>

        <div className="flex gap-4 text-2xl text-[#626473]">
          <a
            href="https://linkedin.com/in/pacasiano"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transform transition hover:scale-125 hover:text-[#9B9DFF]"
          >
            <i className="fa-brands fa-linkedin-in" />
          </a>

          <a
            href="https://github.com/pacasiano"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transform transition hover:scale-125 hover:text-[#9B9DFF]"
          >
            <i className="fa-brands fa-github" />
          </a>

          <a
            href="https://facebook.com/pacasiano"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transform transition hover:scale-125 hover:text-[#9B9DFF]"
          >
            <i className="fa-brands fa-facebook-f" />
          </a>
        </div>
      </section>
    </>
  );
};
