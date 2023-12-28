import React, { useState } from "react";
import './FlashCard.css'; // Import the CSS file for styling

function FlashCard({ word }) {
    const eng = word.english;
    let vie = '';
    word.vietnamese.forEach(element => {
        vie = vie + element.define + '\n';
    });
    const [side, setSide] = useState();

  function handleClick() {
    console.log("clicked!");
    setSide(!side);
    console.log(side);
  }
  return (
    <div className={`card ${side ? "side" : ""}`} onClick={handleClick}>
      
      {/* {side ? card.fields.side1 : card.fields.side2} */}
      <div className="front">{eng}</div>
      <div className="back">{vie}</div>
    </div>
  );
}

export default FlashCard;
