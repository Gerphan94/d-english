import React, { useState, useEffect, useCallback } from "react";
import Select from 'react-select'

function WordModal({ sections, modalObject, setIsOpenModal }) {

    const word = modalObject.word;
    const section = modalObject.section;
    console.log(modalObject.section);
    const [formData, setFormData] = useState({
        curSection: {},
        inputEng: '',
        type1: {},
        type2: {},
        define1: '',
        define2: ''
      });

    const [title, setTitle] = useState("");
    console.log("checking render -------------------");
    const TypeOptions = [
        { value: 'n', label: 'Noun' },
        { value: 'adj', label: 'Adjective' },
        { value: 'v', label: 'Verb' },
        { value: 'adv', label: 'Adverb' },
        { value: 'other', label: 'Other' }
    ];

    function getDefaultSelect(value) {
        switch (value) {
            case 'n':
                console.log("---------------------------------",  TypeOptions[0])
                return TypeOptions[0];
            case 'adj':
                return TypeOptions[1];
            case 'v':
                return TypeOptions[2];
            case 'adv':
                return TypeOptions[3];
            case 'other':
                return TypeOptions[4];
            default:
                return;
        }
      
    }

    const isEdit = modalObject.isEdit;
    useEffect(() => {
        if (isEdit) {
            setTitle('Edit Word');
            const define = word.vietnamese;
            setFormData({
                curSection: { value: section['_id']['$oid'], label: section['name'] },
                inputEng: word['english'],
                type1: define[0]?.type !== undefined ? getDefaultSelect(define[0].type) : '',
                type2: define[1]?.type !== undefined ? getDefaultSelect(define[1].type) : '',
                define1: define[0]?.define !== undefined ? define[0].define : '',
                define2: define[1]?.define !== undefined ? define[1].define : ''
            });
            
            // word.vietnamese.forEach((define, index) => {
            //     switch (index) {
            //         case 0:
            //             setDefine1(define.define);
            //             setType1(define.type);
            //             break

            //         default:
            //             setDefine2(define.define);
            //             setType2(define.type);
            //             break
            //     }
            // })

        }
        else {
            setTitle('New Word');
        }
    }, [isEdit]);

    
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
            console.log(formJson);
        },
        [] // Dependency array is empty because there are no dependencies
    );

    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative lg:w-1/3 md:w-2/3 w-full my-6 mx-auto max-w-3xl p-4">
                    <form method="post" onSubmit={(e) => handleSubmit(e)} autoComplete='off'>
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
                                <div className="text-2xl font-semibold select-none">{title}</div>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 text-left text-sm">
                                <div>
                                    <div className="py-2">
                                        <Select 
                                            className=""
                                            name="section_of_word" 
                                            options={SectionOptions} 
                                            value={formData.curSection}
                                            required={true} />

                                    </div>
                                    <div className="py-2">
                                        <input
                                            type="text"
                                            className="w-full px-2 py-2 border border-gray-300 rounded-sm outline-none"
                                            name="english"
                                            placeholder="Enter english word ..."
                                            value={formData.inputEng}
                                            // onChange={handleChange}

                                            required={true}
                                        ></input>
                                    </div>
                                    {/* \Define 1 */}
                                    <div className="w-full py-3">
                                        <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col gap-2 py-1">
                                            <Select
                                                className="lg:w-56 w-full"
                                                name="type_of_word_1"
                                                options={TypeOptions} required={true}
                                                value={formData.type1}
                                            />

                                            <input
                                                type="text"
                                                name="define1"
                                                className="w-full p-2 border border-gray-300 rounded-sm outline-none"
                                                placeholder="Enter define 1 ..."
                                                value={formData.define1}
                                                required={true}
                                            >
                                            </input>
                                            <input className="w-10 text-gray-400" type="button" disabled={true} value={'Clear'}></input>
                                        </div>


                                        <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col gap-2 py-1">
                                            <Select
                                                className="lg:w-56 w-full"
                                                name="type_of_word_2"
                                                options={TypeOptions}
                                                value={formData.type2}
                                                required={false} />
                                            <input
                                                type="text"
                                                name="define2"
                                                className="w-full p-2 border border-gray-300 rounded-sm outline-none"
                                                placeholder="Enter define 2 ..."
                                                required={false}
                                                value={formData.define2}
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
                                    onClick={() => setIsOpenModal(false)}
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
        </>
    );
}
export default WordModal;