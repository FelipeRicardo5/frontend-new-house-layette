import { Link } from "react-router";
import Home from "../../../public/home.png";
import Plus from "../../../public/plus.png";

export default function Navbar({ name, description }) {
    return (
        <div className="flex justify-between p-5 w-full" >
            <div className="flex flex-col text-start" >
                <h1 className="font-semibold text-[46px] mb-0" >{name}</h1>
                <p className="font-light text-[16px]" >{description}</p>
            </div>
            <div className="flex p-5 items-center gap-3" >
                <Link to={`/`}>
                    <img src={Home} 
                    width={"50px"}
                    alt="back to home"/> 
                </Link>
                <Link to={`/createlist`}>
                    <img src={Plus} 
                    width={"45px"}
                    alt="create a new list"/>
                </Link>
            </div>
        </div>
    )
}