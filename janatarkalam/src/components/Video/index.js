import "./style.css";

function Video(props) {
  const videoId = "2k8c0fyVAZY";
  function handelClick() {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  }

  return (
    <>
      <div class="videoContainer" onClick={handelClick}>
        <a href={props.Videolink}>
          <div class="videoImage">
            <img
              src="http://img.youtube.com/vi/2k8c0fyVAZY/maxresdefault.jpg"
              alt="videoImage"
            ></img>
          </div>
        </a>
        <div class="videoPlayBtn">
          <img src="icon/play.png" alt="videoPlayBtn"></img>
        </div>
      </div>
    </>
  );
}

export default Video;
