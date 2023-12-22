import React from "react";
import Select from 'react-select'

export default function WordModal( {setIsOpenModal} ) {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-2/3 my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
                            <div className="text-2xl font-semibold">Add word</div>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 text-left">
                            <div>ABC</div>
                            <div>
                                <Select options={options} />
                            </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button className="text-red-500 background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-red-500 border hover:bg-red-300 hover:text-white"
                                type="button"
                                onClick={() => setIsOpenModal(false)}
                            >
                                Close
                            </button>
                            <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold text-sm px-6 py-2  shadow opacity-80 hover:opacity-100 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}