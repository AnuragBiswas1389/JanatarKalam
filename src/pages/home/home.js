import React from 'react';
import Navbar from "../../Components/Header/Header";
import Marquee from "../../Components/Marquee/Marquee";
import News from "../../Components/News/News";
import NewsDetails from "../../Components/NewsDetailsBar/NewsDetailsBar";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import Tender from "../../Components/Tender/BtnSlider";
import Signin from "../../Components/Account/Signin/Signin";
import Signup from "../../Components/Account/Signup/Singup";
import Footer from "../../Components/Footer/Footer";

const home = () => {
  return (
    <div>
      <Navbar/>
      <Marquee/>
      <div>
        <News/>
        
      </div>
      <NewsDetails/>
      <SectionHeader/>
      <Tender/>
      <Signup/>
      <Signin/>
      <Footer/>





    </div>
  )
}

export default home