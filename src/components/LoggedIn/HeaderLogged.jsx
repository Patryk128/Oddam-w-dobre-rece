import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

const HeaderLogged = () => {
  const navigate = useNavigate();
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
    if (!user.isLoggedIn) {
      navigate("/logout");
    }
  }, [user.isLoggedIn, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({ isLoggedIn: false, email: "" });
    navigate("/logout");
  };
  const handleScrollHome = () => {
    window.scrollTo(0, 0); // przewinięcie na górę strony
    navigate("/home"); // przeniesienie na stronę główną
  };

  return (
    <header className={`logged-header-header ${isSticky ? "sticky" : ""}`}>
      <nav className="header-nav">
        <h2>Cześć, {user.email}</h2>
        <button
          className="header-button"
          onClick={() => {
            if (user.isLoggedIn) {
              navigate("/main");
            } else {
              navigate("/login");
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Oddaj rzeczy
        </button>
        <button className="header-button" onClick={handleLogout}>
          Wyloguj
        </button>
      </nav>
      <nav className="header-nav">
        <ul className="header-nav-nav">
          <li>
            <Link to="/home" onClick={handleScrollHome}>
              Strona główna
            </Link>
          </li>
          <li>
            <Scroll to="four-steps" smooth={true}>
              Start
            </Scroll>
          </li>
          <li>
            <Scroll to="to-give-back" smooth={true} offset={-130}>
              ZACZNIJ ODDAWAĆ
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

export default HeaderLogged;