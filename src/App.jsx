import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import Login from "./components/login/Login.jsx";
import Signup from "./components/signup/SignUp.jsx";
import Home from "/src/components/homepage/Home.jsx";
import AboutUs from "./components/homepage/AboutUs.jsx";
import ContactUs from "./components/homepage/ContactUs.jsx";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
