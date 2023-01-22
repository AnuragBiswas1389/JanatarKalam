import { BrowserRouter, Routes, Route } from "react-router-dom";
import Archive from "../Archive";
import Home from "../Home";
import Login from "../Login";
import NewsCategory from "../NewsCategory";
import Reader from "../Reader";
import Signup from "../Signup";

function Router(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/NewsCategort" element={<NewsCategory />} />
        <Route path="/Reader" element={<Reader />} />
        <Route path="/Archive" element={<Archive />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
