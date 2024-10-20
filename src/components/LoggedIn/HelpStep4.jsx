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
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

    if (formData.street.trim().length < 3) {
      newErrors.street = "Ulica musi mieć co najmniej 3 znaki.";
    }

    if (formData.city.trim().length < 3) {
      newErrors.city = "Miasto musi mieć co najmniej 3 znaki.";
    }

    if (!formData.postalCode.match(postalCodeRegex)) {
      newErrors.postalCode = "Kod pocztowy musi mieć format XX-XXX.";
    }

    if (!formData.phoneNumber.match(phoneNumberRegex)) {
      newErrors.phoneNumber = "Numer telefonu musi mieć 9 cyfr.";
    }

    if (!formData.date.match(dateRegex)) {
      newErrors.date = "Data musi mieć format DD-MM-YYYY.";
    }

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
      <div className="alert">
        <h2 className="alert__title">Ważne!</h2>
        <p className="alert__description">
          Podaj adres oraz termin odbioru rzeczy.
        </p>
      </div>
      <div className="donation__form">
        <p className="donation__step-indicator">Krok 4/4</p>
        <form className="pickup-form">
          <h3 className="pickup-form__title">
            Podaj adres oraz termin odbioru rzeczy przez kuriera
          </h3>
          <div className="pickup-form__columns">
            <div className="pickup-form__column pickup-form__column--left">
              <h3 className="pickup-form__section-title">Adres odbioru:</h3>
              <div className="form__group">
                <label>Ulica</label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                />
                {errors.street && (
                  <p className="error__message">{errors.street}</p>
                )}
              </div>
              <div className="form__group">
                <label>Miasto</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
                {errors.city && <p className="error__message">{errors.city}</p>}
              </div>
              <div className="form__group">
                <label>Kod pocztowy</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
                {errors.postalCode && (
                  <p className="error__message">{errors.postalCode}</p>
                )}
              </div>
              <div className="form__group">
                <label>Numer telefonu</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                {errors.phoneNumber && (
                  <p className="error__message">{errors.phoneNumber}</p>
                )}
              </div>
            </div>
            <div className="pickup-form__column pickup-form__column--right">
              <h3 className="pickup-form__section-title">Termin odbioru:</h3>
              <div className="form__group">
                <label>Data</label>
                <input
                  type="text"
                  name="date"
                  placeholder="DD-MM-YYYY"
                  value={formData.date}
                  onChange={handleChange}
                />
                {errors.date && <p className="error__message">{errors.date}</p>}
              </div>
              <div className="form__group">
                <label>Godzina</label>
                <input
                  type="text"
                  name="time"
                  placeholder="HH:MM"
                  value={formData.time}
                  onChange={handleChange}
                />
                {errors.time && <p className="error__message">{errors.time}</p>}
              </div>
              <div className="form__group">
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
        <div className="summary__buttons">
          <button
            type="button"
            className="navigation__button--back"
            onClick={handleBackClick}
          >
            Wstecz
          </button>
          <button
            type="button"
            className="navigation__button--next"
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
