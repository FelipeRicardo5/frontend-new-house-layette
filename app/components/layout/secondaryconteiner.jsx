export default function SecondaryContainer({children, customStyles}) {
    return (
        <div className={`overflow-x-auto whitespace-nowrap w-[100%] h-[85%] ${customStyles}`}>
            {children}
        </div>
    )
}