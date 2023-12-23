import React, { useState, useEffect } from "react";
import Select from 'react-select'


function PageHeader({ setSubject, handleOpenModal }) {
    const apiUrl = process.env.REACT_APP_API_URL + 'get_subjects';

    const [subjects, setSubjects] = useState([]);

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

                setSubjects(options);


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [apiUrl]);

    const handleChange = (selectedOption) => {
        setSubject(selectedOption);
        console.log(selectedOption);
    }

    return (
        <div className="flex justify-between p-10	">
            <Select
                className="text-sm w-60 text-left font-normal"
                options={subjects}
                onChange={handleChange}
            />
            <div>
                <button onClick={() => handleOpenModal()} className="border  text-black px-3 py-1 opacity-80 hover:opacity-100" >Add section</button>
                <button onClick={() => handleOpenModal()} className="border  text-black px-3 py-1 opacity-80 hover:opacity-100" >Add word</button>
            </div>
        </div>



    )


}

export default PageHeader;