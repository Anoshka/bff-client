import { useEffect, useState } from "react";
import { getAllAdoptables } from "../../services/adoptablesServices";
import AdoptableCard from "../../components/AdoptableCard/AdoptableCard";
import "./AdoptablesPage.scss";

const Adoptables = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdoptables = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log("📄 AdoptablesPage: Starting fetch...");
        const adoptables = await getAllAdoptables();
        console.log(
          "📄 AdoptablesPage: Received",
          adoptables?.length || 0,
          "adoptables"
        );

        if (adoptables && adoptables.length > 0) {
          setDogs(adoptables);
          setError(null);
        } else {
          setDogs([]);
          // Don't set error if it's just empty - that's valid
          console.log("📄 AdoptablesPage: No adoptables found");
        }
      } catch (err) {
        console.error("❌ AdoptablesPage: Error fetching adoptables:", err);
        setError("Failed to load adoptables. Please try again later.");
        setDogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAdoptables();
  }, []);

  if (loading) {
    return (
      <div className="adoptables-grid__loading">Loading adoptables...</div>
    );
  }

  if (error) {
    return <div className="adoptables-grid__error">{error}</div>;
  }

  if (dogs.length === 0) {
    return (
      <div className="adoptables-grid__empty">
        No adoptables available at this time.
      </div>
    );
  }

  return (
    <div className="adoptables-grid">
      {dogs.map((dog) => (
        <AdoptableCard
          key={dog._id || dog.id}
          dog={dog}
          className="adoptables-grid__card"
        />
      ))}
    </div>
  );
};

export default Adoptables;
