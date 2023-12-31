import React, { useState, useEffect } from "react";
import PageHeader from "./wordPageHeader";
import SectionCard from "./sectionCard";
import { FaPlus } from "react-icons/fa6";
import SectionModal from "./SectionModal";



function SubjectPage() {

  const [subject, setSubject] = useState([]);
  const [sections, setSections] = useState([]);

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
        setSubjects(options);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + 'get_sections/' + subject['value']);
        const data = await response.json();
        setSections(data)
        console.log("fetching data" + data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if (subject['value']) {
      fetchData();
    }
  }, [subject]);

  const [isOpenModal, setIsOpenModal] = useState(false);
 
  return (
    <div className="flex mt-14 h-screen bg-slate-50 justify-center">
      {/* <SideBar setSubject={setSubject} /> */}
      <div className="w-2/3">
        <div className="flex justify-between p-4">
          <div className="w-full">
            <PageHeader options={subjects} setSubject={setSubject} />
            <div className="px-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              {sections.map((section) => (
                <SectionCard section={section} />
              ))}

            </div>
          </div>

        </div>
      </div>
      {isOpenModal &&
        <SectionModal options={subjects} setIsOpenModal={setIsOpenModal} subject={subject} />
      }

    </div>
  )
}

export default SubjectPage;