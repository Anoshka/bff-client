import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <span className="footer__copyright">
        Copyright © 2025 Barney's Furry Friends - All Rights Reserved.
      </span>
      <div className="footer__links">
        <Link to="/apply-to-adopt" className="footer__link footer__link--adopt">
          Apply to Adopt
        </Link>
        <Link to="/happy-tails" className="footer__link footer__link--tails">
          HAPPY TAILS
        </Link>
      </div>
    </div>
  );
};

export default Footer;
