
import { useEffect, useState, useContext } from 'react';
import { HoverContext } from "../../context/HoverContext"


const CustomCursor = () => {
    const [position, setPosition] = useState({ x: -10, y: -10 });
    const [clicked, setClicked] = useState(false);
    const { isHovered } = useContext(HoverContext);

    useEffect(() => {
    const moveCursor = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
        setClicked(true);
    };

    const handleMouseUp = () => {
        setClicked(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
        window.removeEventListener('mousemove', moveCursor);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
    };

    }, []);

    return (
        <>
            <div className={`custom-cursor ${isHovered ? 'w-[40px] h-[40px]' : 'w-[20px] h-[20px]'} `} style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
            {!clicked && <div className="custom-cursor-inner" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>}
        </>
    );
};

export default CustomCursor;
