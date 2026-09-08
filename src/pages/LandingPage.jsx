import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useScroll } from 'framer-motion';

import StartView from '../components/LandingPageViews/startView';
import WorksView from '../components/LandingPageViews/worksView';
import CaseStudyView from '../components/LandingPageViews/caseStudyView';
import ExperienceView from '../components/LandingPageViews/experienceView';
import AboutView from '../components/LandingPageViews/aboutView';
import ContactView from '../components/LandingPageViews/contactView';
import CapabilitiesView from '../components/LandingPageViews/capabilitiesView';

function LandingPage() {
  const location = useLocation();

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    if (!location.hash) return;

    const el = document.getElementById(location.hash.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="relative min-h-screen max-w-screen">
      <div ref={container}>
        <div id="start" />
        <StartView scrollYProgress={scrollYProgress} />

        <div id="works">
          <WorksView scrollYProgress={scrollYProgress} />
        </div>
      </div>

      <div id="case-study">
        <CaseStudyView scrollYProgress={scrollYProgress} />
      </div>

      <div id="experience">
        <ExperienceView scrollYProgress={scrollYProgress} />
      </div>

      <div id="capabilities">
        <CapabilitiesView scrollYProgress={scrollYProgress} />
      </div>

      <div id="about">
        <AboutView scrollYProgress={scrollYProgress} />
      </div>

      <div id="message">
        <ContactView scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

export default LandingPage;
