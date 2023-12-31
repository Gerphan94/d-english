import React, { useState, useEffect } from 'react';
import PageHeader from './PageHeader';
import WordTable from './WordTable';
import WordModal from './WordModal';
import { FaCheck } from "react-icons/fa6";

function ManagerPage() {

    const [curSubject, setCurSubject] = useState([]);
    const [sections, setSections] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_API_URL + 'get_sections/' + curSubject["value"]);
                const data = await response.json();
                setSections(data)
                console.log("fetching data" + data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        if (curSubject["value"]) {
            fetchData();
        }
    }, [curSubject]);

    const handeClickAddSection = (id) => {
        console.log(id);
    }

    const handleOpenWordModal = (id) => {
        console.log("-----------------", sections);
        setIsOpenModal(true);
        console.log(id);
    }

    return (
        <>
            <div className='mt-16'>
                <PageHeader setCurSubject={setCurSubject} />
                <div className='w-full flex justify-center'>
                    <div className='w-2/3'>
                        {sections.map((section) => (
                            <div className='pb-2'>
                                <div className='text-lg font-bold text-left py-1'>
                                    {section["name"]}
                                </div>
                                <div>
                                    <WordTable section_id={section['_id']['$oid']} />
                                </div>
                                <div className='flex justify-start py-2'>
                                    <button
                                        href='#'
                                        className='text-blue-400 hover:underline'
                                        onClick={() => handleOpenWordModal(section['_id']['$oid'])}>
                                        Add Word
                                    </button>
                                </div>





                            </div>
                        ))}
                        <div className='flex mb-40'>
                            <button
                                href='#'
                                className=' text-blue-400 hover:underline'
                                onClick={() => handeClickAddSection(curSubject["value"])}>
                                Add Section
                            </button>
                            <div className='flex gap-5'>
                                <label>Title</label>
                                <input type='text' className='border rounded-md' />
                                <span className='w-6 border'>
                                    <FaCheck />
                                </span>
                                <span className='w-6 border'>
                                    <FaCheck />
                                </span>
                            </div>


                        </div>

                    </div>

                </div>

            </div>

            {isOpenModal &&
                <WordModal sections={sections} setIsOpenModal={setIsOpenModal} />
            }


        </>


    )
}

export default ManagerPage;