import Button from "../components/forms/button.jsx";
import Maincontainer from "../components/layout/mainconteiner.jsx";
import SecondaryContainer from "../components/layout/secondaryconteiner.jsx";
import CardList from "../components/lists/cardlist.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";

export default function Listas() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/list/")
            .then((res) => res.json())
            .then((resData) => setData(resData))
            .catch((err) => console.error("Erro ao buscar dados:", err));
    }, []);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/editlist");
    }

    return (
        <div className="w-[100dvw] h-[100dvh] flex flex-col justify-center items-center bg-white">
            <Maincontainer customStyles="">
                <h1 className="font-semibold text-[46px] ml-[40px] mb-0" >Listas.</h1>
                <p className="font-light text-[16px] ml-[40px] mb-3 " >inicialmente apenas é permitido a criação de apenas três listas </p>
                <Button text={"edit"} onClick={handleClick} />
                <SecondaryContainer customStyles={"flex flex-col justify-center items-center bg-[#B27DC7] rounded-[30px]"} >
                    {data.map((list) => (
                        <CardList
                            name={list.name}
                            description={list.description}
                            typeList={list.typeList}
                        />
                    ))}
                </SecondaryContainer>
            </Maincontainer>
            <p className="font-light text-[20px] text-[#fff]" >para Maria de Fátima.</p>
        </div>
    );
} 