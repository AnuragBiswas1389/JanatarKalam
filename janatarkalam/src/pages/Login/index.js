import "./style.css";
import LoginComponent from "../../components/account/Login";
import News from "../../components/News";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Marquee from "../../components/Marquee";

function Login(props) {
  return (
    <div class="loginScreen">
      <Header></Header>
      <Marquee></Marquee>
      <div class="loginContainer">
        <LoginComponent></LoginComponent>
      </div>
      <div class="bottomFooter">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Login;
