import React from "react";

function DeleteWord( {setIsDelete} ) {
    return (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative lg:w-1/3 md:w-2/3 w-full my-6 mx-auto max-w-3xl p-4">
                   
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
                                <div className="text-2xl font-semibold select-none">Delete this word?</div>
                            </div>
                            {/*body*/}
                            <div className="relative p-4 text-left text-md">
                                Are you sure delete <strong>Word</strong>?
                                

                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                                
                            <button
                                    className="text-white bg-red-500 px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-red-500 border opacity-95 hover:opacity-100"
                                    type="button"
                                    onClick={() => setIsDelete(false)}
                                >
                                    Delete
                                </button>
                                <button
                                    className="text-red-500 background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-red-500 border opacity-80 hover:opacity-100"
                                    type="button"
                                    onClick={() => setIsDelete(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>


                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
export default DeleteWord;