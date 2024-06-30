
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const WorkCard = ({ title, description, image, link }) => {

return (
    <>
    <Link to={link} className="">
        <div className="relative flex flex-col h-[250px] w-[220px] bg-cover rounded-xl drop-shadow-xl" style={{backgroundImage: `url(${image})`}}>
            <div className="absolute -left-10 p-3 flex flex-col gap-2 top-5 drop-shadow-2xl">
                <div className="text-white text-3xl font-black">{title}</div>
                <div className="text-white text-xs">{description}</div>
            </div>
        </div>
    </Link>
    </>
)
}

export default WorkCard;