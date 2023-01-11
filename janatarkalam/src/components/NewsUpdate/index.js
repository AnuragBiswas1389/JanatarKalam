import "./style.css";

function NewsUpdate(props) {
  return (
    <>
      <div className="newsUpdateContainer">
        <div className="newsUpdateImage">
          <img
            src="https://janatarkalam.s3.ap-south-1.amazonaws.com/248a5a91-1a5d-496e-a21a-f042efa5c7ee"
            alt="newsImage"
          ></img>
        </div>
        <div className="newsUpdateTextContainer">
          <div className="newsUpdateHeadline">
            {props.headLine}
            পৃথক তিপরাল্যান্ডের দাবিতে দিল্লি..
          </div>
          <div className="newsUpdateDivider"></div>
          <div className="newsUpdateText">
            {props.text}
            জনতার কলম ত্রিপুরা আগরতলা প্রতিনিধি :- রাজ্য বিধানসভা নির্বাচনের
            মুখে পৃথক পৃথক তিপরাল্যান্ডের দাবিতে দিল্লিতে ধরনায় বসবে তিপরা মথ..
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsUpdate;
