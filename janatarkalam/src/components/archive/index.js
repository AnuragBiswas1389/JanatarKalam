import style from "./Archive.module.css";

function Archive() {
  function submitForm(e) {
    e.preventDefault();
    alert("logging you in---");
  }

  return (
    <>
      <div className={style.container}>
        <form onSubmit={submitForm}>
          <p className={style.log}>দৈনিক খবর খোঁজার জন্য তারিখ নথিভুক্ত করুন</p>
          <div className={style.input}>
            <p>Date</p>
            <input type="date" placeholder="user name"></input>
          </div>
          <div className={style.btnContainer}>
            <button action="submit">Ok</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Archive;