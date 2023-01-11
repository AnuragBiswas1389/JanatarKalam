// import Footer from "./components/footer/Footer";
import "./App.css";
// import News_in_focus from "../src/components/news/news";
// import Header from "./components/header/header";
// import Signin from "./components/account/signin/Signin";
// import Signup from "./components/account/signup/Singup";
// import Archive from "./components/archive/Archive";
// import SectionHeader from './components/sectionHeader/SectionHeader';
// import Marquee from './components/marquee/Marquee';
import Home from "../src/pages/home/home";

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Home/>
      {/* <Marquee></Marquee>
      <Signup></Signup>
      <Archive></Archive>
      <SectionHeader></SectionHeader>
      
      <Footer /> */}
    </div>
  );
}

export default App;
