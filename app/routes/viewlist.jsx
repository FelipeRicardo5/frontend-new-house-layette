import MainContainer from "../components/layout/mainconteiner";
import SecondaryContainer from "../components/layout/secondaryconteiner";
import Button from "../components/forms/button";
import { ItemCard } from "../components/itemcard/itemcard";
import Navbar from "../components/layout/navbar";
import { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailsComponents from "../components/layout/detailscomponents";


export default function Viewlist() {

    const params = useParams();
    const { id } = params; // Pega o id da lista da URL
    const [list, setList] = useState(null);
    const [dataItems, setDataItems] = useState({ items: [] });
    const [data, setData] = useState({});
    const urlReserva = "https://backend-new-house-layette.onrender.com/api/list";

    useEffect(() => { // executa quando o componente é montado
        fetch(`https://backend-new-house-layette.onrender.com/api/list/${id}/items`)
            .then((res) => res.json())
            .then((resData) => setDataItems(resData))
            .catch((err) => console.error("Erro ao buscar dados:", err));
    }, []);

    useEffect(() => { // executa quando o componente é montado
        fetch(`https://backend-new-house-layette.onrender.com/api/list/${id}`)
            .then((res) => res.json())
            .then((resData) => setData(resData))
            .catch((err) => console.error("Erro ao buscar dados:", err));
    }, []);

    return (
        <div className="w-[100dvw] h-[100dvh] flex flex-col justify-center items-center bg-white">
            <MainContainer>
                <Navbar
                    name={`Visualizando Lista ${data.name}`}
                    description={"lista criada para o futuro enxoval com a minha noiva"} />
                <SecondaryContainer customStyles={"flex flex-row justify-center p-10 items-center bg-[#B27DC7] rounded-[30px]"}  >
                    <SecondaryContainer customStyles={" bg-white h-[100%] p-3 flex flex-row items-start rounded-[30px] shadow-[0px_20px_47px_12px_rgba(0,_0,_0,_0.3)]"}>
                        <SecondaryContainer>
                            <DetailsComponents>
                                <h1 className="text-[26px] font-semibold" >{data.name}</h1>
                                <p className="text-gray-500 text-[18px] " >{data.description}</p>
                            </DetailsComponents>
                        </SecondaryContainer>
                        <SecondaryContainer customStyles={"p-2"} >
                        {dataItems?.items?.length > 0 ? (
                                dataItems.items.map((item) => (
                                    <ItemCard
                                        key={item._id}
                                        item={item.name}
                                        description={item.description}
                                        isView
                                    />
                                ))
                            ) : (
                                <p className="text-black">Nenhum item encontrado ou carregando...</p>
                            )}
                        </SecondaryContainer>
                    </SecondaryContainer>
                </SecondaryContainer>
            </MainContainer>
            <p className="font-light text-[20px] text-gray-500 mt-2" >para Maria de Fátima.</p>
        </div>
    )
}