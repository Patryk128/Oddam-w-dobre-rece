import React, { useState } from "react";

const Step4 = ({ handleFormDataChange, handleNextClick, handleBackClick }) => {
  const [formData, setFormData] = useState({
    street: "",
    city: "",
    postalCode: "",
    phoneNumber: "",
    date: "",
    time: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    handleFormDataChange({ ...formData, [name]: value });
  };

  const validateFields = () => {
    const newErrors = {};
    const postalCodeRegex = /^\d{2}-\d{3}$/;
    const phoneNumberRegex = /^\d{9}$/;
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/; // Formatuj: DD-MM-YYYY
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/; // Formatuj: HH:MM

    // Walidacja pola "Ulica"
    if (formData.street.trim().length < 3) {
      newErrors.street = "Ulica musi mieć co najmniej 3 znaki.";
    }

    // Walidacja pola "Miasto"
    if (formData.city.trim().length < 3) {
      newErrors.city = "Miasto musi mieć co najmniej 3 znaki.";
    }

    // Walidacja kodu pocztowego
    if (!formData.postalCode.match(postalCodeRegex)) {
      newErrors.postalCode = "Kod pocztowy musi mieć format XX-XXX.";
    }

    // Walidacja numeru telefonu
    if (!formData.phoneNumber.match(phoneNumberRegex)) {
      newErrors.phoneNumber = "Numer telefonu musi mieć 9 cyfr.";
    }

    // Walidacja daty
    if (!formData.date.match(dateRegex)) {
      newErrors.date = "Data musi mieć format DD-MM-YYYY.";
    }

    // Walidacja godziny
    if (!formData.time.match(timeRegex)) {
      newErrors.time = "Godzina musi mieć format HH:MM.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextClickInternal = () => {
    if (validateFields()) {
      handleNextClick();
    }
  };

  return (
    <>
      <div className="alert-box">
        <h2 className="alert-title">Ważne!</h2>
        <p className="alert-description">
          Podaj adres oraz termin odbioru rzeczy.
        </p>
      </div>
      <div className="donation-form">
        <p className="donation-step-indicator">Krok 4/4</p>
        <form className="pickup-form">
          <h3 className="pickup-form-title">
            Podaj adres oraz termin odbioru rzeczy przez kuriera
          </h3>
          <div className="form-columns">
            <div className="form-column-left">
              <h3 className="pickup-address-title">Adres odbioru:</h3>
              <div className="form-group">
                <label>Ulica</label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                />
                {errors.street && (
                  <p className="error-message">{errors.street}</p>
                )}
              </div>
              <div className="form-group">
                <label>Miasto</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
                {errors.city && <p className="error-message">{errors.city}</p>}
              </div>
              <div className="form-group">
                <label>Kod pocztowy</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
                {errors.postalCode && (
                  <p className="error-message">{errors.postalCode}</p>
                )}
              </div>
              <div className="form-group">
                <label>Numer telefonu</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                {errors.phoneNumber && (
                  <p className="error-message">{errors.phoneNumber}</p>
                )}
              </div>
            </div>
            <div className="form-column-right">
              <h3 className="pickup-time-title">Termin odbioru:</h3>
              <div className="form-group">
                <label>Data</label>
                <input
                  type="text"
                  name="date"
                  placeholder="DD-MM-YYYY"
                  value={formData.date}
                  onChange={handleChange}
                />
                {errors.date && <p className="error-message">{errors.date}</p>}
              </div>
              <div className="form-group">
                <label>Godzina</label>
                <input
                  type="text"
                  name="time"
                  placeholder="HH:MM"
                  value={formData.time}
                  onChange={handleChange}
                />
                {errors.time && <p className="error-message">{errors.time}</p>}
              </div>
              <div className="form-group">
                <label>
                  Uwagi
                  <br />
                  dla kuriera
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  maxLength={70}
                />
              </div>
            </div>
          </div>
        </form>
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
    </>
  );
};

export default Step4;
