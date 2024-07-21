import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
const HomeHeader = () => {
  return (
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
  );
};

export default HomeHeader;
