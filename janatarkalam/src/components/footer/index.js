import React from 'react';
import style from './Footer.module.css'

function Footer (){
    return (
      <>
        <div className={style.footerContainer}>
          <div className={style.footerPrimaryContainer}>

            {/*lOGO CONTAINER*/}
            <div className={style.logoContainer}>
              <div className={style.footerPrimaryLogo}>
                <img src="icon/janatar_kolom_logo.png" alt="janatarKolomLogo" />
              </div>
              <div className={style.tagLine}>জনতার ভাষায়, জনতার সাথে |</div>
            </div>

            {/* links container */}
            <div className={style.footerPrimaryLinks}>
              <div className={style.linkContainer}>
                <div className={style.linkHeading}>Important Links</div>
                <div className={style.link}>Privacy Policy</div>
                <div className={style.link}>Legal Disclaimer</div>
              </div>
            </div>

            {/* contacts container */}
            <div className={style.footerPrimaryContact}>
              <div className={style.contactContainer}>
                <div className={style.contactHeading}>Send us your queries</div>

                <div className={style.link}>
                  <a href="mailto:janatarkalam20@gmail.com">
                    Email
                  </a>
                </div>

                <div className={style.link}>
                  <a href="https://www.facebook.com/janatarkalam2020/">
                    Facebook
                  </a>
                </div>
              </div>
            </div>

          </div>
          {/* footer secondart container */}
          <div className={style.footerSecondaryContainer}>
            <p>mages published in the Image Gallery are subjected to Copyright of
            the photographer under The Copyright Act, 1957 of the Republic of
            India. Any unauthorized use of any image is prohibited.</p>
          </div>
          {/* footer end section */}
          <div className={style.footerEndContainer}>
            <p> © Copyright, 2022. Janatarkalam, India. All Rights Reserved.
            Developed and Maintained by 
            <a href="http://www.chevichef.com/"> Chevichef Private Limited.</a></p>
          </div>
        </div>
      </>
    );
}

export default Footer;