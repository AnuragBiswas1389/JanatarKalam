import "./style.css";
import arrowRight from "../../Assets/right.png";
import arrowLeft from "../../Assets/left.png";
import React, { Component, useState } from "react";

function Slider(props) {
  const childArray = React.Children.toArray(props.children);
  const [ind, setInd] = useState(0);

  function left() {
    if (ind == 0) {
      setInd(childArray.length);
      console.log(ind);
    } else {
      setInd(ind - 1);
      console.log(ind);
    }
  }
  function right() {
    if (ind == childArray.length) {
      setInd(0);
      console.log(ind);
    } else {
      setInd(ind + 1);
      console.log(ind);
    }
  }

  console.log(screen.width);
  if (window.innerWidth > 1013) {
    console.log("desktop screen...." + window.innerWidth);
  } else {
    console.log("slider acitve" + window.innerWidth);
  }
  return (
    <>
      <div class="sliderContainer">
        {childArray[ind]}
        <div class="iconContainer">
          <div class="sliderIconLeft" onClick={left}>
            <img src={arrowLeft}></img>
          </div>
          <div class="sliderIconRight" onClick={right}>
            <img src={arrowRight}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
