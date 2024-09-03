import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

const HomeFourStepsLogged = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

  return (
    <section className="logged-four-steps">
      <div className="logged-four-steps-img"></div>
      <div className="logged-four-steps-content">
        <header className="logged-header-header">
          <nav className="logged-header-nav">
            <div className="logged-header-nav">
              <h2>Cześć, {user.email}</h2>
              <button
                className="logged-header-button"
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
              <button className="logged-header-button" onClick={handleLogout}>
                Wyloguj
              </button>
            </div>
          </nav>
          <nav className="logged-header-nav">
            <ul className="logged-header-nav-nav">
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
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </nav>
        </header>

        <div className="logged-four-steps-form">
          <h2 className="logged-four-steps-title">
            Oddaj rzeczy, których już nie chcesz
            <br />
            POTRZEBUJĄCYM
          </h2>
          <div className="header-border"></div>
          <div className="logged-four-steps-description">
            Wystarczą 4 proste kroki:
          </div>
          <div className="logged-four-steps-steps">
            <div className="logged-four-steps-step">
              <span>
                1{" "}
                <p>
                  Wybierz
                  <br />
                  rzeczy
                </p>
              </span>
            </div>
            <div className="logged-four-steps-step">
              <span>
                2{" "}
                <p>
                  Spakuj je
                  <br />w worki
                </p>
              </span>
            </div>
            <div className="logged-four-steps-step">
              <span>
                3{" "}
                <p>
                  Wybierz
                  <br />
                  fundację
                </p>
              </span>
            </div>
            <div className="logged-four-steps-step">
              <span>
                4{" "}
                <p>
                  Zamów
                  <br />
                  kuriera
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFourStepsLogged;
