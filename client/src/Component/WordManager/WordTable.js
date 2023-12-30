import React, { useState, useEffect } from "react";
import WordModal from "./WordModal";




function WordTable({ section_id }) {

    const [words, setWords] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_API_URL + 'get_words/' + section_id);
                const data = await response.json();
                setWords(data)
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, [section_id]);


    return (
        <div className="container mx-auto mt-2">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-blue-200">
          <tr>
            <th className="py-2 px-4 border-b w-8">ID</th>
            <th className="py-2 px-4 border-b">English</th>
            <th className="py-2 px-4 border-b">Vietnamese</th>
            <th className="py-2 px-4 border-b">...</th>
          </tr>
        </thead>
        <tbody>
          {words.map((row, index) => {

            const eng = row.english;
            let vie = '';
            row.vietnamese.forEach(element => {
                vie = vie + "(" +element.type +") " + element.define + ';';
            });
            return (
                <tr key={row.id} className="even:bg-gray-200">
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b text-left">{eng}</td>
                  <td className="py-2 px-4 border-b text-left">{vie}</td>
                  <td className="py-2 px-4 border-b"></td>
                </tr>
              )})}
        </tbody>
      </table>
    </div>

    )


}

export default WordTable;