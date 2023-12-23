import React from "react";
import { GiNotebook } from "react-icons/gi";

function FlashTab({ name }) {

    return (
        <div className="bg-white border border-gray-300 rounded-md flex justify-center p-2 items-center cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <GiNotebook className="w-6 h-6 text-blue-500" />
            <div className="ml-3 font-bold">
            {name}
            </div>
        </div >
    )

}

export default FlashTab;