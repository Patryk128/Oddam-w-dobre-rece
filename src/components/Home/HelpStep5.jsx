import React from "react";

const Step5 = ({
  formData,
  quantitySelectedOption,
  selectedItems,
  localizationSelectedOption,
  clicked,
  handleNextClick,
  handleBackClick,
}) => {
  return (
    <div className="confirmation">
      <h2>Potwierdzenie danych:</h2>
      <p>
        <strong>Ulica:</strong> {formData.street}
      </p>
      <p>
        <strong>Miasto:</strong> {formData.city}
      </p>
      <p>
        <strong>Kod pocztowy:</strong> {formData.postalCode}
      </p>
      <p>
        <strong>Numer telefonu:</strong> {formData.phoneNumber}
      </p>
      <p>
        <strong>Data:</strong> {formData.date}
      </p>
      <p>
        <strong>Godzina:</strong> {formData.time}
      </p>
      <p>
        <strong>Uwagi dla kuriera:</strong> {formData.notes}
      </p>
      <p>
        <strong>Liczba 60l worków:</strong> {quantitySelectedOption}
      </p>
      <p>
        <strong>Co chcesz oddać:</strong> {selectedItems.join(", ")}
      </p>
      <p>
        <strong>Lokalizacja:</strong> {localizationSelectedOption}
      </p>
      <p>
        <strong>Komu chcesz pomóc:</strong>{" "}
        {Object.keys(clicked)
          .filter((key) => clicked[key])
          .join(", ")}
      </p>
      <div className="navigation-buttons">
        <button type="button" onClick={handleBackClick}>
          Back
        </button>
        <button type="button" onClick={handleNextClick}>
          Potwierdzam
        </button>
      </div>
    </div>
  );
};

export default Step5;
