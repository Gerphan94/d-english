import React from "react";

function FlashCard( {word}) {
    
    return (
        <div className="w-full origin-bottom-left	">
            <div className="h-72 rounded-lg border border-gray-300 bg-white shadow-lg">
                <div className="w-full h-full flex justify-center items-center text-4xl">
                    {word}
                </div>
            </div>
            
        </div>
    )
}

export default FlashCard;