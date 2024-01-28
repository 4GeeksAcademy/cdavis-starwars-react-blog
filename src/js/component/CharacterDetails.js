import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { uid } = useParams();
  const [characterDetails, setCharacterDetails] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      const API_URL = `https://www.swapi.tech/api/people/${uid}`;
      const response = await fetch(API_URL);
      const data = await response.json();
      setCharacterDetails(data.result.properties);
    };

    fetchCharacterDetails();
  }, [uid]);

  if (!characterDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
            alt={`Image of ${characterDetails.name}`}
          />
        </div>
        <div className="col-6">
          <h2 className="card-title">{characterDetails.name}</h2>
          <p>Altura: {characterDetails.height}</p>
          <p>Masa: {characterDetails.mass}</p>
          <p>Género: {characterDetails.gender}</p>
          <p>Año de nacimiento: {characterDetails.birth_year}</p>
          <p>Color de cabello: {characterDetails.hair_color}</p>
          <p>Color de piel: {characterDetails.skin_color}</p>
          <p>Color de ojos: {characterDetails.eye_color}</p>
        </div>
      </div>
      
      
      {/* Agrega más detalles según sea necesario */}
    </div>
  );
};

export default CharacterDetails;
