import ReactDOM from "react-dom";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import "./style.css";


function Carousel(props) {
  const childArray = React.Children.toArray(props.children);
  var cls="carouselContainer"
  return (
    <div>
      <ScrollContainer horizontal={true} className={cls}>
        {childArray.map(function (ele, ind) {
          return <div class="carouselElement">{ele}</div>;
        })}
      </ScrollContainer>
    </div>
  );
}

export default Carousel;
