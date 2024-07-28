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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    handleFormDataChange({ ...formData, [name]: value });
  };

  return (
    <>
      <h2 className="logged-home-warning-title">Ważne!</h2>
      <p className="logged-home-warning-descriptiom">
        Podaj adres oraz termin odbioru rzeczy.
      </p>
      <p>Krok 4/4</p>
      <h2>Podaj adres i termin odbioru:</h2>
      <form className="pickup-form">
        <h3>Podaj adres oraz termin odbioru rzecz przez kuriera</h3>
        <div className="form-group">
          <label>Ulica:</label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Miasto:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Kod pocztowy:</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Numer telefonu:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Data:</label>
          <input
            type="text"
            name="date"
            placeholder="DD-MM-YYYY"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Godzina:</label>
          <input
            type="text"
            name="time"
            placeholder="HH:MM"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Uwagi dla kuriera:</label>
          <input
            type="text"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="navigation-buttons">
        <button type="button" onClick={handleBackClick}>
          Back
        </button>
        <button type="button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </>
  );
};

export default Step4;
