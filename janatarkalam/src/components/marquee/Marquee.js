import style from './Marquee.module.css'

function Marquee(props) {
  return (
    <>
      <div className={style.marqueeContainer}>
        <marquee className={style.marquee}>
          <p>{props.text}Hello this is our creation!</p>
        </marquee>
      </div>
    </>
  );
}

export default Marquee;
