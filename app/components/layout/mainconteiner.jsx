export default function MainContainer({children, customStyles}) {
    return (

        <div className={`shadow-[0px_40px_82px_0px_rgba(0,_0,_0,_0.30)] border-3 w-[70dvw] h-[80dvh] flex flex-col text-center text-white justify-end items-start bg-[#7900AC] rounded-[30px] ${customStyles}`}>
            {children}
        </div>

    )
}