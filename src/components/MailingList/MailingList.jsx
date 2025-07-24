import { useState } from "react";
import "./MailingList.scss";

const MailingList = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value === "") {
      setIsValid(true);
    } else {
      setIsValid(validateEmail(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setIsValid(false);
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      setEmail("");
      setIsValid(true);
    } catch (error) {
      console.error("Error submitting email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="mailing-list">
      <div className="mailing-list__container">
        <div className="mailing-list__content">
          <h2 className="mailing-list__title">Join Our Mailing List</h2>

          {isSubmitted ? (
            <div className="mailing-list__success">
              <p className="mailing-list__success--subtitle">
                Excellent! We're excited to send you our next update.
              </p>
              <p className="mailing-list__success--para">
                To let us know it's really you and that you'd like to receive
                emails from us, please click the link in the confirmation email
                we just sent you. You can unsubscribe from these emails any
                time.
              </p>
            </div>
          ) : (
            <form className="mailing-list__form" onSubmit={handleSubmit}>
              <div className="mailing-list__input-group">
                <input
                  type="email"
                  id="email-input"
                  className={`mailing-list__input ${
                    !isValid ? "mailing-list__input--error" : ""
                  }`}
                  placeholder="Email Address"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={() => {
                    if (email !== "") {
                      setIsValid(validateEmail(email));
                    }
                  }}
                  required
                  disabled={isLoading}
                />
                {!isValid && email !== "" && (
                  <span className="mailing-list__error">
                    Please enter a valid email address
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="mailing-list__button"
                disabled={isLoading || !email.trim()}
              >
                {isLoading ? "Signing up..." : "SIGN UP"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default MailingList;
