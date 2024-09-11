import React from "react";
import { useNavigate } from "react-router-dom";
const Error404 = () => {
  const navigate = useNavigate();

  const handleScrollHome = () => {
    window.scrollTo(0, 0);
    navigate("/home");
  };
  return (
    <>
      <div className="error-404">
        <h2 className="error-404__title">Nie znaleziono strony</h2>
        <button
          className="hero__button thank-you__button"
          onClick={handleScrollHome}
        >
          STRONA GŁÓWNA
        </button>
      </div>
    </>
  );
};

export default Error404;
