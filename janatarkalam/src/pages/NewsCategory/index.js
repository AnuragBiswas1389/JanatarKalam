import "./style.css";
import Video from "../../components/Video";
import Marquee from "../../components/Marquee";
import SectionHeader from "../../components/SectionHeader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import News from "../../components/News";

function NewsCategory(porps) {
  var catHeading = "";
  return (
    <div class="newsCategoryPage">
      <div class="header">
        <Header></Header>
        <Marquee></Marquee>
      </div>
      <div class="newsCategoryContainer">
        <div class=" newsResult newsCategoryLeftContainer">
          <p>আপনার খোঁজের ফলাফল</p>
          {/* ------search results container---- */}
          <div class="newsCatContent">
            <News></News>
            <News></News>
            <News></News>
            <News></News>
            <News></News>
            <News></News>
            <News></News>
            <News></News>
          </div>
          {/* latest news container */}
          <SectionHeader title="latest updates"></SectionHeader>

          <div class="readerNews  newsCatContent">
            <News></News>
            <News></News>
            <News></News>
            <News></News>
            <News></News>
            <News></News>
            <News></News>
            <News></News>
          </div>
        </div>
        <div class="newsCategoryRightContainer">
          <SectionHeader title={"videos"}></SectionHeader>
          <Video></Video>
          <Video></Video>
          <Video></Video>
          <Video></Video>
          <Video></Video>
          <Video></Video>
          <Video></Video>
          <Video></Video>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default NewsCategory;
