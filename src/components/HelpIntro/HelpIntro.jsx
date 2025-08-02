import { Link } from "react-router-dom";
import "./HelpIntro.scss";
import dog_image from "../../assets/images/how_to_help_img.png";
import pplogo from "../../assets/images/paypal_logo.png";
import ppcard from "../../assets/images/paypal_card.png";
import mscard from "../../assets/images/mastercard_card.png";
import visacard from "../../assets/images/visa_card.png";
import discover_card from "../../assets/images/discover_card.png";
import amexcard from "../../assets/images/amex_card.png";

const HelpIntro = () => {
  return (
    <section className="help-intro">
      <div className="help-intro__container">
        <div className="help-intro__image-container">
          <img
            src={dog_image}
            alt="Shelter dog looking for a home"
            className="help-intro__image"
          />
        </div>

        <div className="help-intro__content">
          <div className="help-intro__text">
            <h1 className="help-intro__title">Help Our Cause</h1>
            <p className="help-intro__subtitle">
              Your support and contributions will enable us save dogs in high
              kill shelters in California, supplies, veterinary bills and
              anything in between while the dogs are in our care.
            </p>
            <p className="help-intro__subtitle">
              Thank you for donating and making the world a better place.
              Together we can make a difference.
            </p>

            <a
              href="https://www.paypal.com/donate?token=QtF9U-GuzYPqvbhtRX-W3MjIhspEKwW-LL0cBMf366zLHu6JQWyjitjP8u9dblY1QZ4dcYF6iXHu44Fzhttps://www.paypal.com/donate/your-link-here"
              className="help-intro__cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="help-intro__cta-img" src={pplogo} alt="PayPal" />
              Donate Now
            </a>

            <div className="help-intro__payment-cards">
              <img
                src={ppcard}
                alt="PayPal"
                className="help-intro__card-logo"
              />
              <img
                src={mscard}
                alt="MasterCard"
                className="help-intro__card-logo"
              />
              <img
                src={visacard}
                alt="Visa"
                className="help-intro__card-logo"
              />
              <img
                src={discover_card}
                alt="Discover"
                className="help-intro__card-logo"
              />
              <img
                src={amexcard}
                alt="American Express"
                className="help-intro__card-logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="help-intro__wishlist">
        <h1 className="help-intro__header">Ways you can help</h1>
        <p className="help-intro__essentials">
          We're always in the need of essentials for the rescue dogs!
        </p>
        <a
          href="https://www.amazon.ca/hz/wishlist/ls/2BEQ3MB7E6ST7?ref_=wl_share"
          className="help-intro__cta-button help-intro__cta-button--essential"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our amazon wishlist
        </a>
      </div>
    </section>
  );
};

export default HelpIntro;
