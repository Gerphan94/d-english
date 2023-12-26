import React, { useState } from "react";

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
                className="w-full origin-bottom-left cursor-pointer"
               
                onClick={handleClick}
            >
                <div className="h-72 rounded-lg border border-gray-300 bg-white shadow-xl">
                    <div className="w-full h-full flex justify-center items-center text-4xl select-none">
                        {
                            (isRotated) ?
                                vie : eng
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default FlashCard;
