
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

// backgrounds
import Background from "../assets/bgfinal.jpg";

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
        <div>
            <div id="Start" className="w-full h-screen bg-cover bg-center mix-blend-normal overflow-hidden" style={{backgroundImage: `url(${Background})`}}>
                <div className='w-full h-screen bg-black/60'>
                    <StartView />
                </div>
            </div>

            <div id="Works" className="w-full min-h-screen flex flex-col justify-center items-center bg-[#100c20]">
                <WorksView />
            </div>

            <div id="About" className="w-full min-h-screen flex flex-col justify-center items-center">
                <AboutView />
            </div>
        </div>
    )
}

export default LandingPage
