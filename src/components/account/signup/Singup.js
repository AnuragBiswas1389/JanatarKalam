import style from "./Signup.module.css";

function Signup() {
  function submitForm(e) {
    e.preventDefault();
    alert("logging you in---");
  }

  return (
    <>
      <div className={style.container}>
        <form onSubmit={submitForm}>
          <p className={style.log}>আপনার যোগদান আমাদের অনুপ্রাণিত করে |</p>

          <div className={style.input}>
            <p>User name</p>
            <input type="text" placeholder="First name"></input>
          </div>

          <div className={style.input}>
            <p>Second name</p>
            <input type="text" placeholder="Last name"></input>
          </div>

          <div className={style.input}>
            <p>email</p>
            <input type="text" placeholder="Email"></input>
          </div>

          <div className={style.input}>
            <p>Password</p>
            <input type="text" placeholder="password"></input>
          </div>

          <div className={style.input}>
            <p>City</p>
            <input type="text" placeholder="City"></input>
          </div>

          <div className={style.btnContainer}>
            <button action="submit">Ok</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Signup;
