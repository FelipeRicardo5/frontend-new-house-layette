import MainConteiner from '../components/layout/mainconteiner.jsx'
import SecondaryContainer from '../components/layout/secondaryconteiner.jsx'
import SecundaryConteiner from '../components/layout/secondaryconteiner.jsx'
import Button from "../components/forms/button.jsx"
import Input from "../components/forms/input.jsx"
import { ItemCard } from '../components/itemcard/itemcard.jsx'
import { useNavigate } from "react-router";
import { Link } from 'react-router'

export default function EditList({ href }) {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }

    return (
        <div className="w-[100dvw] h-[100dvh] flex flex-col justify-center items-center bg-white">
            <MainConteiner customStyles={""} >
                <h1 className="font-semibold text-[46px] ml-[40px] mb-0" >Editar listas.</h1>
                <SecundaryConteiner customStyles={" bg-[#B27DC7] p-10 shadow-[0px_-26px_47px_12px_rgba(0,_0,_0,_0.1)] rounded-[30px] "} >
                    <SecondaryContainer customStyles={"flex flex-row bg-white h-[100%] shadow-[0px_20px_47px_12px_rgba(0,_0,_0,_0.3)] rounded-[30px] "} >
                        <SecondaryContainer customStyles={" bg-white h-[100%] p-3 flex flex-col items-start rounded-[30px] "}>
                            <Input
                                type={"text"}
                                nome={""}
                                placeholder={"insira aqui o título da sua lista."}
                                label={"Título"}
                                customStyles={"w-full"}
                            />
                            <Input
                                type={"text"}
                                nome={""}
                                label={"Título"}
                                placeholder={"adicione irformações importantes aqui."}
                                customStyles={"h-50 w-full"}
                                isTextarea
                            />
                                <Button
                                    text={"Enviar"}
                                    onClick={handleClick}
                                />
                        </SecondaryContainer>
                        <SecondaryContainer customStyles={"flex flex-col items-center bg-white h-[100%] "}>
                            <ItemCard
                                item={"Talheres"}
                            />
                            <ItemCard
                                item={"Talheres"}
                            />
                            <ItemCard
                                item={"Talheres"}
                            />
                            <ItemCard
                                item={"Talheres"}
                            />
                            <ItemCard
                                item={"Talheres"}
                            />
                            <ItemCard
                                item={"Talheres"}
                            />
                            <ItemCard
                                item={"Talheres"}
                            />
                            <ItemCard
                                item={"Talheres"}
                            />
                            <ItemCard
                                item={"Talheres"}
                            />
                            <ItemCard
                                item={"Talheres"}
                            />
                            <ItemCard
                                item={"Talheres"}
                            />
                            <ItemCard
                                item={"Talheres"}
                            />
                            <ItemCard
                                item={"Talheres"}
                            />
                            <ItemCard
                                item={"Talheres"}
                            />
                        </SecondaryContainer>
                    </SecondaryContainer>
                </SecundaryConteiner>
            </MainConteiner>
        </div>
    )
}