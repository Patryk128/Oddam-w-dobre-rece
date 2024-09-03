import React, { useState } from "react";

const Step1 = ({ selectedItems, setSelectedItems, handleNextClick }) => {
  const [error, setError] = useState("");

  const items = [
    "ubrania, które nadają się do ponownego użycia",
    "ubrania, do wyrzucenia",
    "zabawki",
    "książki",
    "inne",
  ];

  const handleCheckboxChange = (item) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(item)) {
        return prevSelectedItems.filter((i) => i !== item);
      } else {
        return [...prevSelectedItems, item];
      }
    });
    setError(""); // Czyszczenie błędu po zaznaczeniu opcji
  };

  const handleNextClickInternal = () => {
    if (selectedItems.length === 0) {
      setError("Proszę wybrać co najmniej jedną rzecz przed przejściem dalej.");
    } else {
      setError(""); // Czyszczenie błędu przed przejściem dalej
      handleNextClick(); // Wywołanie oryginalnego handleNextClick
    }
  };

  return (
    <div className="donation-process">
      <div className="alert-box">
        <h2 className="alert-title">Ważne!</h2>
        <p className="alert-description">
          Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
          wiedzieć komu najlepiej je przekazać.
        </p>
      </div>
      <div className="donation-form">
        <div className="donation-step-container">
          <p className="donation-step-indicator">Krok 1/4</p>
          <h2 className="donation-step-title">Zaznacz co chcesz oddać:</h2>
          <div className="donation-items-selection">
            {items.map((item, index) => (
              <label key={index} className="donation-item-label">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item)}
                  onChange={() => handleCheckboxChange(item)}
                />
                {item}
              </label>
            ))}
          </div>
          {error && <p className="error-message">{error}</p>}{" "}
          {/* Wyświetlanie błędu */}
          <div className="form-navigation-buttons">
            <button
              type="button"
              className="navigation-button-next"
              onClick={handleNextClickInternal}
            >
              Dalej
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
