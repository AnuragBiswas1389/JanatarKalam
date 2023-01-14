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

function Home(props) {
  return (
    <div class="Container home">
      <div class="header">
        <Header></Header>
        <Marquee></Marquee>
      </div>

      <div class="topContainer">
        <div class="newsContainer">
          <SectionHeader title={"Current updates"}></SectionHeader>
          <NewsUpdate></NewsUpdate>
          <SectionHeader title={"Current News"}></SectionHeader>
          <News></News>
          <News></News>
          <News></News>
          <News></News>
        </div>
        {/* ----VideoContainer------ */}
        <div class="video">
          <SectionHeader title={"Latest videos"}></SectionHeader>
          <Video></Video>
          <Video></Video>
          <Video></Video>
          <Video></Video>
        </div>
      </div>
      <div class="ad">
        <SectionHeader title={"You may like"}></SectionHeader>
        <Slider>
          <Image
            src={
              "https://janatarkalam.s3.ap-south-1.amazonaws.com/su9tdwcumzbj1gjvjwxo.jpg"
            }
            size={""}
          ></Image>
        </Slider>
      </div>
      <div class="tender">
        <SectionHeader title={"Tender"}></SectionHeader>
        <Image
          src={
            "https://janatarkalam.s3.ap-south-1.amazonaws.com/su9tdwcumzbj1gjvjwxo.jpg"
          }
          size={"Wide"}
        ></Image>
      </div>
      <div class={"newsByCatContainer"}>
        <div class={"newsCat"}>
          <SectionHeader title={"World"}></SectionHeader>
          <div class="newsCatContent">
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
            <Slider></Slider>
          </div>
        </div>
        <div class={"newsCat"}>
          <SectionHeader title={"country"}></SectionHeader>
          <News></News>
          <News></News>
          <News></News>
          <News></News>
        </div>
        <div class={"newsCat"}>
          <SectionHeader title={"Sports"}></SectionHeader>
          <News></News>
          <News></News>
          <News></News>
          <News></News>
        </div>{" "}
        <div class={"newsCat"}>
          <SectionHeader title={"crime"}></SectionHeader>
          <News></News>
          <News></News>
          <News></News>
          <News></News>
        </div>
      </div>
      <div class={"footer"}>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
