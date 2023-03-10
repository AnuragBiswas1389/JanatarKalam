import ReactDOM from "react-dom";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import "./style.css";

function Slider(props) {
  const childArray = React.Children.toArray(props.children);
  var cls = props.type+" sliderContainer";
  
  return (
    <div>
      <ScrollContainer horizontal={true} className={cls}>
        {childArray.map(function (ele, ind) {
          return <div class="sliderElement">{ele}</div>;
        })}
      </ScrollContainer>
    </div>
  );
}

export default Slider;
