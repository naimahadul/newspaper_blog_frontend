import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import Signup from "./components/signup/SignUp.jsx";
import Home from "../src/components/homepage/Home.jsx";
import AboutUs from "./components/homepage/AboutUs.jsx";
import ContactUs from "./components/homepage/ContactUs.jsx";
import CreateBlog from "./components/homepage/CreateBlog.jsx";


const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/createblog" element={<CreateBlog />} />


    </Routes>
  );
};

export default App;
