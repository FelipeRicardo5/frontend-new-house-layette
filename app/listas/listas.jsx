import Maincontainer from "../components/mainconteiner";
import SecondaryContainer from "../components/layout/secondaryconteiner";
import CardList from "../components/lists/cardlist.jsx";

export function Listas() {

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //   fetch("https://api.exemplo.com/listas")
    //     .then((res) => res.json())
    //     .then((resData) => setData(resData))
    //     .catch((err) => console.error("Erro ao buscar dados:", err));
    // }, []);

    // Dentro de card

    // name={item.name}
    // description={item.description}
    // typeList={item.typeList}

    return (
        <div className="w-[100dvw] h-[100dvh] flex flex-col justify-center items-center bg-white">
            <Maincontainer customStyles="">
                <h1 className="font-semibold text-[46px] ml-[40px]" >Listas.</h1>
                <SecondaryContainer>
                    <CardList
                        name="Lista 1"
                        description="Essa é a lista 1"
                        typeList="Status: Em andamento"
                        customStyles=""
                    />
                </SecondaryContainer>
            </Maincontainer>
            <p>italo deodato</p>
        </div>
    );
} 