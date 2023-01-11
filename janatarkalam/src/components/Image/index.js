import "./style.css";

function Ad(props) {
  var size = 'image'+props.size+ " "+"imageContainer";
  return (
    <>

      <div class={size}>
        <img
          src={props.src}
          alt="image"
        ></img>
      </div>
    </>
  );
}

export default Ad;
