import MainContainer from "../components/layout/mainconteiner";
import SecondaryContainer from "../components/layout/secondaryconteiner";
import Input from "../components/forms/input";
import Button from "../components/forms/button";

import { useState, useEffect } from "react";
import { ItemCard } from "../components/itemcard/itemcard";

export default function CreateList() {

    const [list, setList] = useState(null);
    const [data, setData] = useState([]);
    
    useEffect(() => { // executa quando o componente é montado
        fetch(`http://localhost:3000/api/list/67f73d862f453f2c1b5d72ab/items`)
        .then((res) => res.json())
        .then((resData) => setData(resData))
        .catch((err) => console.error("Erro ao buscar dados:", err));
    }, []);
    
    return (
        <div className="w-[100dvw] h-[100dvh] flex flex-col justify-center items-center bg-white">
            <MainContainer>
                <h1 className="font-semibold text-[46px] ml-[40px] mb-0" >Listas.</h1>
                <p className="font-light text-[16px] ml-[40px] mb-3 " >inicialmente apenas é permitido a criação de apenas três listas </p>
                <SecondaryContainer customStyles={"flex flex-row justify-center p-10 items-center bg-[#B27DC7] rounded-[30px]"}  >
                    <SecondaryContainer customStyles={" bg-white h-[100%] p-3 flex flex-row items-start rounded-[30px]"}>
                        <SecondaryContainer customStyles={" bg-white h-[100%] p-3 flex flex-col items-start"}>
                            <Input
                                type={"text"}
                                nome={""}
                                placeholder={"insira aqui o título da sua lista."}
                                label={"Título da lista"}
                                customStyles={"w-full"}
                            />
                            <Input
                                type={"text"}
                                nome={""}
                                label={"Descrição da lista"}
                                placeholder={"adicione irformações importantes aqui."}
                                customStyles={"h-50 w-full"}
                                isTextarea
                            />
                            <Button
                                text={"Enviar"}
                            />
                        </SecondaryContainer>
                        <SecondaryContainer customStyles={" bg-white h-[50%] p-3 flex flex-col items-start"}>
                            <Input
                                type={"text"}
                                nome={""}
                                placeholder={"insira aqui o nome do item."}
                                label={"Nome do item"}
                                customStyles={"w-full"}
                            />
                            <Input
                                type={"text"}
                                nome={""}
                                placeholder={"insira aqui o título do seu item."}
                                label={"Título do item"}
                                customStyles={"w-full"}
                            />
                            <Button
                                text={"criar"}
                            />
                            <SecondaryContainer>
                                {/* {list.items.map(item => (
                                    <ItemCard key={item._id} item={item.name} />
                                ))} */}
                                <p>{data.items[0].name}</p>
                            </SecondaryContainer>
                        </SecondaryContainer>
                    </SecondaryContainer>
                </SecondaryContainer>
            </MainContainer>
        </div >
    )
}