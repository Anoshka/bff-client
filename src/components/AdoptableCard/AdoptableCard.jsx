import { Link } from "react-router-dom";
import "./AdoptableCard.scss";

const AdoptableCard = ({ dog }) => {
  // Use slug if available, otherwise fall back to id
  const linkPath = dog.slug
    ? `/adoptables/${dog.slug}`
    : `/adoptables/${dog.id}`;

  return (
    <Link to={linkPath} className="adoptable-card">
      <div className="adoptable-card__image-wrapper">
        {dog.image ? (
          <img
            src={dog.image}
            alt={dog.name}
            className="adoptable-card__image"
          />
        ) : (
          <div className="adoptable-card__image-placeholder">No Image</div>
        )}
      </div>
      <div className="adoptable-card__info">
        <h3 className="adoptable-card__name">
          {dog.name} -{" "}
          {dog.adoptionStatus === "adopted" ? "ADOPTED" : "ADOPTABLE"}
        </h3>
        <p className="adoptable-card__description">
          {dog.description || dog.bio}
        </p>
        <div className="adoptable-card__details">
          {dog.breed && (
            <p className="adoptable-card__breed">🐶: {dog.breed}</p>
          )}
          {dog.age && <p className="adoptable-card__age">🎂: {dog.age}</p>}
          {dog.weight && (
            <p className="adoptable-card__weight">⚖️: {dog.weight}</p>
          )}
          {dog.gender && (
            <p className="adoptable-card__gender">♂️: {dog.gender}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default AdoptableCard;
