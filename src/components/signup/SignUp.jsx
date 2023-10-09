import { useState } from "react";
import Username from "../common/Username";
import Email from "../common/Email";
import Password from "../common/Password";
import ConfirmPassword from "../common/ConfirmPasword.jsx";
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Successfully registered!");
  };

  return (
    <section className="div1">
      <div className="div2">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="heading">Create an account</h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <Username value={username} onChange={handleUsernameChange} />
            <Email value={email} onChange={handleEmailChange} />
            <Password value={password} onChange={handlePasswordChange} />
            <ConfirmPassword
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <button type="submit" className="btn-primary">
              Create an account
            </button>
            <p className="para">
              Already have an account?{" "}
              <a href="/login" className="ah">
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
