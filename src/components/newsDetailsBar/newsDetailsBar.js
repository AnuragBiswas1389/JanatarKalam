import React from 'react';
import P from "../../ne.jpg";
import style from "../newsDetailsBar/newsDetailsBar.module.css";

const newsDetailsBar = () => {
  return (
    <div id={style.bar}>
        <div className={style.first}>
            <img src={P} alt=""/>


        </div>
        <div className={style.second}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollirepellendus quos explicabo.
        </div>
    </div>
  )
}

export default newsDetailsBar