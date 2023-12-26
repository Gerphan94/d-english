import React, { useState, useEffect, useReducer } from "react";
import { useParams } from 'react-router-dom';
import FlashCard from "./flashCard";
import FlashTab from "./flashTab";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";


function FlashCards() {

    console.log("Start render -----")
    const { section_id } = useParams();
    const [words, setWords] = useState([]);
    const [section_name, setSection_name] = useState('test');
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            console.log("how many fetchign...")
            try {
                // Fetch both section info and words in parallel
                const [sectionInfoResponse, wordsResponse] = await Promise.all([
                    fetch(process.env.REACT_APP_API_URL + 'get_section/' + section_id),
                    fetch(process.env.REACT_APP_API_URL + 'get_words/' + section_id)
                ]);

                const sectionInfoData = await sectionInfoResponse.json();
                const wordsData = await wordsResponse.json();
                setSection_name(sectionInfoData['name']);
                setWords(wordsData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [section_id]);

    const cards = words.map((word, index) => {
        return <FlashCard word={word} />;
    });

    const max_page = cards.length;
    const reducer = (state, action) => {
        switch (action) {
            case "NEXT":
                state = state + 1;
                setWordIndex(state);
                return state;
            case "PREVIOUS":
                state = state - 1;
                setWordIndex(state);
                return state;
            default:
                return state;
        }
    }
    const [page, dispatch] = useReducer(reducer, 0);

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
                    <FlashTab />
                    <div className="mt-6 px-10">
                        {cards[wordIndex]}
                    </div>


                    <div className="mt-5 border-b-2 border-slate-400 p-4">
                        <div className="flex gap-10 justify-center items-center text-xl">
                            {page === 0 ? (
                                <button disabled={true} onClick={() => dispatch("PREVIOUS")}>
                                    <MdArrowBackIos className="text-gray-400" />
                                </button>
                            ) : (
                                <button onClick={() => dispatch("PREVIOUS")}>
                                    <MdArrowBackIos className="text-blue-600" />
                                </button>
                            )}
                            <div className="w-14">
                                {page + 1}/{max_page}
                            </div>
                            {page === max_page - 1 ? (
                                <button disabled={true} onClick={() => dispatch("NEXT")}>
                                    <MdArrowForwardIos className="text-gray-400" />
                                </button>
                            ) : (
                                <button onClick={() => dispatch("NEXT")}>
                                    <MdArrowForwardIos className="text-blue-600" />
                                </button>
                            )}
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default FlashCards;
