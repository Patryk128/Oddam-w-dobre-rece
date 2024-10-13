import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import AuthHeader from "./AuthHeader";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = { email: "", password: "", confirmPassword: "" };

    if (!validateEmail(email)) {
      newErrors.email = "Podany email jest nieprawidłowy!";
      valid = false;
    }

    if (password.length < 6) {
      newErrors.password = "Podane hasło jest za krótkie!";
      valid = false;
    }

    if (password !== confirmPassword) {
      newErrors.password = "Hasła się nie zgadzają!";
      newErrors.confirmPassword = "Hasła się nie zgadzają!";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const userData = {
            isLoggedIn: true,
            email: user.email,
          };
          localStorage.setItem("user", JSON.stringify(userData));
          navigate("/", { state: { email: user.email } });
        })
        .catch((error) => {
          console.error("Error registering user:", error.message);
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: error.message.includes("email") ? "Email już istnieje!" : "",
            password: error.message.includes("password")
              ? "Problem z hasłem!"
              : "",
          }));
        });
    }
  };

  return (
    <>
      <AuthHeader />
      <section className="register">
        <div className="register__header">
          <h2 className="register__title">Załóż konto</h2>
          <div className="decorative-border"></div>
        </div>
        <div className="register__panel">
          <form className="register__form" onSubmit={handleSubmit}>
            <div className="register__input">
              <label htmlFor="email" className="register__label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? "register__input--error" : ""}
              />
              {errors.email && (
                <div className="register__error">{errors.email}</div>
              )}
            </div>
            <div className="register__input">
              <label htmlFor="password" className="register__label">
                Hasło
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={
                  errors.password || errors.confirmPassword
                    ? "register__input--error"
                    : ""
                }
              />
              {errors.password && (
                <div className="register__error">{errors.password}</div>
              )}
            </div>
            <div className="register__input">
              <label htmlFor="confirmPassword" className="register__label">
                Powtórz hasło
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={
                  errors.password || errors.confirmPassword
                    ? "register__input--error"
                    : ""
                }
              />
              {errors.password && (
                <div className="register__error">{errors.password}</div>
              )}
            </div>
          </form>
          <div className="register__nav">
            <button className="register__button register__button--login">
              <Link to="/login">Zaloguj się</Link>
            </button>
            <button
              type="submit"
              className="register__button register__button--register"
              onClick={handleSubmit}
            >
              Załóż konto
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
