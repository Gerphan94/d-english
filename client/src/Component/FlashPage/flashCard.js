import React, { useState } from "react";
import './FlashCard.css'; // Import the CSS file for styling

function FlashCard({ word }) {
    const eng = word.english;
    let vie = '';
    word.vietnamese.forEach(element => {
        vie = vie + element.define + '\n';
    });
    const [isRotated, setIsRotated] = useState(false);
    const handleClick = () => {
        setIsRotated(!isRotated);
    }
    return (
        <>
            <div
                className={`flashcard ${isRotated ? 'flipped' : ''}`}
                onClick={handleClick}
            >
                <div className="h-72 rounded-lg border border-gray-300 bg-white shadow-xl">
                    <div className="w-full h-full flex justify-center items-center text-4xl select-none">

                        <div className="side">
                            {
                                (isRotated) ?
                                    vie : eng
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default FlashCard;
