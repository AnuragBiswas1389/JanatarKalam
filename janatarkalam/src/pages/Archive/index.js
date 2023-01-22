import ArchiveComponent from "../../components/Archive";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Marquee from "../../components/Marquee";

function Archive(props) {
  return (
    <div class="loginScreen">
      <Header></Header>
      <Marquee></Marquee>
      <ArchiveComponent></ArchiveComponent>
      <div class="bottomFooter">
            <Footer></Footer>
      </div>
    </div>
  );
}

export default Archive;
