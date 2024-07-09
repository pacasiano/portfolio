// import { useState, useEffect } from 'react';

// // eslint-disable-next-line react/prop-types
// const GlitchText = ({ text }) => {
//     const [displayText, setDisplayText] = useState(text);
//     const [isGlitching, setIsGlitching] = useState(false);

//     useEffect(() => {
//         const glitchInterval = 5000; // Interval between glitches
//         const glitchDuration = 1200; // Duration of each glitch effect

//         const interval = setInterval(() => {
//         setIsGlitching(true);
//         let glitchTimeouts = [];

//         for (let i = 0; i < 15; i++) {
//             glitchTimeouts.push(
//             setTimeout(() => {
//                 setDisplayText(getGlitchedText(text));
//             }, i * (glitchDuration / 15))
//             );
//         }

//         glitchTimeouts.push(
//             setTimeout(() => {
//             setDisplayText(text);
//             setIsGlitching(false);
//             }, glitchDuration)
//         );

//         return () => {
//             glitchTimeouts.forEach(timeout => clearTimeout(timeout));
//         };
//         }, glitchInterval);

//         return () => clearInterval(interval);
//     }, [text]);

//     const getGlitchedText = (originalText) => {
//         const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=+[]{}|;:<>?/~`"\'\\¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶¹º»¼½¾¿';
//         const length = Math.floor(Math.random() * (originalText.length)) + 3; // Random length between 3 and original text lenght
//         let glitchedText = '';
    
//         for (let i = 0; i < length; i++) {
//         if (Math.random() < 0.5 && i < originalText.length) {
//             glitchedText += originalText[i];
//         } else {
//             glitchedText += chars[Math.floor(Math.random() * chars.length)];
//         }
//         }
    
//         return glitchedText;
//     };

//     return (
//         <span className={`glitch-text ${isGlitching ? 'glitching' : ''}`} data-text={text}>
//         {displayText}
//         </span>
//     );
// };

// export default GlitchText;

import { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const GlitchText = ({ texts }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState(texts[0]);
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const glitchInterval = 5000; // Interval between glitches
        const glitchDuration = 2000; // Duration of each glitch effect

        const interval = setInterval(() => {
            setIsGlitching(true);
            let glitchTimeouts = [];

            for (let i = 0; i < 15; i++) {
                glitchTimeouts.push(
                    setTimeout(() => {
                        setDisplayText(getGlitchedText(texts[currentTextIndex]));
                    }, i * (glitchDuration / 15))
                );
            }

            glitchTimeouts.push(
                setTimeout(() => {
                    // eslint-disable-next-line react/prop-types
                    const nextIndex = (currentTextIndex + 1) % texts.length;
                    setCurrentTextIndex(nextIndex);
                    setDisplayText(texts[nextIndex]);
                    setIsGlitching(false);
                }, glitchDuration)
            );

            return () => {
                glitchTimeouts.forEach(timeout => clearTimeout(timeout));
            };
        }, glitchInterval);

        return () => clearInterval(interval);
    }, [currentTextIndex, texts]);

    const getGlitchedText = (originalText) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=+[]{}|;:<>?/~`"\'\\¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶¹º»¼½¾¿';
        const length = Math.floor(Math.random() * (originalText.length)) + 3; // Random length between 3 and original text length
        let glitchedText = '';
    
        for (let i = 0; i < length; i++) {
            if (Math.random() < 0.5 && i < originalText.length) {
                glitchedText += originalText[i];
            } else {
                glitchedText += chars[Math.floor(Math.random() * chars.length)];
            }
        }
    
        return glitchedText;
    };

    return (
        <span className={`glitch-text transition-all ${isGlitching ? 'glitching' : ''}`} data-text={texts[currentTextIndex]}>
            {displayText}
        </span>
    );
};

export default GlitchText;

