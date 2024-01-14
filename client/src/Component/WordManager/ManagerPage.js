/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import PageHeader from './PageHeader';
import WordTable from './WordTable';
import EditWordModal from './EditWordModal';
import SectionForm from './SectionForm';
import AddWordModal from './AddWordModal';

function ManagerPage() {

    const [curSubject, setCurSubject] = useState([]);
    const [sections, setSections] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenAddModal, setIsOpenAddModal] = useState(false);
    const [isOpenSectionForm, setIsOpenSectionForm] = useState(false);
    const [modalObject, setModalObject] = useState({});

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


    const handleOpenNewModal = () => {
        setIsOpenAddModal(true);
       
    }

    return (
        <>
            <div className='mt-16'>
                <div className='w-full flex justify-center'>
                    <div className='lg:w-2/3 w-full mt-2 px-2'>
                        <div className='flex gap-4'>
                            <PageHeader setCurSubject={setCurSubject} />
                            <AddWordModal sections={sections} />
                        </div>

                        {sections.map((section) => (
                            <div key={section['_id']['$oid']} className='pb-2'>
                                <div className='text-lg font-bold text-left py-1'>
                                    {section["name"]}
                                </div>
                                <div>
                                    <WordTable
                                        key={section['_id']['$oid']}
                                        section={section}
                                        sections={sections}
                                        setIsOpenModal={setIsOpenModal}
                                        setModalObject={setModalObject} />
                                </div>
                                <div className='flex justify-start py-2'>
                                    <button
                                        href='#'
                                        className='text-blue-400 hover:underline'
                                        onClick={() => handleOpenNewModal(section['_id']['$oid'])}>
                                        Add Word
                                    </button>
                                </div>
                            </div>
                        ))}
                        <SectionForm subject_id={curSubject["value"]} sections={sections} setSections={setSections} />
                    </div>

                </div>

            </div>

            {isOpenModal &&
                <EditWordModal sections={sections} modalObject={modalObject} setIsOpenModal={setIsOpenModal} />
            }
            {isOpenAddModal &&
                <AddWordModal sections={sections} setIsOpenAddModal={setIsOpenAddModal} curSubject={curSubject} />
            }


        </>


    )
}

export default ManagerPage;