import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import Signup from "./components/SignUp.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
