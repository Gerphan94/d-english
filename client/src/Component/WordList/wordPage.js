import React, { useState, useEffect } from "react";
import SideBar from "./sideBar";
import WordCard from "./wordCard";
import WordModal from "./wordModal";
import PageHeader from "./wordPageHeader";

function WordPage() {


  const [sections, setSections] = useState([]);
  const [classify, setClassify] = useState({ 'id': null, 'name': '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + 'get_sections/' + classify['id']);
        const data = await response.json();
        setSections(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if (classify['id']) {
      fetchData();
    }
  }, [classify]);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  }

  return (
    <div className="flex mt-14 h-screen bg-slate-50 justify-center">
      {/* <SideBar setClassify={setClassify} /> */}
      <div className="w-2/3">
        <div className="flex justify-between p-4">
          <PageHeader />
          <div className="px-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {sections.map((section) => (
              <WordCard key={section._id['$oid']} section={section} />
            ))}
          </div>
        </div>
      </div>
      {isOpenModal &&
        <WordModal setIsOpenModal={setIsOpenModal} />
      }

    </div>
  )
}

export default WordPage;