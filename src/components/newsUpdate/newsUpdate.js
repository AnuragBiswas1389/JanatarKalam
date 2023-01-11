import React from "react";
import "../newsUpdate/newsUpdate.module.css";
import Image from "../../nee.jpg";
import style from "../newsUpdate/newsUpdate.module.css";

function newsUpdate() {
    return(
        <div className={style.newsUpdate}>
          <img className={style.image}  src={Image} alt=""/>
          <div className={style.write}>
            <h1>shdjs</h1>
            <p>xzgczxhcjzmxgfdasuhdjasjgc  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus voluptatibus dolorem aliquam! bikm</p>
          </div>
         </div>

    );

}
export default newsUpdate