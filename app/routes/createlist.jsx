import MainContainer from "../components/layout/mainconteiner";
import SecondaryContainer from "../components/layout/secondaryconteiner";
import Input from "../components/forms/input";
import Button from "../components/forms/button";

import { useState, useEffect } from "react";
import { ItemCard } from "../components/itemcard/itemcard";
import { useParams } from 'react-router'

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
        fetch(`http://localhost:3000/api/list/${id}/items`)
            .then((res) => res.json())
            .then((resData) => setData(resData))
            .catch((err) => console.error("Erro ao buscar dados:", err));
    }, []);

    const handleSubmit = async (e) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:3000/api/items/${id}/withList`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Define que o corpo é JSON
                },
                body: JSON.stringify({ name, description, id }), // Envia os dados no formato esperado pelo controller
            });

            if (!response.ok) {
                throw new Error("Erro ao criar o item");
            }

            const data = await response.json();
            console.log("Item criado com sucesso:", data);
            setSuccess(true);
            setName(""); // Limpa o campo
            setDescription(""); // Limpa o campo
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };


    const deleteItem = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/api/items/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }), // Envia o ID do item a ser deletado
            });

            if (!response.ok) throw new Error('Falha ao deletar');

            // Atualiza o estado removendo o item deletado
            setData(prevData => ({
                ...prevData,          // Mantém as outras propriedades de `data` (se houver)
                items: prevData.items.filter(item => item._id !== id)  // Filtra apenas o array `items`
            }));
        } catch (error) {
            console.error('Erro:', error);
        }
    };

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
                        <SecondaryContainer customStyles={" bg-white h-[100%] p-3 flex flex-col items-start"}>
                            <SecondaryContainer  >
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

                            <SecondaryContainer customStyles={"border-1 border-gray-300 p-2"} >
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
                            </SecondaryContainer>
                        </SecondaryContainer>
                    </SecondaryContainer>
                </SecondaryContainer>
            </MainContainer>
        </div >
    )
}