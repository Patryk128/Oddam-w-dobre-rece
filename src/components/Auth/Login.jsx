import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import AuthHeader from "./AuthHeader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    email: "",
    password: "",
  });
  const [generalError, setGeneralError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newValidationErrors = { email: "", password: "" };

    if (!validateEmail(email)) {
      newValidationErrors.email = "Podany email jest nieprawidłowy!";
      valid = false;
    }

    if (password.length < 6) {
      newValidationErrors.password = "Podane hasło jest za krótkie!";
      valid = false;
    }

    setValidationErrors(newValidationErrors);

    if (valid) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const userData = {
            isLoggedIn: true,
            email: user.email,
          };
          localStorage.setItem("user", JSON.stringify(userData));
          navigate("/", { state: { email: user.email } });
        })
        .catch((err) => {
          setGeneralError(err.message);
        });
    }
  };

  return (
    <>
      <AuthHeader />
      <section className="login">
        <div className="login__header">
          <h2 className="login__title">Zaloguj się</h2>
          <div className="decorative-border"></div>
        </div>
        <div className="login__panel">
          <form className="login__form" onSubmit={handleSubmit}>
            <div className="login__input">
              <label htmlFor="email" className="login__label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={validationErrors.email ? "login__input--error" : ""}
              />
              {validationErrors.email && (
                <div className="login__error">{validationErrors.email}</div>
              )}
            </div>
            <div className="login__input">
              <label htmlFor="password" className="login__label">
                Hasło
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={
                  validationErrors.password ? "login__input--error" : ""
                }
              />
              {validationErrors.password && (
                <div className="login__error">{validationErrors.password}</div>
              )}
            </div>
            {generalError && <div className="login__error">{generalError}</div>}
          </form>
          <div className="login__nav">
            <button className="login__button login__button--register">
              <Link to="/register">Załóż konto</Link>
            </button>
            <button
              type="button"
              className="login__button login__button--login"
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
