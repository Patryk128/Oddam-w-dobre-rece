import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = "Imię jest wymagane.";
    } else if (formData.name.split(" ").length > 1) {
      errors.name = "Imię powinno być jednym wyrazem.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email jest wymagany.";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Email jest niepoprawny.";
    }

    if (!formData.message.trim()) {
      errors.message = "Wiadomość jest wymagana.";
    } else if (formData.message.length < 120) {
      errors.message = "Wiadomość musi mieć co najmniej 120 znaków.";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch(
        "https://fer-api.coderslab.pl/v1/portfolio/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setErrors(errorData.errors);
        return;
      }

      const result = await response.json();
      if (result.status === "success") {
        setSubmissionStatus("success");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setErrors({});
      }
    } catch (error) {
      console.error("Błąd wysyłania formularza:", error);
    }
  };

  return (
    <section className="contact">
      <div className="contact__img"></div>
      <div className="contact__form">
        <h2 className="contact__title">Skontaktuj się z nami</h2>
        <div className="contact__header-border"></div>
        {submissionStatus === "success" && (
          <p className="contact__success-message">
            Wiadomość została wysłana!
            <br /> Wkrótce się skontaktujemy.
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="contact__name">
            <div className="contact__input">
              <label
                htmlFor="name"
                className={
                  errors.name ? "contact__label--error" : "contact__label"
                }
              >
                Wpisz swoje imię
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Wpisz swoje imię"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "contact__input--error" : ""}
              />
              {errors.name && (
                <p className="contact__error-message">{errors.name}</p>
              )}
            </div>
            <div className="contact__input">
              <label
                htmlFor="email"
                className={
                  errors.email ? "contact__label--error" : "contact__label"
                }
              >
                Wpisz swój email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Wpisz swój email"
                className={errors.email ? "contact__input--error" : ""}
              />
              {errors.email && (
                <p className="contact__error-message">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="contact__input contact__input--textarea">
            <label
              htmlFor="message"
              className={
                errors.message ? "contact__label--error" : "contact__label"
              }
            >
              Wpisz swoją wiadomość
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              maxLength={200}
              placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae praesentium quibusdam deleniti voluptate quo quam quae, distinctio quisquam accusamus consectetur dolore consequuntur."
              className={errors.message ? "contact__input--error" : ""}
            />
            {errors.message && (
              <p className="contact__error-message">{errors.message}</p>
            )}
          </div>
          <div className="contact__button-container">
            <button className="contact__button" type="submit">
              Wyślij
            </button>
          </div>
        </form>
      </div>

      <footer className="footer">
        <div className="footer__content">
          <h2 className="footer__title">Copyright by Coders Lab</h2>
          <div className="footer__socials">
            <div className="footer__social footer__social--fb"></div>
            <div className="footer__social footer__social--ig"></div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactForm;
