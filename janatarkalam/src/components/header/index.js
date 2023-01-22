import style from "./Header.module.css";
import menuIcon from "../../Assets/menu.png";
import { useState } from "react";

function Header() {

  const[menu, setMenu]=useState(false);

  function showMenu(){
    setMenu(!menu);
  }


  return (
    <>
      <div className={style.headerContainer}>
        <div className={style.HeadContainer}>
          {/*------menu btn for mobile --should hide in desktop mode-- */}
          <div className={style.headBtnConainer} onClick={showMenu}>
            <img src={menuIcon}></img>
          </div>
          {/*--------dateWeather--------*/}
          <div className={style.headInfoConainer}>
            10.12am
            <div className={style.infoBar}></div>
            Raining
          </div>
          {/* ----links container------ */}
          <div className={style.headLinksContainer}>
            <div>
              <a href="https://www.janatarkalam.com/">
                <img
                  className={style.headLogo}
                  src="icon/janatar_kolom_logo_mini.png"
                ></img>
              </a>
            </div>
          </div>
        </div>
        {/* -------nav links container for mobile----- */}
        <div
          className={` ${(menu? style.mobileNavContainerVisible : style.mobileNavContainerInvisible)}`}
        >
          <div className={style.mobileNavLinks}>
            <a href="">অপরাধ</a>
          </div>
          <div className={style.mobileNavLinks}>
            <a href="">খেলা</a>
          </div>
          <div className={style.mobileNavLinks}>
            <a href="">রাজ্য</a>
          </div>
          <div className={style.mobileNavLinks}>
            <a href="">দেশ</a>
          </div>
          <div className={style.mobileNavLinks}>
            <a href="">বিশ্ব</a>
          </div>
          <div className={style.mobileDetails}>
            <a href="">Join us / Singup</a>
          </div>
        </div>
        {/* -------nav links container for desktop----- */}
        <div className={style.desktopNavContainer}>
          <div className={style.desktopNavLinks}>
            <a href="">অপরাধ</a>
          </div>
          <div className={style.desktopNavLinks}>
            <a href="">খেলা</a>
          </div>
          <div className={style.desktopNavLinks}>
            <a href="">রাজ্য</a>
          </div>
          <div className={style.desktopNavLinks}>
            <a href="">দেশ</a>
          </div>
          <div className={style.desktopNavLinks}>
            <a href="">বিশ্ব</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
