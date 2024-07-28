import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomeMain = () => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    email: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user")) || {};
    if (userData.isLoggedIn) {
      setUser(userData);
    }
  }, []);

  const handleGiveAwayClick = () => {
    if (user.isLoggedIn) {
      navigate("/main");
    } else {
      navigate("/login");
    }
  };

  const handleOrganizeClick = () => {
    if (user.isLoggedIn) {
      navigate("/main"); // Zakładając, że jest to ta sama strona; zmień, jeśli potrzebna inna strona
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="header container">
      <main>
        <div className="header-image"></div>
        <div className="header-main">
          <div className="header-content">
            <h2 className="header-title">
              Zacznij pomagać!
              <br />
              Oddaj niechciane rzeczy w zaufane ręce
            </h2>
            <div className="header-border"></div>
            <div className="header-btns">
              <button className="header-btn" onClick={handleGiveAwayClick}>
                ODDAJ RZECZY
              </button>
              <button className="header-btn" onClick={handleOrganizeClick}>
                ZORGANIZUJ ZBIÓRKĘ
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeMain;
