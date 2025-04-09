export default function Status({ status, customStyles }) {
    return (
        <div className={`w-[100px] h-[45px] flex justify-center items-center bg-[#69C564] rounded-[10px] border-2 border-white text-white shadow-[0px_15px_40px_-4px_rgba(0,_0,_0,_0.3)] ${customStyles}`}>
            {status}
        </div>
    )
}