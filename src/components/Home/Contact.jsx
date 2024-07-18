import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "Krzysztof",
    email: "abc@xyz.pl",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <section className="contact">
      <div className="contact-img"></div>
      <div className="contact-form">
        <h2 className="contact-title">Skontaktuj się z nami</h2>
        <div className="header-border"></div>
        <form onSubmit={handleSubmit}>
          <div className="contact-name">
            <div className="contact-input">
              <label htmlFor="name">Wpisz swoje imię</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-input">
              <label htmlFor="email">Wpisz swój email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="contact-input">
            <label htmlFor="message">Wpisz swoją wiadomość</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-container">
            <button className="contact-button" type="submit">
              Wyślij
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
