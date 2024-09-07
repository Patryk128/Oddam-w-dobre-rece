import React from "react";
import { useNavigate } from "react-router-dom";

const Step6 = () => {
  const navigate = useNavigate();

  const handleScrollHome = () => {
    window.scrollTo(0, 0); // przewinięcie na górę strony
    navigate("/home"); // przeniesienie na stronę główną
  };

  return (
    <div className="donation-summary-form">
      <div className="summary-content">
        <p className="summary-text">
          Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie
          informacje o odbiorze.
        </p>
        <div className="header-border"></div>
        <button
          className="header-btn donation-summary-btn"
          onClick={handleScrollHome}
        >
          STRONA GŁÓWNA
        </button>
      </div>
    </div>
  );
};

export default Step6;
