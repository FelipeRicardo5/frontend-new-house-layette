export default function SecondaryContainer({children, customStyles}) {
    return (
        <div className={`w-[100%] h-[85%] flex justify-center items-center bg-[#B27DC7] rounded-[30px] ${customStyles}`}>
            {children}
        </div>
    )
}