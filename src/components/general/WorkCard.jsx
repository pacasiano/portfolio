
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const WorkCard = ({ title, description, image, link }) => {

return (
<>
    <Link to={link} className="block relative w-full max-w-xs rounded-xl shadow-lg">
    <div className="relative w-full h-auto rounded-xl overflow-hidden">
            <img src={image} alt={title} className="w-full h-auto object-cover rounded-xl" />
            <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
        </div>
        <div className="absolute inset-0 -left-20 flex flex-col justify-end p-4">
            <div className="text-white flex flex-col gap-2 justify-start items-start drop-shadow-2xl">
                <div className="text-3xl font-black">{title}</div>
                <div className="text-xs">{description}</div>
            </div>
        </div>
    </Link>
</>

)
}

export default WorkCard;