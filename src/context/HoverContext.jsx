import { createContext, useState } from 'react';

export const HoverContext = createContext();

// eslint-disable-next-line react/prop-types
export const HoverProvider = ({ children }) => {
    
    const [isHovered, setIsHovered] = useState(false);

    return (
        <HoverContext.Provider value={{ isHovered, setIsHovered }}>
        {children}
        </HoverContext.Provider>
    );
};
