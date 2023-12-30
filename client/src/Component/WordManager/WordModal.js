import React, { useState } from "react";
import Select from 'react-select'

export default function WordModal({ sections, setIsOpenModal }) {


    const section_ar = [];
    if (sections) {
        section_ar = sections;
    }
    const TypeOptions = [
        { value: 'n', label: 'Noun' },
        { value: 'adj', label: 'Adjective' },
        { value: 'v', label: 'Verb' },
        { value: 'adv', label: 'Adverb' },
        { value: 'other', label: 'Other' }
    ];
    const SectionOptions = [];


    section_ar.vietnamese.forEach(section => {
        SectionOptions.push({ value: section['_id']['$oid'], label: section['name'] })
    });



    console.log('modal------------', sections);
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

    }

    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
                    <form method="post" onSubmit={(e) => handleSubmit(e)} autoComplete={false}>
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
                                <div className="text-2xl font-semibold select-none">Add Word</div>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 text-left">

                                <div>
                                    <Select name="section_of_word" options={SectionOptions} required={true} />
                                    <Select name="type_of_word" options={TypeOptions} required={true} />
                                    <input
                                        type="text"
                                        name="english"
                                        className="w-full px-2 py-1 border border-gray-300 rounded-sm outline-none"
                                        placeholder="Enter section name..."
                                        required={true}
                                    >
                                    </input>
                                </div>

                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-red-500 border opacity-80 hover:opacity-100"
                                    type="button"
                                    onClick={() => setIsOpenModal(false)}
                                >
                                    Close
                                </button>
                                <input
                                    className="bg-blue-500 text-white active:bg-emerald-600 font-bold text-sm px-6 py-2  shadow opacity-80 hover:opacity-100 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
        </>
    );
}