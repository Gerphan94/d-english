import React from 'react';
import { BsTrash, BsPencilSquare, BsEye } from "react-icons/bs";


function ViewRow ( { word, index} ) {

    // const handleEdit = (word_id) => {
    //     setUpdateStatus(word_id);
    // }

    const _id = 1;
    const _eng = "Hello"
    const _vie = "Xin chào"

  
    return (
      <>
        <tr key={_id} className='even:bg-gray-200 text-sm'>
          <td className='w-10'>{index}</td>
          <td className='text-left w-1/3'>
            <div  className='hover:underline hover:text-blue-600 cursor-pointer'  >
              <a href={'https://www.ldoceonline.com/dictionary/'+_eng} target='blank'>
                {_eng}
              </a>
              
              
              </div>
          </td>
          <td className='text-left w-1/3 ml-5'>
            <div>{_vie}</div>
          </td>
          <td>
            <div className='p-2 flex gap-2'>
            
              <button className='cursor-pointer' ><BsEye /></button>
              <button className='cursor-pointer' ><BsPencilSquare /></button>
              <button className='cursor-pointer'><BsTrash  /></button>
            </div>
          </td>
        </tr>
       
      </>
    )  
  };

  export default ViewRow;