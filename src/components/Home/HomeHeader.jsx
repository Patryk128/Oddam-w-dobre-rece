import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
const HomeHeader = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header-header");
      if (window.scrollY > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header conteiner">
      <header className="header-header">
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
        <nav className="header-nav">
          <ul className="header-nav-nav">
            <li>
              <Scroll to="start" smooth={true}>
                Start
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
              <button className="header-btn">
                <Link to="/login">ODDAJ RZECZY</Link>
              </button>
              <button className="header-btn">
                <Link to="/login">ZORGANIZUJ ZBIÓRKĘ</Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeHeader;
