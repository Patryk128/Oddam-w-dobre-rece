import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AuthHeader from "./AuthHeader";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("user");
  }, []);

  return (
    <>
      <AuthHeader />
      <div className="logout">
        <div className="logout__container">
          <h2 className="logout__title">
            Wylogowanie nastąpiło
            <br />
            pomyślnie!
          </h2>
          <div className="decorative-border"></div>
          <button className="logout__button-home">
            <Link to="/">Strona główna</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Logout;
