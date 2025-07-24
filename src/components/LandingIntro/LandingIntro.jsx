import { Link } from "react-router-dom";
import "./LandingIntro.scss";
import dog_image from "../../assets/images/landingpage_intro.png";

const LandingIntro = () => {
  return (
    <section className="landing-intro">
      <div className="landing-intro__hero">
        <div className="landing-intro__content">
          <div className="landing-intro__text-container">
            <div className="landing-intro__image-container">
              <img
                src={dog_image}
                alt="Shelter dog looking for a home"
                className="landing-intro__image"
              />
            </div>

            <div className="landing-intro__text">
              <p className="landing-intro__subtitle">
                We're a registered non profit rescue society
              </p>

              <h1 className="landing-intro__title">
                Giving Shelter Dogs a second chance in BC Canada
              </h1>

              <Link to="/adoptables" className="landing-intro__cta-button">
                View Adoptable Dogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingIntro;
