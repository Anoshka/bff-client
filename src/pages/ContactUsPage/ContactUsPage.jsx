import React, { useState } from "react";
import "./ContactUsPage.scss";

function ContactUsPage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setShowForm(false);
  };

  return (
    <div className="contact-page">
      <div className="contact-page__container">
        <div className="contact-page__header">
          <h1 className="contact-page__title">Contact us for any questions!</h1>
        </div>

        {!showForm ? (
          <div className="contact-page__intro">
            <button
              className="contact-page__send-button"
              onClick={() => setShowForm(true)}
            >
              Send Message
            </button>
          </div>
        ) : (
          <form className="contact-page__form" onSubmit={handleSubmit}>
            <div className="contact-page__form-header">
              <h2 className="contact-page__form-title">Send Message</h2>
            </div>

            <div className="contact-page__form-group">
              <label htmlFor="name" className="contact-page__label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="contact-page__input"
                required
              />
            </div>

            <div className="contact-page__form-group">
              <label htmlFor="email" className="contact-page__label">
                Email<span className="contact-page__required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="contact-page__input"
                required
              />
            </div>

            <div className="contact-page__form-group">
              <label htmlFor="message" className="contact-page__label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="contact-page__textarea"
                rows="5"
                required
              />
            </div>

            <div className="contact-page__form-footer">
              <p className="contact-page__recaptcha-notice">
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </p>

              <div className="contact-page__button-group">
                <button type="submit" className="contact-page__submit-button">
                  Send
                </button>
                <button
                  type="button"
                  className="contact-page__cancel-button"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactUsPage;
