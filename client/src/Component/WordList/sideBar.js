import React, { useState, useEffect} from "react";

function SideBar () {

    const apiUrl = process.env.REACT_APP_API_URL + 'get_classifies';

    const [classifies, setClassifies] = useState([])

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
 
    return (
        <div className="bg-blue-300 h-screen w-40 p-5">
            <ul>
                {classifies.map((item) => (
                    <li key={item._id} className="text-left">
                    {item.name}
                    </li>
                ))}
               
            </ul>
                    
        </div>
    )

}

export default SideBar;