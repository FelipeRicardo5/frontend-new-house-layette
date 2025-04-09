export default function Status({ status, customStyles }) {
    return (
        <div className={`w-[100px] h-[50px] flex justify-center items-center bg-[#c9c9c9] rounded-[10px] ${customStyles}`}>
            {status}
        </div>
    )
}