export default function SecondaryContainer({children, customStyles}) {
    return (
        <div className={`overflow-x-auto whitespace-nowrap shadow-[0px_-26px_47px_12px_rgba(0,_0,_0,_0.1)] w-[100%] h-[85%] rounded-[30px] ${customStyles}`}>
            {children}
        </div>
    )
}