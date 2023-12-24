import React from "react";
import { GiNotebook } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";

function FlashTab({ name }) {

    function Icon( {cls_name}) {
        switch(name) {
            case "Flash Card":
                return <GiNotebook className={cls_name} />
            case "New Word":
                return <FaPlus className={cls_name} />
            default:
                return <FaPlus />
        }
    }
    
    return (
        <div className="pb-5">
            <div className="bg-white border border-gray-300 rounded-md flex justify-left p-3 items-center cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2">
                
                <Icon cls_name="w-6 h-6 text-blue-500" />
                <div className="ml-3 font-bold">
                    {name}
                </div>
            </div >
        </div>

    )

}

export default FlashTab;