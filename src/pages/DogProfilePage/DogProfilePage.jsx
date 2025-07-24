import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAdoptableById } from "../../services/adoptablesServices";
import "./DogProfilePage.scss";

const DogProfilePage = () => {
  const { id } = useParams();
  const [dog, setDog] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  useEffect(() => {
    getAdoptableById(id).then(setDog);
  }, [id]);

  if (!dog) return <div className="dog-profile__loading">Loading...</div>;

  const openModal = (idx) => {
    setModalIndex(idx);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const nextImage = () =>
    setModalIndex((prev) =>
      dog.images && dog.images.length > 0 ? (prev + 1) % dog.images.length : 0
    );
  const prevImage = () =>
    setModalIndex((prev) =>
      dog.images && dog.images.length > 0
        ? (prev - 1 + dog.images.length) % dog.images.length
        : 0
    );

  return (
    <div className="dog-profile">
      <Link to="/adoptables" className="dog-profile__back">
        &larr; Back to Adoptables
      </Link>

      <div className="dog-profile__main">
        <div className="dog-profile__top-row">
          <div className="dog-profile__images">
            {dog.images && dog.images.length > 0 ? (
              <img
                src={dog.images[0]}
                alt={dog.name}
                className="dog-profile__main-image"
                onClick={() => openModal(0)}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <img
                src={dog.image}
                alt={dog.name}
                className="dog-profile__main-image"
              />
            )}

            {dog.images && dog.images.length > 1 && (
              <div className="dog-profile__thumbnails">
                {dog.images.slice(1).map((img, idx) => (
                  <img
                    key={img}
                    src={img}
                    alt={`${dog.name} ${idx + 2}`}
                    className="dog-profile__thumbnail"
                    onClick={() => openModal(idx + 1)}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="dog-profile__info">
            <h2 className="dog-profile__about">Meet {dog.name}!</h2>
            <ul className="dog-profile__details">
              <li className="dog-profile__detail">
                <strong>🐶:</strong> {dog.breed}
              </li>
              <li className="dog-profile__detail">
                <strong>🎂:</strong> {dog.age}
              </li>
              <li className="dog-profile__detail">
                <strong>⚖️:</strong> {dog.weight}
              </li>
              <li className="dog-profile__detail">
                <strong>♂️:</strong> {dog.gender}
              </li>
            </ul>
            <Link
              to="/apply-to-adopt"
              className="dog-profile__adopt-btn dog-profile__adopt-btn--top"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply To Adopt {dog.name}
            </Link>
          </div>
        </div>
        <div className="dog-profile__description">
          <p className="dog-profile__description">
            {dog.details.split("\n\n").map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </p>
        </div>
        <a
          href="https://barneysfurryfriends.ca/apply-to-adopt"
          className="dog-profile__adopt-btn dog-profile__adopt-btn--bottom"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply To Adopt {dog.name}
        </a>
      </div>
      {modalOpen && dog.images && dog.images.length > 0 && (
        <div className="dog-profile__modal" onClick={closeModal}>
          <span className="dog-profile__modal-close" onClick={closeModal}>
            &times;
          </span>
          <img
            src={dog.images[modalIndex]}
            alt={`${dog.name} ${modalIndex + 1}`}
            className="dog-profile__modal-image"
            onClick={(e) => e.stopPropagation()}
          />
          {dog.images.length > 1 && (
            <>
              <button
                className="dog-profile__modal-arrow dog-profile__modal-arrow--left"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                &#8592;
              </button>
              <button
                className="dog-profile__modal-arrow dog-profile__modal-arrow--right"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                &#8594;
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default DogProfilePage;
