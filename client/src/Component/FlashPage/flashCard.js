import React, { useEffect, useState} from "react";
import { useSpring, animated } from 'react-spring';

function FlashCard({ word }) {

    
   
    const props = useSpring({
        opacity: 1,
        transform: 'translateX(0%)',
        from: { opacity: 0, transform: 'translateX(50%)' },
        reset: true,
    });


    return (
        <>
            <animated.div style={props}>
                <div className="w-full origin-bottom-left cursor-pointer">
                    <div className="h-72 rounded-lg border border-gray-300 bg-white shadow-xl">
                        <div className="w-full h-full flex justify-center items-center text-4xl select-none">
                            {word}
                        </div>
                    </div>
                </div>
            </animated.div>
            
        </>

    )
}

export default FlashCard;