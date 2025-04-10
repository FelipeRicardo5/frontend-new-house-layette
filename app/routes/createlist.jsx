import MainContainer from "../components/layout/mainconteiner";
import SecondaryContainer from "../components/layout/secondaryconteiner";
import Input from "../components/forms/input";
import Button from "../components/forms/button";

export default function CreateList() {
    return (
        <div className="w-[100dvw] h-[100dvh] flex flex-col justify-center items-center bg-white">
            <MainContainer>
                <h1 className="font-semibold text-[46px] ml-[40px] mb-0" >Listas.</h1>
                <p className="font-light text-[16px] ml-[40px] mb-3 " >inicialmente apenas é permitido a criação de apenas três listas </p>
                <SecondaryContainer customStyles={"flex flex-row justify-center items-center bg-[#B27DC7] rounded-[30px]"}  >
                    <SecondaryContainer customStyles={" bg-white h-[100%] p-3 flex flex-col items-start "}>
                        <Input
                            type={"text"}
                            nome={"ricardo"}
                            placeholder={"insira aqui o título da sua lista."}
                            label={"Título da lista"}
                            customStyles={"w-full"}
                        />
                        <Input
                            type={"text"}
                            nome={"ricardo"}
                            label={"Descrição da lista"}
                            placeholder={"adicione irformações importantes aqui."}
                            customStyles={"h-50 w-full"}
                            isTextarea
                        />
                        <Button
                            text={"Enviar"}
                        />
                    </SecondaryContainer>
                    <SecondaryContainer customStyles={" bg-white h-[100%] p-3 flex flex-col items-start "}>
                        <Input
                            type={"text"}
                            nome={"ricardo"}
                            placeholder={"insira aqui o nome do item."}
                            label={"Nome do item"}
                            customStyles={"w-full"}
                        />
                        <Input
                            type={"text"}
                            nome={"ricardo"}
                            placeholder={"insira aqui o título do seu item."}
                            label={"Título do item"}
                            customStyles={"w-full"}
                        />
                        <Button
                            text={"criar"}
                        />
                    </SecondaryContainer>
                </SecondaryContainer>
            </MainContainer>
        </div>
    )
}