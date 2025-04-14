import Button from "../forms/button"

export function ItemCard({ item, onDelete }) {

    return (
        <div className="flex justify-between items-center w-[95%] px-5 bg-white h-16 rounded-[5px] mt-[10px] text-black border-1 border-gray-300" >
            <p>
                {item}
            </p>
            <button
                className="bg-red-200 p-2 hover:text-red-700 rounded-[5px]"
                onClick={onDelete}
            >
                Deletar
            </button>
        </div>
    )
}