import { Link } from "react-router"


export default function Button({ text, href, onClick, customStyles }) {
    return (
        <div>
            <button
                className={`w-[100px] text-black px-5 py-2 rounded-[10px] shadow-[0px_5px_24px_-4px_rgba(0,_0,_0,_0.2)] ease-in-out duration-500 hover:shadow-[0px_10px_24px_-4px_rgba(0,_0,_0,_0.3)] cursor-pointer ${customStyles}`}
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    )
}