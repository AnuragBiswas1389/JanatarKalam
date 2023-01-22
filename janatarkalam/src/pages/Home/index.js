import "./home.css";
import Header from "../../components/Header";
import Marquee from "../../components/Marquee";
import NewsUpdate from "../../components/NewsUpdate";
import News from "../../components/News";
import SectionHeader from "../../components/SectionHeader";
import Video from "../../components/Video";
import Slider from "../../components/Slider";
import Footer from "../../components/Footer";
import Image from "../../components/Image";
import Carousel from "../../components/Carousel";

function Home(props) {
  return (
    <div class="containerHome">
      <div class="header">
        <Header></Header>
        <Marquee></Marquee>
      </div>

      <div class="topContainer">
        <div class="homeNewsContainer">
          <SectionHeader title={"Current updates"}></SectionHeader>
          <div class="homeCurrentUpdate">
            <NewsUpdate></NewsUpdate>
            <div class="homeCurrentUpdateNews" >
              <News></News>
              <News></News>
              <News></News>
            </div>
          </div>
          <div class="newslatestContainer">
            <div>
              <SectionHeader title={"Current News"}></SectionHeader>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
            </div>
            <div>
              <SectionHeader title={"Current News"}></SectionHeader>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
            </div>
          </div>
        </div>
        <div class="homeVideoContainer">
          <SectionHeader title="latest videos"></SectionHeader>
          <div class="homeVideoContent">
            <Video></Video>
            <Video></Video>
            <Video></Video>
            <Video></Video>
            <Video></Video>
            <Video></Video>
          </div>
        </div>
      </div>

      {/* -----------Tender section here------------------ */}
      <div class="midContainer">
        <div class="tenderContainer">
          <div class="tenderContents">
            <SectionHeader title={"Latest tender"}></SectionHeader>
            <Slider>
              <Image
                size={"Tender"}
                src="https://janatarkalam.s3.ap-south-1.amazonaws.com/cngohemwuuv6jzoxkpva.jpg"
              ></Image>
              <Image
                size={"Tender"}
                src="https://janatarkalam.s3.ap-south-1.amazonaws.com/cngohemwuuv6jzoxkpva.jpg"
              ></Image>
              <Image
                size={"Tender"}
                src="https://janatarkalam.s3.ap-south-1.amazonaws.com/cngohemwuuv6jzoxkpva.jpg"
              ></Image>
              <Image
                size={"Tender"}
                src="https://janatarkalam.s3.ap-south-1.amazonaws.com/cngohemwuuv6jzoxkpva.jpg"
              ></Image>
              <Image
                size={"Tender"}
                src="https://janatarkalam.s3.ap-south-1.amazonaws.com/cngohemwuuv6jzoxkpva.jpg"
              ></Image>
              <Image
                size={"Tender"}
                src="https://janatarkalam.s3.ap-south-1.amazonaws.com/cngohemwuuv6jzoxkpva.jpg"
              ></Image>
              <Image
                size={"Tender"}
                src="https://janatarkalam.s3.ap-south-1.amazonaws.com/cngohemwuuv6jzoxkpva.jpg"
              ></Image>
              <Image
                size={"Tender"}
                src="https://janatarkalam.s3.ap-south-1.amazonaws.com/cngohemwuuv6jzoxkpva.jpg"
              ></Image>
              <Image
                size={"Tender"}
                src="https://janatarkalam.s3.ap-south-1.amazonaws.com/cngohemwuuv6jzoxkpva.jpg"
              ></Image>
              <Image
                size={"Tender"}
                src="https://janatarkalam.s3.ap-south-1.amazonaws.com/cngohemwuuv6jzoxkpva.jpg"
              ></Image>
            </Slider>
          </div>
        </div>
        {/* -------------------news top section--------------------- */}
        <div class={"newsByCatContainer"}>
          <div class="newsCatTop">
            <div class={"newsCat"}>
              <SectionHeader title={"country"}></SectionHeader>
              <Carousel>
                <News size={"small"}></News>
                <News size={"small"}></News>
                <News size="small"></News>
                <News size="small"></News>
                <News size="small"></News>
                <News size="small"></News>
                <News size="small"></News>
                <News size="small"></News>
                <News size="small"></News>
                <News size="small"></News>
              </Carousel>
            </div>
          </div>

          {/* -----------------bottom carousel container---------------------- */}
          <div class={"newsCat"}>
            <SectionHeader title={"Sports"}></SectionHeader>
            <Carousel>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
            </Carousel>
          </div>
          <div class={"newsCat"}>
            <SectionHeader title={"Sports"}></SectionHeader>
            <Carousel>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
            </Carousel>
          </div>
        </div>
      </div>
      <div class="endContainer">
        <div class="endNewsContainer">
          <div class={"newsCat"}>
            <SectionHeader title={"Sports"}></SectionHeader>
            <Carousel>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
            </Carousel>
          </div>
          {/* -------adContainer */}
          <div class="adContainer">
            <SectionHeader title={"You may like"}></SectionHeader>
            <Image
              src={
                "https://janatarkalam.s3.ap-south-1.amazonaws.com/msvfjrnow7sthaxbohz3.jpg"
              }
              size={"Adv"}
            ></Image>
          </div>
          <div class={"newsCat"}>
            <SectionHeader title={"Sports"}></SectionHeader>
            <Carousel>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
              <News></News>
            </Carousel>
          </div>
        </div>
        <div>
          <div class="adTenderContainer">
            <SectionHeader title={"Latest tender"}></SectionHeader>
            <Slider>
              <Image
                size={"Tender"}
                src="https://janatarkalam.s3.ap-south-1.amazonaws.com/cngohemwuuv6jzoxkpva.jpg"
              ></Image>
              <Image
                size={"Tender"}
                src="https://janatarkalam.s3.ap-south-1.amazonaws.com/cngohemwuuv6jzoxkpva.jpg"
              ></Image>
              <Image
                size={"Tender"}
                src="https://janatarkalam.s3.ap-south-1.amazonaws.com/cngohemwuuv6jzoxkpva.jpg"
              ></Image>
              <Image
                size={"Tender"}
                src="https://janatarkalam.s3.ap-south-1.amazonaws.com/cngohemwuuv6jzoxkpva.jpg"
              ></Image>
              <Image
                size={"Tender"}
                src="https://janatarkalam.s3.ap-south-1.amazonaws.com/cngohemwuuv6jzoxkpva.jpg"
              ></Image>
              <Image
                size={"Tender"}
                src="https://janatarkalam.s3.ap-south-1.amazonaws.com/cngohemwuuv6jzoxkpva.jpg"
              ></Image>
              <Image
                size={"Tender"}
                src="https://janatarkalam.s3.ap-south-1.amazonaws.com/cngohemwuuv6jzoxkpva.jpg"
              ></Image>
              <Image
                size={"Tender"}
                src="https://janatarkalam.s3.ap-south-1.amazonaws.com/cngohemwuuv6jzoxkpva.jpg"
              ></Image>
            </Slider>
          </div>
        </div>
      </div>
      {/* -------adContainer */}
      <div class="adContainerEnd">
        <SectionHeader title={"You may like"}></SectionHeader>
        <Image
          src={
            "https://janatarkalam.s3.ap-south-1.amazonaws.com/3419f709-5f50-48c2-bc10-4a471934757c"
          }
          size={"Adv"}
        ></Image>
      </div>

      <div class={"footer"}>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
