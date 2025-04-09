import icon from "../../../public/icon.png";
import Status from "../status/status";

export default function CardList({ name, description, typeList, customStyles }) {
    return (
        <div className={`w-[85%] h-[10em] flex flex-row justify-between text-start items-center bg-white rounded-[15px] text-black ${customStyles}`}>
            <div className="w-[100px] h-[100px] bg-white rounded-[15px] mr-[5%] items-center" >
                <img
                    src={icon}
                />
            </div>
            <div className="flex flex-col gap-4 w-[60%]" >
                <h1 className="font-semibold text-[28px]" >{name}</h1>
                <p className="font-light text-[#9A9292] text-[16px]" >{description}</p>
                <p className="font-light text-[#9A9292] text-[16px]" >{typeList}</p>
            </div>
            <div className="flex bg-white h-[100%] w-[20%] justify-end items-end p-[10px] rounded-[15px]" >
                <Status
                status={"mano"}
                />
            </div>
        </div>
    )
}