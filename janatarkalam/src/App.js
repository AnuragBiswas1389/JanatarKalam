import Footer from "./components/Footer";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Archive from "./pages/Archive";
import Reader from "./pages/Reader";
import NewsCategory from "./pages/NewsCategory";
import Router from "./pages/Router/Router";
import "normalize.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router></Router>
    </div>
  );
}

export default App;
