import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

const HomeHeader = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    isLoggedIn: false,
    email: "",
  });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user")) || {};
    if (userData.isLoggedIn) {
      setUser(userData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({
      isLoggedIn: false,
      email: "",
    });
    navigate("/logout");
  };

  return (
    <header className="header-header">
      {user.isLoggedIn ? (
        <nav className="logged-header-nav">
          <div className="logged-header-nav">
            <h2>Cześć, {user.email}</h2>
            <button className="logged-header-button">
              <Link to="/main">Oddaj rzeczy</Link>
            </button>
            <button className="logged-header-button" onClick={handleLogout}>
              Wyloguj
            </button>
          </div>
        </nav>
      ) : (
        <nav className="user-log">
          <ul className="header-nav-nav">
            <li>
              <Link to="/login">Zaloguj</Link>
            </li>
            <li>
              <Link to="/register">Załóż konto</Link>
            </li>
          </ul>
        </nav>
      )}
      <nav className="header-nav">
        <ul className="header-nav-nav">
          <li>
            <Scroll to="start" smooth={true}>
              <Link to="/home">Start</Link>
            </Scroll>
          </li>
          <li>
            <Scroll to="about" smooth={true}>
              O co chodzi?
            </Scroll>
          </li>
          <li>
            <Scroll to="about-us" smooth={true}>
              O nas
            </Scroll>
          </li>
          <li>
            <Scroll to="organizations" smooth={true}>
              Fundacja i organizacje
            </Scroll>
          </li>
          <li>
            <Scroll to="contact" smooth={true}>
              Kontakt
            </Scroll>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HomeHeader;
