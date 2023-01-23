import React from "react";
import style from "./News.module.css";
import loadImage from "../../Assets/loadImage.jpg";
import { useNavigate } from "react-router-dom";

function News(props) {
  var cls = " ";
  var size = props.size;
  let navigate = useNavigate();

  function handelReader() {
    navigate("/Reader",{state:{ newsId: "100" }});
  }

  const src =
    "https://janatarkalam.s3.ap-south-1.amazonaws.com/248a5a91-1a5d-496e-a21a-f042efa5c7ee";

  return (
    <>
      <div
        className={`${props.size} ${style.newsContainer}`}
        onClick={handelReader}
      >
        <div className={style.newsImage}>
          <img src={loadImage} alt="newsImage"></img>
        </div>

        <div className={style.newsInfoContainer}>
          <div className={style.newsHeading}>
            পৃথক তিপরাল্যান্ডের দাবিতে দিল্লিতে ধরনায় বসবে তিপরা মথা : প্রদ্যুৎ
          </div>
          <div className={style.newsDetails}>Jan 1 2023, 10am</div>
        </div>
      </div>
    </>
  );
}

export default News;
