import Footer from "./components/footer/Footer";
import "./App.css";
import News from "./components/news/New";
import Header from "./components/header/Header";
import Signin from "./components/account/signin/Signin";
import Signup from "./components/account/signup/Singup";
import Archive from "./components/archive/Archive";
import SectionHeader from "./components/sectionHeader/SectionHeader";
import Marquee from "./components/marquee/Marquee";
import NewsUpdate from "./components/NewsUpdate";
import Video from "./components/Video";
import Slider from "./components/Slider";
import Image from "./components/Image";
import "normalize.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Marquee></Marquee>
      <SectionHeader title={"News update"}></SectionHeader>
      <NewsUpdate></NewsUpdate>
      <SectionHeader title={"latest update"}></SectionHeader>
      <News></News>
      <News></News>
      <News></News>
      <SectionHeader title={"Videos"}></SectionHeader>
      <Video></Video>
      <Video></Video>
      <Video></Video>
      <Video></Video>
      <SectionHeader title={"You may like"}></SectionHeader>
      <Image
        size={"Wide"}
        src={
          "https://janatarkalam.s3.ap-south-1.amazonaws.com/su9tdwcumzbj1gjvjwxo.jpg"
        }
      ></Image>
      <SectionHeader title={"Tender"}></SectionHeader>
      <Image
        size={"medium"}
        src={
          "https://janatarkalam.s3.ap-south-1.amazonaws.com/xp0bk2qxm8h3mwfs3vmy.jpg"
        }
      ></Image>
      <Footer></Footer>
    </div>
  );
}

export default App;
