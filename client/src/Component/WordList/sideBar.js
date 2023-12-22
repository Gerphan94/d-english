import React, { useState, useEffect } from "react";

function SideBar( { setClassify} ) {
  const apiUrl = process.env.REACT_APP_API_URL + 'get_classifies';

  const [classifies, setClassifies] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setClassifies(data)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [apiUrl]);

  const handleClick = (id, name) => {
    console.log("click " + id)
    setClassify(
      {
        'id': id,
        'name': name
      });
  }


  return (
    <div className="bg-blue-300 h-screen w-60 pt-5">
      <ul>
        {classifies.map((item) => (
          <li 
            key={item._id['$oid']} 
            className="text-left cursor-pointer w-full hover:bg-blue-600 hover:text-white"
            onClick={() => handleClick(item._id['$oid'], item.name)}
            >
            <div className="p-2">
            {item.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar;