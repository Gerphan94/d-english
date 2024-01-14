import React, { useState, useEffect } from "react";
import { BsTrash, BsPencilSquare, BsEye } from "react-icons/bs";
import DeleteWord from "./DelWordModal";
import EditWordModal from "./EditWordModal";

function WordTable({ sections, section }) {
  const [words, setWords] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [editWord, setEditWord] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + 'get_words/' + section['_id']['$oid']);
        const data = await response.json();
        setWords(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [section]);


  // return html
  return (
    <div className=" mx-auto mt-2">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-blue-100">
          <tr>
            <th className="py-2 px-4 border-b w-8">ID</th>
            <th className="py-2 px-4 border-b">English</th>
            <th className="py-2 px-4 border-b">Vietnamese</th>
            <th className="py-2 px-4 border-b">...</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word, index) => {
            // console.log(word)
            const eng = word.english;
            let vie = '';
            word.vietnamese.forEach(element => {
              vie = vie + "(" + element.type + ") " + element.define + ';';
            });
            return (
              <>
                <tr key={index + 1} className="even:bg-gray-200">
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b text-left">{eng}</td>
                  <td className="py-2 px-4 border-b text-left">{vie}</td>
                  <td className="py-2 px-4 border-b">
                    <div>
                      <button className='cursor-pointer mx-1 hover:text-blue-500' ><BsEye /></button>
                      <button
                        className='cursor-pointer mx-1 hover:text-yellow-500'
                        onClick={() => setEditWord(word['_id']['$oid'])}

                      ><BsPencilSquare /></button>
                      <button
                        className='cursor-pointer mx-1 hover:text-red-500'
                        onClick={() => setIsDelete(true)}
                      >

                        <BsTrash /></button>
                    </div>
                  </td>
                </tr>
                {(editWord === word['_id']['$oid']) &&
                  <EditWordModal sections={sections} section={section} editWord={word} setEditWord={setEditWord} />
                }
              </>


            )


          })}
        </tbody>
      </table>

      {isDelete &&
        <DeleteWord setIsDelete={setIsDelete} />
      }

      {/* {isEdit  &&
        <EditWordModal sections={sections} section={section} editWord={editWord} setIsEdit={setIsEdit} />


        }
     */}

    </div>

  )


}

export default WordTable;