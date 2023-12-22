import React, { useState, useEffect } from "react";
import Select from 'react-select'


function PageHeader( {handleOpenModal}) {
    const apiUrl = process.env.REACT_APP_API_URL + 'get_classifies';

    const [classifies, setClassifies] = useState([]);

    useEffect(() => {
        let options = [];
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                console.log(data)

                data.forEach((item, index) => {
                    options.push({
                        value: item._id['$oid'],
                        label: item.name
                    });
                });

                setClassifies(options);


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [apiUrl]);

    return (
        <>
            <Select
                className="text-sm w-60 text-left font-normal"
                options={classifies}
            />
            <div>    
            <button onClick={() => handleOpenModal() } className="border  text-black px-3 py-1 opacity-80 hover:opacity-100" >Add section</button>
            <button onClick={() => handleOpenModal() } className="border  text-black px-3 py-1 opacity-80 hover:opacity-100" >Add word</button>
            </div>

        </>
    )


}

export default PageHeader;