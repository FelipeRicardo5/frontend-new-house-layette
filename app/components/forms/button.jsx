import { Link } from "react-router"


export default function Button({ text, href, onClick }) {
    return (
        <Link href={href || "#"} passHref>
            <button
                className="w-[100px] text-black px-5 py-2 rounded-[10px] shadow-[0px_10px_24px_-4px_rgba(0,_0,_0,_0.2)]"
                onClick={onClick}
            >
                {text}
            </button>
        </Link>
    )
}