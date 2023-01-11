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
import Video from './components/Video'
import "normalize.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Marquee />
      <SectionHeader title={"News Updates"}></SectionHeader>
      <NewsUpdate></NewsUpdate>
      <SectionHeader title={"News Updates"}></SectionHeader>
      <News
        heading={
          "পৃথক তিপরাল্যান্ডের দাবিতে দিল্লিতে ধরনায় বসবে তিপরা মথা : প্রদ্যুৎ"
        }
        dateTime={"1 jan 2023, 10am"}
      />
      <News />
      <News />
      <Video></Video>

      <Footer />
    </div>
  );
}

export default App;
