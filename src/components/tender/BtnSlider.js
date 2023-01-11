import React from 'react';
import "../tender/tender.css";
import Left from "../../assets/left.png";
import Right from "../../assets/right.png";

const BtnSlider = ({direction, moveSlide}) => {
  return (
    <button onClick={moveSlide} className={direction === "next"?'btnSlide next':
    "btnSlide Prev"}>
      <img src={direction === "next"? Right : Left} alt=""/>
    </button>
  )
}

export default BtnSlider