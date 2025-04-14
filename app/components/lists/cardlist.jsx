import icon from "../../../public/icon.png";
import Status from "../status/status";
import Button from "../forms/button";
import { useNavigate } from "react-router";

export default function CardList({ name, description, typeList, customStyles, status }) {
    
    // const navigate = useNavigate();
    
    // const handleClick = () => {
    //     navigate("/editlist");
    // }

    return (
        <div className={`w-[85%] min-h-[10em] flex flex-row justify-between text-start items-center bg-white rounded-[15px] text-black shadow-[0px_20px_56px_-4px_rgba(0,_0,_0,_0.3)] mb-7 ${customStyles}`}>
            <div className="w-[15%] h-[100%] flex bg-white rounded-[15px] mr-[5%] justify-center items-center shadow-[50px_-2px_50px_-4px_rgba(0,_0,_0,_0.2)]" >
                <div className="w-[100px] h-[100px]" >
                    <img
                        src={icon}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-4 w-[60%]" >
                <h1 className="font-bold text-[28px]" >{name}</h1>
                <p className="font-light text-[#9A9292] text-[16px]" >{description}</p>
                <p className="font-light text-[#9A9292] text-[16px]" >{typeList}</p>
            </div>
            <div className="flex bg-white h-[100%] w-[20%] justify-end items-end p-[10px] rounded-[15px]" >
                {/* <Status
                    status={status}
                /> */}
            </div>
        </div>
    )
}