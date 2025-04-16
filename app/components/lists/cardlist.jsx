import icon from "../../../public/icon.png";
import Status from "../status/status";
import Button from "../forms/button";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

export default function CardList({ name, description, typeList, customStyles, status, id }) {

    // const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate("/editlist");
    // }

    const [data, setData] = useState([]);
    const [list, setList] = useState({});

    useEffect(() => { // executa quando o componente é montado
        fetch("https://backend-new-house-layette.onrender.com/api/list")
            .then((res) => res.json())
            .then((resData) => setData(resData))
            .catch((err) => console.error("Erro ao buscar dados:", err));
    }, []);


    return (
        <div className={`w-[85%] min-h-[10em] flex flex-row justify-between text-start items-center bg-white rounded-[15px] text-black shadow-[0px_20px_56px_-4px_rgba(0,_0,_0,_0.3)] mb-7 ${customStyles}`}>
            <div className="w-[15%] h-[100%] flex bg-white rounded-[15px] mr-[5%] justify-center items-center shadow-[50px_-2px_50px_-4px_rgba(0,_0,_0,_0.2)]" >
                <div className="flex w-[100px] min-h-[10em] justify-center items-center" >
                    <img
                        src={icon}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-1 w-[60%]" >
                <h1 className="font-bold text-[28px]" >{name}</h1>
                <p className="font-light text-[#9A9292] text-[16px] text-wrap" >{description}</p>
                <p className="font-light text-[#9A9292] text-[16px]" >{typeList}</p>
            </div>
            <div className="flex flex-col gap-2 bg-white h-[100%] w-[20%] justify-end items-end p-[10px] rounded-[15px]" >
                {/* <Status
                    status={status}
                /> */}
                <Link to={`/editlist/${id}`}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">editar</button>
                </Link>
                <Link to={`/viewlist/${id}`}>
                    <button className="bg-green-600 text-white px-4 py-2 rounded">ver detalhes</button>
                </Link>
            </div>
        </div>
    )
}