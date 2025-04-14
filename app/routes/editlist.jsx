import MainConteiner from '../components/layout/mainconteiner.jsx'
import SecondaryContainer from '../components/layout/secondaryconteiner.jsx'
import SecundaryConteiner from '../components/layout/secondaryconteiner.jsx'
import Button from "../components/forms/button.jsx"
import Input from "../components/forms/input.jsx"
import { ItemCard } from '../components/itemcard/itemcard.jsx'
import { useNavigate } from "react-router";
import { Link } from 'react-router'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function EditList({ href }) {

    const params = useParams();
    const { id } = params; // Pega o id da lista da URL
    const [list, setList] = useState(null);
    const [dataItems, setDataItems] = useState({ items: [] });
    const [data, setData] = useState({});


    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }

    // http://localhost:3000/api/list/67f73d862f453f2c1b5d72ab/items

    useEffect(() => { // executa quando o componente é montado
        fetch(`http://localhost:3000/api/list/${id}/items`)
            .then((res) => res.json())
            .then((resData) => setDataItems(resData))
            .catch((err) => console.error("Erro ao buscar dados:", err));
    }, []);
    
    useEffect(() => { // executa quando o componente é montado
        fetch(`http://localhost:3000/api/list/${id}`)
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

            const dataItems = await response.json();
            console.log("Item criado com sucesso:", dataItems);
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
            setDataItems(prevData => ({
                ...prevData,          // Mantém as outras propriedades de `data` (se houver)
                items: prevData.items.filter(item => item._id !== id)  // Filtra apenas o array `items`
            }));
        } catch (error) {
            console.error('Erro:', error);
        }
    };




    return (
        <div className="w-[100dvw] h-[100dvh] flex flex-col justify-center items-center bg-white">
            <MainConteiner customStyles={""} >
                <h1 className="font-semibold text-[46px] ml-[40px] mb-0" >Editando lista "{data.name}"</h1>
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
                        <SecondaryContainer customStyles={"flex flex-col p-3"} >
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

                        <SecondaryContainer customStyles={" p-2"} >
                            {dataItems?.items?.length > 0 ? (
                                dataItems.items.map((item) => (
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
                </SecundaryConteiner>
            </MainConteiner>
        </div>
    )
}