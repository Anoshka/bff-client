import { Link } from "react-router-dom";
import "./AboutUs.scss";
import dog_image from "../../assets/images/about_us.png";

const AboutUs = () => {
  return (
    <section className="about-us-intro">
      <div className="about-us-intro__hero">
        <div className="about-us-intro__content">
          <div className="about-us-intro__text-container">
            <div className="about-us-intro__image-container">
              <p className="about-us-intro__subtitle">About Us</p>
              <img
                src={dog_image}
                alt="Shelter dog looking for a home"
                className="about-us-intro__image"
              />
            </div>

            <div className="about-us-intro__text">
              <h1 className="about-us-intro__title">Our Story</h1>
              <p className="about-us-intro__description">
                Shelters in California and across Canada are overflowing,
                leaving countless dogs at risk of euthanasia simply due to lack
                of space. We saw the crisis and knew we had to act.
              </p>
              <p className="about-us-intro__description">
                While we may not change the entire world, every dog we save
                creates a ripple effect—spreading kindness, hope, and love. Our
                mission is simple: rescue, rehabilitate, and rehome dogs so they
                can experience the safety, care, and love they deserve—forever.
              </p>
              <p className="about-us-intro__description">
                Join us in making a difference, one rescue at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
