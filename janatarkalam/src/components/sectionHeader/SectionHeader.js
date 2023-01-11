import style from "./SectionHeader.module.css";

function SectionHeader(props) {
  return (
    <>
      <div className={style.headerContainer}>
        <div className={style.headerTopSection}>
          <p>{props.title}</p>
        </div>
        <div className={style.headerBottomSection}></div>
      </div>
    </>
  );
}


export default SectionHeader;
