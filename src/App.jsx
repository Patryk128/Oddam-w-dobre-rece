import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Auth/Login.jsx";
import Register from "./components/Auth/Register.jsx";
import Logout from "./components/Auth/Logout.jsx";
import HomeLoggedIn from "./components/LoggedIn/HomeLoggedIn.jsx";
import Error404 from "./components/Home/Error404.jsx";
import ToGiveBack from "./components/LoggedIn/ToGiveBack.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/main" element={<HomeLoggedIn />} />
        <Route path="/to-give-back" element={<ToGiveBack />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;
