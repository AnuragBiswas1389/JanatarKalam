import "./App.css";
import Router from "./pages/Router/Router";
import "normalize.css";
import { ColorRing } from "react-loader-spinner";



function App() {

  const ringLoader =<ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
  />;

  const loadComponent = (
    <div class="appLoader">
      <div class="appLoaderComp">
        <div>{ringLoader}</div>
        <div class="appLoaderText">Loading...</div>
      </div>
    </div>
  );


  return (
    <div className="App">
      <Router></Router>
    </div>
  );
}

export default App;
