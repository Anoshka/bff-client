import { Link } from "react-router-dom";
import "./DonateNow.scss";
import pplogo from "../../assets/images/paypal_logo.png";
import ppcard from "../../assets/images/paypal_card.png";
import mscard from "../../assets/images/mastercard_card.png";
import visacard from "../../assets/images/visa_card.png";
import discover_card from "../../assets/images/discover_card.png";
import amexcard from "../../assets/images/amex_card.png";

const LandingIntro = () => {
  return (
    <section className="donate-now">
      <div className="donate-now__hero">
        <div className="donate-now__content">
          <div className="donate-now__text-container">
            <div className="donate-now__text">
              <h1 className="donate-now__title">Help Our Cause</h1>
              <p className="donate-now__subtitle">
                Your support changes lives!
              </p>
              <p className="donate-now__subtitle">
                With your generosity, we can rescue neglected, abused, sick, and
                stray dogs in California—giving them the care, love, and second
                chances they deserve. Every donation fuels our mission to save
                more lives.
              </p>

              <a
                href="https://www.paypal.com/donate/your-link-here"
                className="donate-now__cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="donate-now__cta-img" src={pplogo} />
                Donate Now
              </a>
              <div className="donate-now__payment-cards">
                <img
                  src={ppcard}
                  alt="PayPal"
                  className="donate-now__card-logo"
                />
                <img
                  src={mscard}
                  alt="MasterCard"
                  className="donate-now__card-logo"
                />
                <img
                  src={visacard}
                  alt="Visa"
                  className="donate-now__card-logo"
                />
                <img
                  src={discover_card}
                  alt="Discover"
                  className="donate-now__card-logo"
                />
                <img
                  src={amexcard}
                  alt="American Express"
                  className="donate-now__card-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingIntro;
