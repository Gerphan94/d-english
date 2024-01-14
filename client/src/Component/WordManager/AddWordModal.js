import React, { useState, useEffect, useCallback } from "react";
import Select from 'react-select'

function AddWordModal({ sections }) {
    const [isOpenModal, setOpenModal] = useState(false);
    const TypeOptions = [
        { value: 'n', label: 'Noun' },
        { value: 'adj', label: 'Adjective' },
        { value: 'v', label: 'Verb' },
        { value: 'adv', label: 'Adverb' },
        { value: 'other', label: 'Other' }
    ];

    const SectionOptions = [];
    sections.forEach(section => {
        SectionOptions.push({ value: section['_id']['$oid'], label: section['name'] })
    })

    const handleSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);
            const formJson = Object.fromEntries(formData.entries());
            try {
                const response = await fetch(process.env.REACT_APP_API_URL + 'add_word', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formJson),
                });
                if (response.ok) {
                    const data = await response.json();
                    
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        },
        [] // Dependency array is empty because there are no dependencies
    );

    return (
        <>
            <button
                className='text-blue-400 hover:underline'
                onClick={() => setOpenModal(true)}
            >
                Add Word
            </button>
            {isOpenModal &&
                <div>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative lg:w-1/3 md:w-2/3 w-full my-6 mx-auto max-w-3xl p-4">
                            <form method="post" onSubmit={(e) => handleSubmit(e)} autoComplete='off'>
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
                                        <div className="text-2xl font-semibold select-none">Add Word</div>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 text-left text-sm">
                                        <div>
                                            <div className="py-2">
                                                <Select
                                                    className=""
                                                    name="section"
                                                    options={SectionOptions}
                                                    required={true} />

                                            </div>
                                            <div className="py-2">
                                                <input
                                                    type="text"
                                                    className="w-full px-2 py-2 border border-gray-300 rounded-sm outline-none"
                                                    name="english"
                                                    placeholder="Enter english word ..."
                                                    // onChange={handleChange}

                                                    required={true}
                                                ></input>
                                            </div>
                                            {/* \Define 1 */}
                                            <div className="w-full py-3">
                                                <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col gap-2 py-1">
                                                    <Select
                                                        className="lg:w-56 w-full"
                                                        name="type1"
                                                        options={TypeOptions} required={true}
                                                    />

                                                    <input
                                                        type="text"
                                                        name="define1"
                                                        className="w-full p-2 border border-gray-300 rounded-sm outline-none"
                                                        placeholder="Enter define 1 ..."
                                                        required={true}
                                                    >
                                                    </input>
                                                    <input className="w-10 text-gray-400" type="button" disabled={true} value={'Clear'}></input>
                                                </div>


                                                <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col gap-2 py-1">
                                                    <Select
                                                        className="lg:w-56 w-full"
                                                        name="type2"
                                                        options={TypeOptions}
                                                        required={false} />
                                                    <input
                                                        type="text"
                                                        name="define2"
                                                        className="w-full p-2 border border-gray-300 rounded-sm outline-none"
                                                        placeholder="Enter define 2 ..."
                                                        required={false}
                                                    >
                                                    </input>
                                                    <input className="w-10 cursor-pointer text-red-500 hover:underline" type="button" value={'Clear'}></input>
                                                </div>
                                            </div>
                                            {/* \Define 2 */}
                                            <div className="py-3 flex gap-4">


                                            </div>
                                        </div>

                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-red-500 border opacity-80 hover:opacity-100"
                                            type="button"
                                            onClick={() => setOpenModal(false)}
                                        >
                                            Close
                                        </button>
                                        <input
                                            className="bg-blue-500 text-white active:bg-emerald-600 font-bold text-sm px-6 py-2 shadow opacity-80 hover:opacity-100 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-pointer"
                                            type="submit"
                                            value="Submit"
                                        >
                                        </input>
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </div>
            }
        </>
    );
}
export default AddWordModal;