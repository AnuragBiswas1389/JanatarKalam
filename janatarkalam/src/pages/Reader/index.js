import "./style.css";
import Header from "../../components/Header";
import Marquee from "../../components/Marquee";
import NewsDetailsBar from "../../components/NewsDetailsBar";
import Video from "../../components/Video";
import SectionHeader from "../../components/SectionHeader";
import Footer from "../../components/Footer";
import News from "../../components/News";

function Reader(props) {
  const headLine =
    "ভাবী প্রজন্মের সুন্দর ও সমৃদ্ধশালী আগামীর জন্য মোদীজিই আস্থার কেন্দ্র বললেন বিপ্লব কুমার দেব";

  const imgSrc =
    "https://janatarkalam.s3.ap-south-1.amazonaws.com/62b6385a-77b2-47cd-b527-4abcf46d29d6";

  const newsText =
    "লক ডাউনের পরিপ্রেক্ষিতে রাজ্য সরকার ১০৩২৩ শিক্ষকদের জন্য এককালীন ৩৫০০০ টাকা অনুদানের ঘোষণা দিয়েছিলো , সেই ঘোষণা অনুযায়ী রাজ্য সরকার কোনো প্রকারের শর্তাবলী না জড়ালেও জড়াচ্ছে শিক্ষা ভবনের অধিকর্তারা এমনটাই অভিযোগ ১০৩২৩ এডহক পে শিক্ষক কর্মচারী সংগঠনের । মঙ্গলবার ১০৩২৩ এডহক পে শিক্ষক কর্মচারী সংগঠন ৪ দফা দাবির ভিত্তিতে রাজধানীর শিক্ষাভবনে এক ডেপুটেশনে মিলিত হন । এদিন শিক্ষাভবনের শিক্ষা অধিকর্তাদের বিরুদ্ধে তীব্র ক্ষোভ প্রকাশ করেন ১০৩২৩ এডহক পে শিক্ষক কর্মচারী সংগঠন। পাশাপাশি আন্দোলন তীব্র থেকে তীব্রতর হয়ে হয়ে উঠে ফলে প্রশাসন কর্মকর্তাদের সাথে ধস্তাধস্তি লেগে যায় আন্দোলনরত শিক্ষকরা। তবে আন্দোলন তীব্রতর হতে থাকলে শিক্ষা দপ্তরের অধিকর্তা শিক্ষকদের ৩ জনের একটি প্রতিনিধি দল অধিকর্তার সাথে সাক্ষাৎ করেন কিন্তু সাক্ষাতের আলোচনা বিষয়বস্তু  জানা যায়নি ।  এই মুহূর্তে এরা কষ্টে আছেন ঠিকই কিন্তু সমাজের মেরুদন্ড হয়ে এই মহামারীর সময়ে এইভাবে জড়ো হয়ে সামাজিক দূরত্বকে বৃদ্ধাঙ্গুল দেখিয়ে আন্দোলনে সামিল হওয়াটা খুবই নিন্দনীয় ব্যাপার।";

  return (
    <div class="readerContainer">
      <div class="header">
        <Header></Header>
        <Marquee></Marquee>
      </div>

      <div class="readerTopContainer">
        <div class="readerLeftContainer">
          <div class="readerImgContainer">
            <img src={imgSrc}></img>
          </div>
          <div class="readerHeadline">{headLine}</div>
          <div class="readerNewsDetails">
            <NewsDetailsBar
              views={"100"}
              dateTime={"1 jan, 10am"}
            ></NewsDetailsBar>
          </div>
          <div class="readerNewsText">{newsText}</div>
          <div class="readerVideoContainer">
          </div>
        </div>
        <div class="readerRightContainer">
          <div class="readerRightNews">
            <SectionHeader title={"Latest News"}></SectionHeader>
            <News></News>
            <News></News>
            <News></News>
            <News></News>
            <News></News>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Reader;
