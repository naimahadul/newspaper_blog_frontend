import React, { useState } from "react";
import axios from "axios";
import Username from "../common/Username";
import Email from "../common/Email";
import Password from "../common/Password";
import ConfirmPassword from "../common/ConfirmPasword.jsx";
import Header from "../homepage/Header";
import Footer from "../homepage/Footer";
import "./signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/auth/signup", {
        username,
        email,
        password,
      });
      alert("Successfully registered! User ID: " + response.data.data.username);
    } catch (error) {
      if (error.response) {
        alert("Error: " + error.response.data.data.message);
      } else if (error.request) {
        alert("Error: No response received from the server.");
      } else {
        alert("Error: " + error.message);
      }
    }
  };

  return (
    <div>
      <Header />
      <section className="div1-signup">
        <div className="div2-signup">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="heading-signup">Create an account</h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <Username value={username} onChange={handleUsernameChange} />
              <Email value={email} onChange={handleEmailChange} />
              <Password value={password} onChange={handlePasswordChange} />
              <ConfirmPassword
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <button type="submit" className="signup-btn dark:bg-green-700">
                Create an account
              </button>
              <p className="para-signup">
                Already have an account?{" "}
                <a href="/login" className="ah-signup">
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Signup;
