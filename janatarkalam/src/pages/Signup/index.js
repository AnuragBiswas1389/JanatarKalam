import SignupComponent from "../../components/account/Singup";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Marquee from "../../components/Marquee";

function Signup(props) {
  return (
    <>
      <Header></Header>
      <Marquee></Marquee>
      <SignupComponent></SignupComponent>
      <Footer></Footer>
    </>
  );
}

export default Signup;
