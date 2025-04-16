export default function DetailsComponents({children, customClass }) {
    return (
        <div className={`p-5 border-1 border-gray-300 rounded-[20px] min-h-[50%] text-black text-start text-wrap ${customClass}`} >
            {children}
        </div>
    )
}