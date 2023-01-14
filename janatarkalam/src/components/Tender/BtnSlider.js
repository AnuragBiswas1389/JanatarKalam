import React from 'react';
import "../Tender/tender.css";
import Left from "../../Assets/left.png";
import Right from "../../Assets/right.png";

const BtnSlider = ({direction, moveSlide}) => {
  return (
    <button onClick={moveSlide} className={direction === "next"?'btnSlide next':
    "btnSlide Prev"}>
      <img src={direction === "next"? Right : Left} alt=""/>
    </button>
  )
}

export default BtnSlider