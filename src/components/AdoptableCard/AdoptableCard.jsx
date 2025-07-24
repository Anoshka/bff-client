import { Link } from "react-router-dom";
import "./AdoptableCard.scss";

const AdoptableCard = ({ dog }) => (
  <Link to={`/adoptables/${dog.id}`} className="adoptable-card">
    <div className="adoptable-card__image-wrapper">
      <img src={dog.image} alt={dog.name} className="adoptable-card__image" />
    </div>
    <div className="adoptable-card__info">
      <h3 className="adoptable-card__name">{dog.name} - ADOPTABLE</h3>
      <p className="adoptable-card__description">{dog.description}</p>
      <div className="adoptable-card__details">
        <p className="adoptable-card__breed">🐶: {dog.breed}</p>
        <p className="adoptable-card__age">🎂: {dog.age}</p>
        <p className="adoptable-card__weight">⚖️: {dog.weight}</p>
        <p className="adoptable-card__gender">♂️: {dog.gender}</p>
      </div>
    </div>
  </Link>
);

export default AdoptableCard;
