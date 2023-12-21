import React from "react";
import SideBar from "./sideBar";
import WordTable from "./wordTable";

function WordPage() {

    return (
            <div className="flex mt-14 ">

                <SideBar />
                <div className="p-5 w-full">
                    <WordTable />
                </div>
                
            </div>
       
    )
}

export default WordPage;