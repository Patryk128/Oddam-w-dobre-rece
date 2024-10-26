import React, { useState } from "react";

const Step2 = ({
  isOptionsVisible,
  setIsOptionsVisible,
  quantitySelectedOption,
  setQuantitySelectedOption,
  handleNextClick,
  handleBackClick,
}) => {
  const [error, setError] = useState("");

  const handleQuantitySelectClick = () =>
    setIsOptionsVisible(!isOptionsVisible);

  const handleQuantityOptionClick = (option) => {
    setQuantitySelectedOption(option);
    setIsOptionsVisible(false);
    setError("");
  };

  const handleNextClickInternal = () => {
    if (!quantitySelectedOption) {
      setError("Proszę wybrać liczbę worków przed przejściem dalej.");
    } else {
      setError("");
      handleNextClick();
    }
  };

  return (
    <>
      <div className="alert">
        <h2 className="alert__title">Ważne!</h2>
        <p className="alert__description">
          Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję
          jak poprawnie spakować rzeczy znajdziesz TUTAJ.
        </p>
      </div>

      <div className="donation__form">
        <p className="donation__step-indicator">Krok 2/4</p>
        <h2 className="donation__step-title">
          Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
        </h2>
        <div className="quantity-selection">
          <div className="quantity-selection__box">
            <div className="quantity-selection__dropdown">
              <div
                className="quantity-selection__select-box"
                onClick={handleQuantitySelectClick}
              >
                <p className="quantity-selection__selected">
                  {quantitySelectedOption || "--wybierz--"}
                </p>
              </div>
            </div>
            {isOptionsVisible && (
              <div className="quantity-selection__options-dropdown">
                <ul className="quantity-selection__options-list">
                  {[1, 2, 3, 4, 5].map((option) => (
                    <li
                      key={option}
                      className="quantity-selection__option-item"
                      onClick={() => handleQuantityOptionClick(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {error && <p className="error__message">{error}</p>}{" "}
          <div className="summary__buttons">
            <button
              type="button"
              className="summary__button navigation__button--back"
              onClick={handleBackClick}
            >
              Wstecz
            </button>
            <button
              type="button"
              className="summary__button navigation__button--next"
              onClick={handleNextClickInternal}
            >
              Dalej
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2;
