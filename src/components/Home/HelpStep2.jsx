import React from "react";

const Step2 = ({
  selectedValue,
  setSelectedValue,
  isOptionsVisible,
  setIsOptionsVisible,
  quantitySelectedOption,
  setQuantitySelectedOption,
  handleNextClick,
  handleBackClick,
}) => {
  const handleQuantitySelectClick = () =>
    setIsOptionsVisible(!isOptionsVisible);
  const handleQuantityOptionClick = (option) => {
    setQuantitySelectedOption(option);
    setIsOptionsVisible(false);
  };

  return (
    <>
      <h2 className="logged-home-warning-title">Ważne!</h2>
      <p className="logged-home-warning-descriptiom">
        Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak
        poprawnie spakować rzeczy znajdziesz TUTAJ.
      </p>
      <p>Krok 2/4</p>
      <h2 className="to-give-back-title">
        Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
      </h2>
      <div className="box">
        <label htmlFor="quantity" className="quantity-select-label">
          Liczba 60l worków:
        </label>
        <div className="select_box" onClick={handleQuantitySelectClick}>
          <p className="select">{quantitySelectedOption}</p>
        </div>
        {isOptionsVisible && (
          <div className="option_box-small">
            <ul className="ul">
              {[1, 2, 3, 4, 5].map((option) => (
                <li
                  key={option}
                  className="li"
                  onClick={() => handleQuantityOptionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="navigation-buttons">
          <button type="button" onClick={handleBackClick}>
            Back
          </button>
          <button type="button" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Step2;
