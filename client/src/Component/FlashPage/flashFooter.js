import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import React, { useReducer, useEffect } from "react";

function FlashFooter( { setWordIndex }) {

    const max_page = 12;
    const reducer = (state, action) => {
        switch (action) {
            case "NEXT":
                return state = state + 1;
            case "PREVIOUS":
                return state = state - 1;
            default:
                return state;
        }
    }
    const [page, dispatch] = useReducer(reducer, 1)

    useEffect(() => {
        setWordIndex(page);
    }, [page]);

    return (

        <>
         <div className="mt-5 border-b-2 border-slate-400 p-4">
                <div className="flex gap-10 justify-center items-center text-xl">
                    {page === 1 ? (
                        <button disabled={true} onClick={() => dispatch("PREVIOUS")}>
                            <MdArrowBackIos className="text-gray-400" />
                        </button>
                    ) : (
                        <button onClick={() => dispatch("PREVIOUS")}>
                            <MdArrowBackIos className="text-blue-600" />
                        </button>
                    )}
                    <div>
                        {page}/{max_page}
                    </div>
                    {page === max_page ? (
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
        </>
    )


}
export default FlashFooter;