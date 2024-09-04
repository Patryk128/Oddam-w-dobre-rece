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
  organizationName,
  setOrganizationName, // Nowy prop do ustawiania nazwy organizacji
}) => {
  const [localizationError, setLocalizationError] = useState("");
  const [aidError, setAidError] = useState("");

  const handleLocalizationSelectClick = () =>
    setIsOptionsVisible(!isOptionsVisible);

  const handleLocalizationOptionClick = (option) => {
    setLocalizationSelectedOption(option);
    setIsOptionsVisible(false);
    setLocalizationError(""); // Czyszczenie błędu po wybraniu opcji lokalizacji
  };

  const handleClick = (option) => {
    setClicked((prevClicked) => ({
      ...prevClicked,
      [option]: !prevClicked[option],
    }));
    setAidError(""); // Czyszczenie błędu po kliknięciu opcji pomocy
  };

  const handleNextClickInternal = () => {
    const hasSelectedAidOption = Object.values(clicked).some((value) => value);

    let hasError = false;

    if (
      !localizationSelectedOption ||
      localizationSelectedOption === "-wybierz-"
    ) {
      setLocalizationError("Proszę wybrać lokalizację przed przejściem dalej.");
      hasError = true;
    } else {
      setLocalizationError(""); // Czyszczenie błędu lokalizacji
    }

    if (!hasSelectedAidOption) {
      setAidError("Proszę wybrać co najmniej jedną opcję, komu chcesz pomóc.");
      hasError = true;
    } else {
      setAidError(""); // Czyszczenie błędu pomocy
    }

    if (!hasError) {
      handleNextClick(); // Wywołanie oryginalnego handleNextClick
    }
  };

  const handleOrganizationNameChange = (e) => {
    setOrganizationName(e.target.value); // Ustawienie nazwy organizacji w stanie nadrzędnym
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
            {localizationError && (
              <p className="error-message">{localizationError}</p>
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
          {aidError && <p className="error-message">{aidError}</p>}
          <div className="aid-organization-textarea">
            <h3 className="aid-description-title">
              Wpisz nazwę konkretnej organizacji (opcjonalnie)
            </h3>
            <textarea
              name="aid"
              id="aid"
              value={organizationName}
              onChange={handleOrganizationNameChange} // Obsługa zmian w polu tekstowym
            ></textarea>
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
