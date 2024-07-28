import React, { useEffect } from "react";
import HomeHeader from "./Home/HomeHeader";
import { Link } from "react-router-dom";

const Logout = () => {
  useEffect(() => {
    // Clear user data on logout
    localStorage.removeItem("user");
  }, []);

  return (
    <>
      <HomeHeader />
      <div className="logout">
        <div className="logout-container">
          <h2 className="logout-title">
            Wylogowanie nastąpiło
            <br />
            pomyślnie!
          </h2>
          <div className="header-border"></div>
          <button className="btn-home">
            <Link to="/">Strona główna</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Logout;
