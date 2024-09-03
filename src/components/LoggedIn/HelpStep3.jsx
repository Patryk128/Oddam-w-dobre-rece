import React, { useState } from "react";

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
  const [error, setError] = useState("");

  const handleLocalizationSelectClick = () =>
    setIsOptionsVisible(!isOptionsVisible);

  const handleLocalizationOptionClick = (option) => {
    setLocalizationSelectedOption(option);
    setIsOptionsVisible(false);
    setError(""); // Czyszczenie błędu po wybraniu opcji
  };

  const handleClick = (option) => {
    setClicked((prevClicked) => ({
      ...prevClicked,
      [option]: !prevClicked[option],
    }));
    setError(""); // Czyszczenie błędu po kliknięciu opcji pomocy
  };

  const handleNextClickInternal = () => {
    const hasSelectedAidOption = Object.values(clicked).some((value) => value);

    if (
      !localizationSelectedOption ||
      localizationSelectedOption === "-wybierz-"
    ) {
      setError("Proszę wybrać lokalizację przed przejściem dalej.");
    } else if (!hasSelectedAidOption) {
      setError("Proszę wybrać co najmniej jedną opcję, komu chcesz pomóc.");
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
          Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
          wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź
          celu ich pomocy.
        </p>
      </div>
      <div className="donation-form">
        <div className="donation-step-container">
          <p className="donation-step-indicator">Krok 3/4</p>
          <h2 className="donation-step-title">Lokalizacja</h2>
          <div className="localization-selection-box">
            <div className="select-box" onClick={handleLocalizationSelectClick}>
              <p className="selected-localization">
                {localizationSelectedOption || "Wybierz lokalizację"}
              </p>
            </div>
            {isOptionsVisible && (
              <div className="options-dropdown-large">
                <ul className="options-list">
                  {["Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"].map(
                    (option) => (
                      <li
                        key={option}
                        className="options-list-item"
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
          <h3 className="aid-description-title">Komu chcesz pomóc?</h3>
          <div className="aid-options">
            {[
              "dzieciom",
              "samotnym matkom",
              "bezdomnym",
              "niepełnosprawnym",
              "osobom starszym",
            ].map((option) => (
              <div
                key={option}
                className={`aid-option ${clicked[option] ? "active" : ""}`}
                onClick={() => handleClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
          {error && <p className="error-message">{error}</p>}{" "}
          {/* Wyświetlanie błędu */}
          <div className="aid-organization-textarea">
            <h3 className="aid-description-title">
              Wpisz nazwę konkretnej organizacji (opcjonalnie)
            </h3>
            <textarea name="aid" id="aid"></textarea>
          </div>
          <div className="form-navigation-buttons">
            <button
              type="button"
              className="navigation-button-back"
              onClick={handleBackClick}
            >
              Wstecz
            </button>
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

export default Step3;
