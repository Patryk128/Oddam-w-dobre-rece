import React from "react";
import HomeHeader from "./Home/HomeHeader";

const Login = () => {
  return (
    <>
      <HomeHeader />
      <section className="login">
        <div className="login-header">
          <h2 className="login-title">Zaloguj się</h2>
          <div className="header-border"></div>
        </div>
        <div className="login-panel">
          <form className="login-form">
            <div className="login-input">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="login-input">
              <label htmlFor="password">Hasło</label>
              <input type="password" id="password" name="password" />
            </div>
          </form>
          <div className="login-nav">
            <button className="login-button login-button-register">
              Załóż konto
            </button>
            <button className="login-button login-button-login">
              Zaloguj się
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
