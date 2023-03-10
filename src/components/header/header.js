import style from "../Header/Header.module.css";

function Header() {
  return (
    <>
      <div className={style.headerContainer}>
        <div className={style.HeadContainer}>
          {/*------menu btn for mobile --should hide in desktop mode-- */}
          <div className={style.headBtnConainer}>
            <img src="https://www.janatarkalam.com/static/janatarkalam/images/janatar_kolom.png"></img>
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
              <img className={style.headUser} src="https://amritmahotsav.nic.in/writereaddata/Portal/Images/harghar-tiranga-logo-Eng-Blue.png"></img>
            </div>
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
        <div className={style.mobileNavContainer}>
          <div className={style.mobileNavLinks}>
            <a href="">link</a>
          </div>
          <div className={style.mobileNavLinks}>
            <a href="">link</a>
          </div>
          <div className={style.mobileNavLinks}>
            <a href="">link</a>
          </div>
          <div className={style.mobileNavLinks}>
            <a href="">link</a>
          </div>
          <div className={style.mobileNavLinks}>
            <a href="">link</a>
          </div>
          <div className={style.mobileDetails}>
            <a href="">Join us / Singup</a>
          </div>
        </div>
        {/* -------nav links container for desktop----- */}
        <div className={style.desktopNavContainer}>
          <div className={style.desktopNavLinks}>
            <a href="">link</a>
          </div>
          <div className={style.desktopNavLinks}>
            <a href="">link</a>
          </div>
          <div className={style.desktopNavLinks}>
            <a href="">link</a>
          </div>
          <div className={style.desktopNavLinks}>
            <a href="">link</a>
          </div>
          <div className={style.desktopNavLinks}>
            <a href="">link</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
