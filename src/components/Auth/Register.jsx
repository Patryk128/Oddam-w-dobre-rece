import React, { useState } from "react";
import HomeHeader from "../Home/HomeHeader";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

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
          console.log("User registered:", userCredential.user);
          navigate("/home");
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
      <HomeHeader />
      <section className="register">
        <div className="register-header">
          <h2 className="register-title">Załóż konto</h2>
          <div className="header-border"></div>
        </div>
        <div className="register-panel">
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="register-input">
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
            <div className="register-input">
              <label htmlFor="password">Hasło</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={
                  errors.password || errors.confirmPassword ? "input-error" : ""
                }
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>
            <div className="register-input">
              <label htmlFor="confirmPassword">Powtórz hasło</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={
                  errors.password || errors.confirmPassword ? "input-error" : ""
                }
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>
          </form>
          <div className="register-nav">
            <button className="register-button register-button-login">
              <Link to="/login">Zaloguj się</Link>
            </button>
            <button
              type="submit"
              className="register-button register-button-register"
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
