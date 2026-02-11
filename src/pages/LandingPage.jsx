
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

// views
import StartView from "../components/LandingPageViews/startView";
import WorksView from '../components/LandingPageViews/worksView';
import AboutView from '../components/LandingPageViews/aboutView';
import Footer from '../components/general/footer';

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
            {/* Start Section */}
            <div id="Start" className="relative w-full h-[calc(100vh)] overflow-hidden bg-dotted">
                <div className="w-full h-screen">
                <StartView />
                </div>
            </div>

            {/* Works + About Section */}
            <div className="relative w-full min-h-screen flex flex-col justify-center items-center 
                            bg-[linear-gradient(to_bottom,#cfd9da_0%,#6B9374_20%,#294035_50%,#03191F_100%)]">
                
                <div className="absolute -top-96 left-0 w-full h-96 bg-gradient-to-b from-transparent to-[#cfd9da]" />
                
                    {/* Works Section */}
                <div id="Works" className="relative w-full flex flex-col justify-center items-center">
                    
                    <WorksView />

                    {/* Background shapes (randomized placement) */}
                    <div className="absolute inset-0 pointer-events-none">
                        {/* Left side */}
                        <span className="absolute top-14 left-8 text-white text-7xl opacity-25 rotate-3">×</span>
                        <div className="absolute top-40 left-24 w-20 h-20 border-2 border-white opacity-20 rotate-12"></div>
                        <div className="absolute bottom-16 left-12 w-40 h-[3px] bg-white opacity-30 rotate-2"></div>
                        <span className="absolute bottom-40 left-32 text-white text-6xl opacity-25">=</span>

                        {/* Right side */}
                        <span className="absolute top-28 right-12 text-white text-9xl opacity-25 -rotate-6">×</span>
                        <div className="absolute top-56 right-24 w-28 h-28 border-2 border-white opacity-20 rotate-6"></div>
                        <div className="absolute bottom-28 right-16 w-32 h-[3px] bg-white opacity-30 -rotate-3"></div>
                        <span className="absolute bottom-20 right-36 text-white text-5xl opacity-25">–</span>
                    </div>
                </div>

                {/* About Section */}
                <div id="About" className="relative w-full min-h-screen flex flex-col justify-center items-center">
                    <AboutView />

                    {/* Background shapes (randomized placement) */}
                    <div className="absolute inset-0 pointer-events-none">
                        {/* Left side */}
                        <span className="absolute top-16 left-20 text-white text-8xl opacity-25">=</span>
                        <div className="absolute top-44 left-12 w-32 h-32 rounded-full border-2 border-white opacity-20"></div>
                        <span className="absolute bottom-20 left-10 text-white text-5xl opacity-25 -rotate-12">;</span>
                        <div className="absolute bottom-36 left-28 w-20 h-20 border-2 border-white opacity-20 rotate-12"></div>

                        {/* Right side */}
                        <span className="absolute top-24 right-16 text-white text-9xl opacity-25 rotate-6">✓</span>
                        <div className="absolute top-56 right-12 w-24 h-24 rounded-full border-2 border-white opacity-20"></div>
                        <span className="absolute bottom-32 right-20 text-white text-6xl opacity-25 rotate-3">|</span>
                        <div className="absolute bottom-16 right-28 w-28 h-28 rounded-full border-2 border-white opacity-20 -rotate-6"></div>
                    </div>
                </div>
                <Footer />
            </div>
                      
        </div>
    )
}

export default LandingPage
