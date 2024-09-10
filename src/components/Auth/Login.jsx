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
        <div className="login-header">
          <h2 className="login-title">Zaloguj się</h2>
          <div className="decorative-border"></div>
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
                className={validationErrors.email ? "input-error" : ""}
              />
              {validationErrors.email && (
                <div className="error">{validationErrors.email}</div>
              )}
            </div>
            <div className="login-input">
              <label htmlFor="password">Hasło</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={validationErrors.password ? "input-error" : ""}
              />
              {validationErrors.password && (
                <div className="error">{validationErrors.password}</div>
              )}
            </div>
            {generalError && <div className="error">{generalError}</div>}
          </form>
          <div className="login-nav">
            <button className="login-button login-button-register">
              <Link to="/register">Załóż konto</Link>
            </button>
            <button
              type="button"
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
