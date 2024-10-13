import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [user, setUser] = useState(() => {
    const userData = JSON.parse(localStorage.getItem("user")) || {};
    return {
      isLoggedIn: userData.isLoggedIn || false,
      email: userData.email || "",
    };
  });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData && !userData.isLoggedIn) {
      navigate("/logout");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({ isLoggedIn: false, email: "" });
    navigate("/logout");
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const renderButtons = () => {
    if (location.pathname === "/login") {
      return (
        <>
          <button className="header-logged__button" onClick={handleHome}>
            Strona główna
          </button>
          <button className="header-logged__button" onClick={handleRegister}>
            Zarejestruj
          </button>
        </>
      );
    } else if (location.pathname === "/register") {
      return (
        <>
          <button className="header-logged__button" onClick={handleHome}>
            Strona główna
          </button>
          <button className="header-logged__button" onClick={handleLogin}>
            Zaloguj
          </button>
        </>
      );
    } else if (location.pathname === "/logout") {
      return (
        <>
          <button className="header-logged__button" onClick={handleHome}>
            Strona główna
          </button>
          <button className="header-logged__button" onClick={handleLogin}>
            Zaloguj
          </button>
          <button className="header-logged__button" onClick={handleRegister}>
            Zarejestruj
          </button>
        </>
      );
    }
  };

  return (
    <header className={`auth-header__header ${isSticky ? "sticky" : ""}`}>
      <nav className="header-logged__navigation">{renderButtons()}</nav>
    </header>
  );
};

export default AuthHeader;
