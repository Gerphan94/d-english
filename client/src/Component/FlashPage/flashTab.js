import React from "react";
import { GiNotebook } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";

function FlashTab({ setOpenWordModal }) {


    const handleClick = () => {
        setOpenWordModal(true)
    }

    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                <div className="bg-white border border-gray-300 rounded-md flex justify-left p-3 items-center cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2">
                    <GiNotebook cls_name="w-6 h-6 text-blue-500" />
                    <div className="ml-3 font-bold">
                        Flash Card
                    </div>
                </div >
                <div className="bg-white border border-gray-300 rounded-md flex justify-left p-3 items-center cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2">
                    <GiNotebook cls_name="w-6 h-6 text-blue-500" />
                    <div className="ml-3 font-bold">
                        Flash Card
                    </div>
                </div >
                <div className="bg-white border border-gray-300 rounded-md flex justify-left p-3 items-center cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2">
                    <GiNotebook cls_name="w-6 h-6 text-blue-500" />
                    <div className="ml-3 font-bold">
                        Flash Card
                    </div>
                </div >
                <div 
                className="bg-white border border-gray-300 rounded-md flex justify-left p-3 items-center cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2"
                onClick={() => handleClick()}
                >
                    <FaPlus cls_name="w-6 h-6 text-blue-500" />
                    <div className="ml-3 font-bold">
                        New Word
                    </div>
                </div >

            </div>
        </>


    )

}

export default FlashTab;