import React, { useState, useEffect } from "react";
import Select from 'react-select'


function PageHeader({ options, setSubject}) {
 
    

    const handleChange = (selectedOption) => {
        setSubject(selectedOption);
        console.log(selectedOption);
    }

    return (
        <div className="flex justify-between p-10	">
            <Select
                className="text-sm w-60 text-left font-normal"
                options={options}
                onChange={handleChange}
            />
        </div>
           



    )


}

export default PageHeader;