import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { BlogProvider } from "./context/BlogContext";
import Login from "./components/login/Login";
import Signup from "./components/signup/SignUp";
import Home from "./components/homepage/Home";
import AboutUs from "./components/homepage/AboutUs";
import ContactUs from "./components/homepage/ContactUs";
import FullBlogDisplay from "./components/blog/FullBlogDisplay";

function App() {
  return (
    <AuthProvider>
      <BlogProvider>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/full-blog/:id" element={<FullBlogDisplay />} />
        </Routes>
      </BlogProvider>
    </AuthProvider>
  );
}

export default App;
