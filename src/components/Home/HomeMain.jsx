import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      navigate("/main#to-give-back");
    } else {
      navigate("/login");
    }
  };

  const handleOrganizeClick = () => {
    if (user.isLoggedIn) {
      navigate("/main");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="hero container">
      <div className="hero__image"></div>
      <div className="hero__main">
        <div className="hero__content">
          <h2 className="hero__title">
            Zacznij pomagać!
            <br />
            Oddaj niechciane rzeczy w zaufane ręce
          </h2>
          <div className="decorative-border"></div>
          <div className="hero__buttons">
            <button className="hero__button" onClick={handleGiveAwayClick}>
              ODDAJ
              <br />
              RZECZY
            </button>
            <button className="hero__button" onClick={handleOrganizeClick}>
              ZORGANIZUJ
              <br />
              ZBIÓRKĘ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
