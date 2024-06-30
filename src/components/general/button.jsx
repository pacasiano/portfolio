import { HoverContext } from "../../context/HoverContext";
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Button = ({ to, className, children }) => {
    const { setIsHovered } = useContext(HoverContext);

    return (
        <div className="">
            <Link
            to={to}
            className={className}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}>
            {children}
            </Link>
        </div>
    );
};

export default Button;
