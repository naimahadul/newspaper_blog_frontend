import { useState } from "react";
import Username from "../common/Username.jsx";
import Password from "../common/Password.jsx";
import Header from "../homepage/Header.jsx";
import Footer from "../homepage/Footer.jsx";
import "./login.css";
import axios from "axios";
import { useAuth } from "../../context/AuthContext.jsx";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    const data = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        data
      );
      login(response.data.data);
      localStorage.setItem("token", response.data.data);

      if (response.status === 201) {
        alert("Login Successful ");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      alert("An error occurred while logging in. Please try again later.");
      console.error(error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="div1-login">
        <div className="div2-login">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="heading-login">Sign in to your account</h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <Username value={username} onChange={handleUsernameChange} />
              <Password value={password} onChange={handlePasswordChange} />
              <button type="submit" className="btn-login bg-blue-600">
                Sign in
              </button>
              <p className="para-login">
                Dont have an account yet?{" "}
                <a href="/signup" className="div3-login">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Login;
