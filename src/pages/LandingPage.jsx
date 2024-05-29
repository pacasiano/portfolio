
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

// backgrounds
import Background from "../assets/bg.webp";

// views
import StartView from "../components/LandingPageViews/startView";
import WorksView from '../components/LandingPageViews/worksView';
import AboutView from '../components/LandingPageViews/aboutView';

function LandingPage() {

    const location = useLocation();
    const lastHash = useRef('');

    useEffect(() => {
        if (location.hash) {
        lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
        }

        if (lastHash.current && document.getElementById(lastHash.current)) {
        setTimeout(() => {
            document
            .getElementById(lastHash.current)
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            lastHash.current = '';
        }, 100);
        }
    }, [location]);

    return (
        <>
        <div id="Start" className="w-full h-screen bg-cover bg-center" style={{backgroundImage: `url(${Background})`}}>
            <StartView />
        </div>

        <div id="Works" className="w-full h-screen flex flex-col justify-center items-center bg-[#181329]">
            <WorksView />
        </div>

        <div id="About" className="w-full h-screen flex flex-col justify-center items-center">
            <AboutView />
        </div>
        </>
    )
}

export default LandingPage
