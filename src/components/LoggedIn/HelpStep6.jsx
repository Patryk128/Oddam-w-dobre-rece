import React from "react";
import { useNavigate } from "react-router-dom";

const Step6 = () => {
  const navigate = useNavigate();

  const handleScrollHome = () => {
    window.scrollTo(0, 0);
    navigate("/home");
  };

  return (
    <div className="thank-you">
      <div className="thank-you__content">
        <p className="thank-you__message">
          Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie
          informacje o odbiorze.
        </p>
        <div className="decorative-border"></div>
        <button
          className="hero__button thank-you__button"
          onClick={handleScrollHome}
        >
          STRONA GŁÓWNA
        </button>
      </div>
    </div>
  );
};

export default Step6;
