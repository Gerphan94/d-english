import React, {useState, useEffect} from "react";
import Select from 'react-select'

function PageHeader({ setCurSubject}) {
    // Setup subjects option for 
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    let options = [];
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + 'get_subjects');
        const data = await response.json();
        data.forEach((item) => {
          options.push({
            value: item._id['$oid'],
            label: item.name
          });
        });
        console.log(options);
        setSubjects(options);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

    const handleChange = (selectedOption) => {
        setCurSubject(selectedOption);
        console.log(selectedOption);
    }
    return (
        <div className="flex justify-between p-10	">
            <Select
                className="text-sm w-60 text-left font-normal"
                options={subjects}
                onChange={handleChange}
            />
        </div>
    )
}

export default PageHeader;