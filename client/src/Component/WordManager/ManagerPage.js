/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import PageHeader from './PageHeader';
import WordTable from './WordTable';
import WordModal from './WordModal';
import SectionForm from './SectionForm';

function ManagerPage() {

    const [curSubject, setCurSubject] = useState([]);
    const [sections, setSections] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false)
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

  
    const handleOpenNewModal = (section) => {
        setIsOpenModal(true);
        setModalObject({
          isEdit: false,
          section:section,
          word: {}
        });

    }

    return (
        <>
            <div className='mt-16'>
                <div className='w-full flex justify-center'>
                    <div className='lg:w-2/3 w-full mt-2 px-2'>
                    <PageHeader setCurSubject={setCurSubject} />
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
                <WordModal sections={sections} modalObject={modalObject} setIsOpenModal={setIsOpenModal} />
            }


        </>


    )
}

export default ManagerPage;