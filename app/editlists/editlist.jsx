import MainConteiner from '../components/layout/mainconteiner'
import SecondaryContainer from '../components/layout/secondaryconteiner'
import SecundaryConteiner from '../components/layout/secondaryconteiner'
import Button from "../components/forms/button.jsx"

export function EditList() {
    return (
        <div className="w-[100dvw] h-[100dvh] flex flex-col justify-center items-center bg-white">
           <MainConteiner customStyles={""} >
                <SecundaryConteiner customStyles={" bg-[#B27DC7] p-10"} >
                    <SecondaryContainer customStyles={"bg-white"} >
                    <Button
                    text={"mano"}
                    />
                    </SecondaryContainer>
                </SecundaryConteiner>
           </MainConteiner>
        </div>
    )
}