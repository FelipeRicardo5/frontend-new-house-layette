import Button from "../components/forms/button.jsx";
import Maincontainer from "../components/layout/mainconteiner.jsx";
import SecondaryContainer from "../components/layout/secondaryconteiner.jsx";
import CardList from "../components/lists/cardlist.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import Navbar from "../components/layout/navbar.jsx";

export default function Listas() {

    const urlReserva = "https://backend-new-house-layette.onrender.com/api/list";

    const [data, setData] = useState([]);

    useEffect(() => { // executa quando o componente é montado
        fetch("https://backend-new-house-layette.onrender.com/api/list")
            .then((res) => res.json())
            .then((resData) => setData(resData))
            .catch((err) => console.error("Erro ao buscar dados:", err));
    }, []);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/createlist");
    }

    return (
        <div className="w-[100dvw] h-[100dvh] flex flex-col justify-center items-center bg-white">
            <Maincontainer customStyles="">
                <Navbar
                    name={"Listas"}
                    description={"lista criada para o futuro enxoval com a minha noiva"} />
                {/* <Button text={"criar"} onClick={handleClick} /> */}
                <SecondaryContainer customStyles={"flex flex-col py-5 items-center bg-[#B27DC7] rounded-[30px]"} >
                    {data.map((list) => (
                        <div key={list._id} className="flex justify-center items-center w-[100%]">
                            <CardList
                                name={list.name}
                                description={list.description}
                                typeList={list.typeList}
                                id={list._id}
                            />
                        </div>
                    ))}
                </SecondaryContainer>
            </Maincontainer>
            <p className="font-light text-[20px] text-gray-500 mt-2" >para Maria de Fátima.</p>
        </div>
    );
} 