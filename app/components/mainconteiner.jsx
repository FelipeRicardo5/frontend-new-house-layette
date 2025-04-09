export default function MainContainer({children, customStyles}) {
    return (

        <div className={`w-[70dvw] h-[80dvh] flex flex-col text-center text-white justify-end items-start bg-[#7900AC] rounded-[30px] ${customStyles}`}>
            {children}
        </div>

    )
}