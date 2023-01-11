import style from "./Signin.module.css";

function LoginComponent() {
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
            <input type="text" placeholder="user name"></input>
          </div>
          <div className={style.input}>
            <p>Password</p>
            <input type="text" placeholder="password"></input>
          </div>
          <div className={style.btnContainer}>
            <button action="submit">Ok</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default LoginComponent;
