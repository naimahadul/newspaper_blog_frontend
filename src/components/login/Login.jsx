import { useState } from "react";
import Username from "../common/Username.jsx";
import Password from "../common/Password.jsx";
import "./login.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    alert("login Successful");
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="div1">
        <div className="div2">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="heading">Sign in to your account</h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <Username value={username} onChange={handleUsernameChange} />
              <Password value={password} onChange={handlePasswordChange} />
              <button type="submit" className="btn-primary">
                Sign in
              </button>
              <p className="para">
                Dont have an account yet?{" "}
                <a href="/signup" className="div3">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
