import Maincontainer from "../components/layout/mainconteiner";
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

    // name={list.name}
    // description={list.description}
    // typeList={list.typeList}

    return (
        <div className="w-[100dvw] h-[100dvh] flex flex-col justify-center items-center bg-white">
            <Maincontainer customStyles="">
                <h1 className="font-semibold text-[46px] ml-[40px] mb-0" >Listas.</h1>
                <p className="font-light text-[16px] ml-[40px] mb-3 " >inicialmente apenas é permitido a criação de apenas três listas </p>
                <SecondaryContainer customStyles={"flex flex-col justify-center items-center bg-[#B27DC7]"} >
                    {/* criar um método map, com uma função que itere sobre as listas */}
                    <CardList
                        name="Lista 1"
                        description="Essa é a lista 1"
                        typeList="Status: Em andamento"
                        customStyles=""
                    />
                    <CardList
                        name="Lista 1"
                        description="Essa é a lista 1"
                        typeList="Status: Em andamento"
                        customStyles=""
                    />
                    <CardList
                        name="Lista 1"
                        description="Essa é a lista 1"
                        typeList="Status: Em andamento"
                        customStyles=""
                    />
                </SecondaryContainer>
            </Maincontainer>
            <p className="font-light text-[20px] text-[#fff]" >para Maria de Fátima.</p>
        </div>
    );
} 