import { createContext, useState } from 'react';

const HoverContext = createContext();

// eslint-disable-next-line react/prop-types
const HoverProvider = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <HoverContext.Provider value={{ isHovered, setIsHovered }}>
            {children}
        </HoverContext.Provider>
    );
};

export { HoverContext, HoverProvider };

