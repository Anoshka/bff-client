import React, { useEffect, useState } from "react";
import { getAllAdoptables } from "../../services/adoptablesServices";
import AdoptableCard from "../../components/AdoptableCard/AdoptableCard";
import "./AdoptablesPage.scss";

const Adoptables = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    getAllAdoptables().then(setDogs);
  }, []);

  return (
    <div className="adoptables-grid">
      {dogs.map((dog) => (
        <AdoptableCard
          key={dog.id}
          dog={dog}
          className="adoptables-grid__card"
        />
      ))}
    </div>
  );
};

export default Adoptables;
