import React from "react";

const Step5 = ({
  formData,
  quantitySelectedOption,
  selectedItems,
  localizationSelectedOption,
  clicked,
  handleNextClick,
  handleBackClick,
  organizationName,
}) => {
  return (
    <div className="donation-summary-form">
      <h2 className="donation-summary-title">Podsumowanie Twojej darowizny</h2>
      <div className="donation-confirmation-header">
        <h3 className="donation-items-title">Oddajesz: </h3>
        <p className="donation-confirmation-description">
          <div className="donation-icon-items"></div>
          {quantitySelectedOption} worki, {selectedItems.join(", ")},{" "}
          {Object.keys(clicked)
            .filter((key) => clicked[key])
            .join(", ")}
        </p>
        <p className="donation-confirmation-description">
          <div className="donation-icon-location"></div>
          dla lokalizacji: {localizationSelectedOption}, {organizationName}
        </p>
      </div>

      <div className="donation-confirmation-columns">
        <div className="donation-confirmation-column">
          <h3 className="pickup-address-title">Adres odbioru</h3>
          <p>Ulica: {formData.street}</p>
          <p>Miasto: {formData.city}</p>
          <p>Kod pocztowy: {formData.postalCode}</p>
          <p>Numer telefonu: {formData.phoneNumber}</p>
        </div>

        <div className="pickup-schedule-column">
          <h3 className="pickup-schedule-title">Termin odbioru</h3>
          <p>Data: {formData.date}</p>
          <p>Godzina: {formData.time}</p>
          <p>Uwagi dla kuriera: {formData.notes}</p>
        </div>
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
          className="navigation-button-confirm"
          onClick={handleNextClick}
        >
          Potwierdzam
        </button>
      </div>
    </div>
  );
};

export default Step5;
