import Button from "../forms/button"

export function ItemCard({item}) {
    return (
        <div className="flex justify-between items-center w-[80%] px-5 bg-white h-16 rounded-[5px] mt-[10px] text-black shadow-[0px_10px_27px_3px_rgba(0,_0,_0,_0.2)] border-1 border-gray-300" >
            <p>
                {item}
            </p>
            <Button 
            customStyles={"bg-red-300 border-2 border-white"}
            text={"apagar"}
            />
        </div>
    )
}