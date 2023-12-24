import React, { useState, useEffect } from 'react';

const WordCard = ({ section }) => {

    const section_id = section._id['$oid'];

    const [words, setWords] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_API_URL + 'get_words/' + section_id);
                const data = await response.json();
                setWords(data)

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [section_id]);

    return (
        <div className='rounded-md border-gray-400 border'>
            <div className='text-xl font-bold'>
                {section['name']}
            </div>
            <div>
                {words.map((word) => (
                    <div className=' text-left'>
                        <div className='px-4 py-1'>{word['english']}</div>
                            {word['vietnamese'].map((item) => (
                                <div className='text-sm px-4 py-1'>({item['type']}) : {item['define']}</div>  
                            ))}

                       
                    </div>
                ))}

            </div>

        </div>
    );
};

export default WordCard;