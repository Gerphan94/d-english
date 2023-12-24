import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import FlashCard from "./flashCard";
import FlashTab from "./flashTab";
import FlashFooter from "./flashFooter";

function FlashPage() {

    const tabs = [
        "Flash Card",
        "Test 1",
        "Test 2",
        "New Word"
    ]

    const { section_id } = useParams();
    const [wordIndex, setWordIndex] = useState(0);

    const [words, setWords] = useState([]);
    const vocabulary_array = ["Ubiquitous", "Ephemeral", "Sycophant", "Cacophony", "Pernicious", "Quixotic", "Voracious", "Mellifluous", "Petrify", "Esoteric"]

    return (
        <div className="mt-16 bg-slate-5 flex justify-center">

            <div className="w-1/2 mt-28">
                {/* HEADER */}
                <div>

                </div>
                {/* TAB */}
                <div className="grid grid-cols-4 gap-4">
                    {tabs.map((tab) => (
                        <FlashTab name={tab} />
                    ))}
                </div>

                <FlashCard word={vocabulary_array[wordIndex]} />

                <FlashFooter setWordIndex={setWordIndex} />



            </div>

        </div>
    )
}

export default FlashPage;