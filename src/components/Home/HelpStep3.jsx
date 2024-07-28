import React from "react";

const Step3 = ({
  isOptionsVisible,
  setIsOptionsVisible,
  localizationSelectedOption,
  setLocalizationSelectedOption,
  clicked,
  setClicked,
  handleNextClick,
  handleBackClick,
}) => {
  const handleLocalizationSelectClick = () =>
    setIsOptionsVisible(!isOptionsVisible);
  const handleLocalizationOptionClick = (option) => {
    setLocalizationSelectedOption(option);
    setIsOptionsVisible(false);
  };

  const handleClick = (option) => {
    setClicked((prevClicked) => ({
      ...prevClicked,
      [option]: !prevClicked[option],
    }));
  };

  return (
    <>
      <h2 className="logged-home-warning-title">Ważne!</h2>
      <p className="logged-home-warning-descriptiom">
        Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
        wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź
        celu ich pomocy.
      </p>
      <p>Krok 3/4</p>
      <h2>Lokalizacja</h2>
      <div className="help-box">
        <div
          className="help-select_box"
          onClick={handleLocalizationSelectClick}
        >
          <p className="select">{localizationSelectedOption}</p>
        </div>
        {isOptionsVisible && (
          <div className="option_box-large">
            <ul className="ul">
              {["Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"].map(
                (option) => (
                  <li
                    key={option}
                    className="li"
                    onClick={() => handleLocalizationOptionClick(option)}
                  >
                    {option}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
      <div className="help-content">
        <h3>Komu chcesz pomóc?</h3>
        <div className="help-options">
          {[
            "dzieciom",
            "samotnym matkom",
            "bezdomnym",
            "niepełnosprawnym",
            "osobom starszym",
          ].map((option) => (
            <div
              key={option}
              className={`help-options-option ${
                clicked[option] ? "active" : ""
              }`}
              onClick={() => handleClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
        <div className="help-options-textarea">
          <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
          <textarea name="help" id="help"></textarea>
        </div>
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

export default Step3;
