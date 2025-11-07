import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getAdoptableBySlug,
  getAdoptableById,
} from "../../services/adoptablesServices";
import "./DogProfilePage.scss";

const DogProfilePage = () => {
  const { id } = useParams();
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  useEffect(() => {
    const fetchDog = async () => {
      try {
        setLoading(true);
        // Try slug first, then fall back to ID
        let adoptable = await getAdoptableBySlug(id);
        if (!adoptable) {
          adoptable = await getAdoptableById(id);
        }
        setDog(adoptable);
      } catch (error) {
        console.error("Error fetching dog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDog();
  }, [id]);

  if (loading) {
    return <div className="dog-profile__loading">Loading...</div>;
  }

  if (!dog) {
    return (
      <div className="dog-profile__error">
        <p>Pet not found.</p>
        <Link to="/adoptables">Back to Adoptables</Link>
      </div>
    );
  }

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
            ) : dog.image ? (
              <img
                src={dog.image}
                alt={dog.name}
                className="dog-profile__main-image"
              />
            ) : (
              <div className="dog-profile__image-placeholder">
                No Image Available
              </div>
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
              {dog.breed && (
                <li className="dog-profile__detail">
                  <strong>🐶:</strong> {dog.breed}
                </li>
              )}
              {dog.age && (
                <li className="dog-profile__detail">
                  <strong>🎂:</strong> {dog.age}
                </li>
              )}
              {dog.weight && (
                <li className="dog-profile__detail">
                  <strong>⚖️:</strong> {dog.weight}
                </li>
              )}
              {dog.gender && (
                <li className="dog-profile__detail">
                  <strong>♂️:</strong> {dog.gender}
                </li>
              )}
            </ul>
            {dog.adoptionStatus === "available" && (
              <Link
                to="/apply-to-adopt"
                className="dog-profile__adopt-btn dog-profile__adopt-btn--top"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply To Adopt {dog.name}
              </Link>
            )}
            {dog.adoptionStatus === "adopted" && (
              <div className="dog-profile__adopted-badge">
                This pet has been adopted!
              </div>
            )}
          </div>
        </div>
        {dog.details && (
          <div className="dog-profile__description">
            {dog.details.split("\n\n").map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        )}
        {dog.adoptionStatus === "available" && (
          <a
            href="https://barneysfurryfriends.ca/apply-to-adopt"
            className="dog-profile__adopt-btn dog-profile__adopt-btn--bottom"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply To Adopt {dog.name}
          </a>
        )}
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
