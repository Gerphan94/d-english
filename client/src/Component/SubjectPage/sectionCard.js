import React from "react";
import { useNavigate } from "react-router-dom";



function SectionCard( {section}) {


    const navigate  = useNavigate();
    const handleClick = (id) => {
        navigate("/flash/" + id)
    }
    
    return (
        <>
        <div 
            className="border border-slate-400 rounded-lg bg-white h-48 text-left hover:border-b-orange-400 hover:border-b-4 cursor-pointer"
            onClick={() => handleClick(section['_id']["$oid"])}
            >
            <div className="text-xl px-5 py-1 font-bold">
                {section['name']}
            </div>
            
        </div>
        
        </>
    )
}

export default SectionCard;