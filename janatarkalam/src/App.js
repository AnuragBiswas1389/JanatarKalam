import Footer from "./components/footer/Footer";
import "./App.css";
import News_in_focus from "../src/components/news/news";
import Header from "../src/components/header/header";
import Signin from "./components/account/signin/Signin";
import Signup from "./components/account/signup/Singup";
import Archive from "./components/archive/Archive";

function App() {
  return (
    <div className="App">
      {/* <Header />
      {/* <News_in_focus />
      <Signin /> */} 

      <Signup></Signup>
      <Archive></Archive>
      <Footer />
    </div>
  );
}

export default App;
