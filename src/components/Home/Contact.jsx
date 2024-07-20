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
    <section className="contact-content">
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
                placeholder={formData.name}
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
                placeholder={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="contact-input contact-input-textarea">
            <label htmlFor="message">Wpisz swoją wiadomość</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder={formData.message}
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

      <footer className="footer">
        <div className="footer-content">
          <h2 className="footer-title">Copyright by Coders Lab</h2>
          <div className="footer-socials">
            <div className="footer-social footer-social-fb"></div>
            <div className="footer-social footer-social-ig"></div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactForm;
