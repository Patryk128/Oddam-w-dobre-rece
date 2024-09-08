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
    <div className="summary">
      <h2 className="summary__title">Podsumowanie Twojej darowizny</h2>
      <div className="summary__details">
        <h3 className="summary__items-heading">Oddajesz: </h3>
        <p className="summary__items-description">
          <div className="summary__icon summary__icon--items"></div>
          {quantitySelectedOption} worki, {selectedItems.join(", ")},{" "}
          {Object.keys(clicked)
            .filter((key) => clicked[key])
            .join(", ")}
        </p>
        <p className="summary__location-description">
          <div className="summary__icon summary__icon--location"></div>
          dla lokalizacji: {localizationSelectedOption}, {organizationName}
        </p>
      </div>

      <div className="summary__columns">
        <div className="summary__column summary__column--pickup-address">
          <h3 className="summary__column-heading">Adres odbioru</h3>
          <div className="summary__field">
            <p className="summary__field-label">Ulica</p>
            <p className="summary__field-value">{formData.street}</p>
          </div>
          <div className="summary__field">
            <p className="summary__field-label">Miasto</p>
            <p className="summary__field-value">{formData.city}</p>
          </div>
          <div className="summary__field">
            <p className="summary__field-label">Kod pocztowy</p>
            <p className="summary__field-value">{formData.postalCode}</p>
          </div>
          <div className="summary__field">
            <p className="summary__field-label">Numer telefonu</p>
            <p className="summary__field-value">{formData.phoneNumber}</p>
          </div>
        </div>

        <div className="summary__column summary__column--pickup-schedule">
          <h3 className="summary__column-heading">Termin odbioru</h3>
          <div className="summary__field">
            <p className="summary__field-label">Data</p>
            <p className="summary__field-value">{formData.date}</p>
          </div>
          <div className="summary__field">
            <p className="summary__field-label">Godzina</p>
            <p className="summary__field-value">{formData.time}</p>
          </div>
          <div className="summary__field">
            <p className="summary__field-label">Uwagi dla kuriera</p>
            <p className="summary__field-value">{formData.notes}</p>
          </div>
        </div>
      </div>

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
          className="summary__button navigation__button--confirm"
          onClick={handleNextClick}
        >
          Potwierdzam
        </button>
      </div>
    </div>
  );
};

export default Step5;
