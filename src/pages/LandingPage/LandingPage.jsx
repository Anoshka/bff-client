import "./LandingPage.scss";
import LandingIntro from "../../components/LandingIntro/LandingIntro.jsx";
import AboutUs from "../../components/AboutUs/AboutUs.jsx";
import DonateNow from "../../components/DonateNow/DonateNow.jsx";
import MailingList from "../../components/MailingList/MailingList.jsx";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <LandingIntro className="landing-page__intro" />
      <AboutUs className="about-us__intro" />
      <DonateNow className="donate-now__intro" />
      <MailingList className="mailing-list__intro" />
    </div>
  );
};

export default LandingPage;
