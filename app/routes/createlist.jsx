import MainContainer from "../components/layout/mainconteiner";
import SecondaryContainer from "../components/layout/secondaryconteiner";
import Input from "../components/forms/input";
import Button from "../components/forms/button";

import { useState, useEffect } from "react";
import { ItemCard } from "../components/itemcard/itemcard";
import { useParams } from 'react-router'
import Navbar from "../components/layout/navbar";
import { ToastContainer, toast } from 'react-toastify';

export default function CreateList() {


    const params = useParams();
    const { id } = params; // Pega o id da lista da URL
    const [list, setList] = useState(null);
    const [data, setData] = useState({ items: [] });


    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // Lista os itens da lista
    useEffect(() => { // executa quando o componente é montado
        fetch(`https://backend-new-house-layette.onrender.com/api/list/${id}/items`)
            .then((res) => res.json())
            .then((resData) => setData(resData))
            .catch((err) => console.error("Erro ao buscar dados:", err));
    }, []);

    const handleSubmitList = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(false); // Zera o sucesso antes de tudo

        try {
            const response = await fetch(`https://backend-new-house-layette.onrender.com/api/list`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, description }), // Envia os dados no formato esperado pelo controller
            });

            if (!response.ok) {
                console.log("Erro ao criar a lista:", response);
            }

            const newList = await response.json();
            toastSuccess(); // mostra toast imediatamente

            setTimeout(() => {
                setSuccess(true);
                setName("");
                setDescription("");
            }, 2000);

        } catch (err) {
            toastError();
            setError(err.message);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
    };

    const toastSuccess = () => {
        toast.success("Lista criada com sucesso!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    const toastError = () => {
        toast.error("Erro ao criar a lista!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    // const handleSubmit = async (e) => {
    //     setIsLoading(true);
    //     setError(null);

    //     try {
    //         const response = await fetch(`https://backend-new-house-layette.onrender.com/api/items/${id}/withList`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json", // Define que o corpo é JSON
    //             },
    //             body: JSON.stringify({ name, description, id }), // Envia os dados no formato esperado pelo controller
    //         });

    //         if (!response.ok) {
    //             throw new Error("Erro ao criar o item");
    //         }

    //         const data = await response.json();
    //         console.log("Item criado com sucesso:", data);
    //         setSuccess(true);
    //         setName(""); // Limpa o campo
    //         setDescription(""); // Limpa o campo
    //     } catch (err) {
    //         setError(err.message);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };


    // const deleteItem = async (id) => {
    //     try {
    //         const response = await fetch(`http://localhost:3000/api/items/${id}`, {
    //             method: 'DELETE',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ id }), // Envia o ID do item a ser deletado
    //         });

    //         if (!response.ok) throw new Error('Falha ao deletar');

    //         // Atualiza o estado removendo o item deletado
    //         setData(prevData => ({
    //             ...prevData,          // Mantém as outras propriedades de `data` (se houver)
    //             items: prevData.items.filter(item => item._id !== id)  // Filtra apenas o array `items`
    //         }));
    //     } catch (error) {
    //         console.error('Erro:', error);
    //     }
    // };

    return (
        <div className="w-[100dvw] h-[100dvh] flex flex-col justify-center items-center bg-white">
            <MainContainer>
                <Navbar
                    name={"Listas"}
                    description={"para criar os itens primeiro você deve criar a lista!"}
                />
                <SecondaryContainer customStyles={"flex flex-row justify-center p-10 items-center bg-[#B27DC7] rounded-[30px]"}  >
                    <SecondaryContainer customStyles={" bg-white h-[100%] p-3 flex flex-row items-start rounded-[30px] shadow-[0px_20px_47px_12px_rgba(0,_0,_0,_0.3)]"}>
                        <SecondaryContainer customStyles={" bg-white h-[100%] p-3 flex flex-col items-start"}>
                            <form onSubmit={handleSubmitList} className="w-full h-full p-0 m-0" >
                                <Input
                                    type={"text"}
                                    onChange={(e) => setName(e.target.value)}
                                    nome={""}
                                    placeholder={"altere aqui o título da sua lista."}
                                    label={"Título da lista"}
                                    customStyles={"w-full"}
                                />
                                <Input
                                    type={"text"}
                                    onChange={(e) => setDescription(e.target.value)}
                                    nome={""}
                                    label={"Descrição da lista"}
                                    placeholder={"altere detalhes importantes aqui."}
                                    customStyles={"h-50 w-full"}
                                    isTextarea
                                />
                                <Button
                                    text={"Enviar"}
                                    type="submit"
                                />
                            </form>
                        </SecondaryContainer>
                        {/* <SecondaryContainer customStyles={" bg-white h-[100%] p-3 flex flex-col items-start"}> */}
                        {/* <SecondaryContainer  >
                                <form onSubmit={handleSubmit}>
                                    <Input
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        placeholder="Nome do item"
                                        label="Nome do item"
                                    />
                                    <Input
                                        type="text"
                                        onChange={(e) => setDescription(e.target.value)}
                                        value={description}
                                        placeholder="Descrição do item"
                                        label="Descrição do item"
                                        customStyles={"h-30"}
                                        isTextarea
                                    />
                                    <Button
                                        text={isLoading ? "Criando..." : "Criar"}
                                        type="submit"
                                        disabled={isLoading}
                                    />
                                </form>
                            </SecondaryContainer>

                            {error && <p style={{ color: "red" }}>Erro: {error}</p>}
                            {success && <p style={{ color: "green" }}>Item criado com sucesso!</p>}

                            <SecondaryContainer customStyles={"border-1 border-gray-300 p-2 max-h-[40%]"} >
                                {data?.items?.length > 0 ? (
                                    data.items.map((item) => (
                                        <ItemCard
                                            key={item._id}
                                            item={item.name}
                                            onDelete={() => deleteItem(item._id)} // Passa a função de deletar para o ItemCard
                                        />
                                    ))
                                ) : (
                                    <p className="text-black">Nenhum item encontrado ou carregando...</p>
                                )}
                            </SecondaryContainer> */}
                        {/* </SecondaryContainer> */}
                    </SecondaryContainer>
                </SecondaryContainer>
            </MainContainer>
            <ToastContainer />
            <p className="font-light text-[20px] text-gray-500 mt-2" >para Maria de Fátima.</p>
        </div >
    )
}