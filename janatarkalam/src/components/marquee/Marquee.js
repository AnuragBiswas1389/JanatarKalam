import style from './Marquee.module.css'

function Marquee(props) {
  return (
    <>
      <div className={style.marqueeContainer}>
        <marquee className={style.marquee}>
          <p>{props.text}</p>
        </marquee>
      </div>
    </>
  );
}

export default Marquee;
