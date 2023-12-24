import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import FlashCard from "./flashCard";
import FlashTab from "./flashTab";
import FlashFooter from "./flashFooter";
import WordModal from "./WordModal";

function FlashPage() {

    console.log("Render -----")
    const { section_id } = useParams();
    const [words, setWords] = useState([]);
    const [section_name, setSection_name] = useState('test');
    const [openWordModal, setOpenWordModal] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    
    
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch both section info and words in parallel
                const [sectionInfoResponse, wordsResponse] = await Promise.all([
                    fetch(process.env.REACT_APP_API_URL + 'get_section/' + section_id),
                    fetch(process.env.REACT_APP_API_URL + 'get_words/' + section_id)
                ]);

                const sectionInfoData = await sectionInfoResponse.json();
                const wordsData = await wordsResponse.json();
                console.log('word data is', wordsData[2]);
                setSection_name(sectionInfoData['name']);
                setWords(wordsData);
        
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [section_id]);

    const [word, setWord] = useState('');

    useEffect(() => {
        console.log(words[wordIndex]);
        setWord(words[wordIndex]);
    }, [wordIndex, words]);


    return (
        <>
            <div className="mt-16 bg-slate-5 flex justify-center select-none">
                <div className="w-1/2 mt-20">
                    {/* HEADER */}
                    <div className="flex mb-4 font-bold">
                        <div className="text-4xl">
                            {section_name}
                        </div>
                    </div>
                    {/* TAB */}
                    <FlashTab setOpenWordModal={setOpenWordModal} />
                    <FlashCard word='123'/>
                    <FlashFooter setWordIndex={setWordIndex} />
                </div>
            </div>

            {openWordModal &&
                <WordModal setIsOpenModal={setOpenWordModal} />
            }
        </>
    )
}

export default FlashPage;
