import Button from "../forms/button"

export function ItemCard({ item, onDelete, description, isView }) {

    return (
        <div className="flex justify-between items-center w-[95%] px-5 py-3 bg-white min-h-16 max-h-30 rounded-[5px] mt-[10px] text-black border-1 border-gray-300" >
            <div className="flex flex-col text-start w-full" >
                {isView ? (
                    <div>
                        <p className="font-bold" >
                            {item}
                        </p>
                        <p className="flex text-gray-400 text-wrap text-[14px] " >
                            {description}
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-row justify-between w-full items-center" >
                        <p className="font-bold" >
                            {item}
                        </p>
                        <button className="bg-red-200 p-2 hover:text-red-700 rounded-[5px]" onClick={onDelete} >Deletar</button>
                    </div>
                )}
            </div>
        </div>
    )
}