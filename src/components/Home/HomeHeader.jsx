import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

const HomeHeader = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    isLoggedIn: false,
    email: "",
  });
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user")) || {};
    if (userData.isLoggedIn) {
      setUser(userData);
    }
  }, []);

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

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({
      isLoggedIn: false,
      email: "",
    });
    navigate("/logout");
  };

  const handleScrollMain = () => {
    window.scrollTo(0, 0);
    navigate("/main");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`main-header ${isSticky ? "header-logged--sticky" : ""}`}
    >
      <div className="main-header__content">
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
        </button>

        {user.isLoggedIn ? (
          <nav className={`main-header__user-nav ${menuOpen ? "open" : ""}`}>
            <div className="main-header__user-actions">
              <h2>Cześć, {user.email}</h2>
              <button
                className="main-header__button"
                onClick={handleScrollMain}
              >
                <Link to="/main">Oddaj rzeczy</Link>
              </button>
              <button className="main-header__button" onClick={handleLogout}>
                Wyloguj
              </button>
            </div>
          </nav>
        ) : (
          <nav className={`main-header__guest-nav ${menuOpen ? "open" : ""}`}>
            <ul className="main-header__auth-list">
              <li>
                <Link to="/login">Zaloguj</Link>
              </li>
              <li>
                <Link to="/register">Załóż konto</Link>
              </li>
            </ul>
          </nav>
        )}

        <nav className={`main-header__navigation ${menuOpen ? "open" : ""}`}>
          <ul className="main-header__nav-list">
            <li>
              <Scroll to="start" smooth={true} duration={500} offset={-150}>
                Start
              </Scroll>
            </li>
            <li>
              <Scroll to="about" smooth={true} duration={500} offset={-150}>
                O co chodzi?
              </Scroll>
            </li>
            <li>
              <Scroll to="about-us" smooth={true} duration={500} offset={-150}>
                O nas
              </Scroll>
            </li>
            <li>
              <Scroll
                to="organizations"
                smooth={true}
                duration={500}
                offset={-150}
              >
                Fundacja i organizacje
              </Scroll>
            </li>
            <li>
              <Scroll to="contact" smooth={true} duration={500} offset={-150}>
                Kontakt
              </Scroll>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;
