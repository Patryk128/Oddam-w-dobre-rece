import React, { useState } from "react";
import HomeHeader from "./Home/HomeHeader";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateEmail = (email) => {
    // Simple email regex for validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = { email: "", password: "" };

    if (!validateEmail(email)) {
      newErrors.email = "Podany email jest nieprawidłowy!";
      valid = false;
    }

    if (password.length < 6) {
      newErrors.password = "Podane hasło jest za krótkie!";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Form is valid, you can perform the login action here
      console.log("Form is valid");
    }
  };

  return (
    <>
      <HomeHeader />
      <section className="login">
        <div className="login-header">
          <h2 className="login-title">Zaloguj się</h2>
          <div className="header-border"></div>
        </div>
        <div className="login-panel">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="login-input">
              <label htmlFor="password">Hasło</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={errors.password ? "input-error" : ""}
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>
          </form>
          <div className="login-nav">
            <button className="login-button login-button-register">
              <Link to="/register">Załóż konto</Link>
            </button>
            <button
              type="submit"
              className="login-button login-button-login"
              onClick={handleSubmit}
            >
              Zaloguj się
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
