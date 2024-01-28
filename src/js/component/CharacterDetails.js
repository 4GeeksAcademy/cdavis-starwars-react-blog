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
      <h2>{characterDetails.name}</h2>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
        alt={`Image of ${characterDetails.name}`}
      />
      <p>Height: {characterDetails.height}</p>
      <p>Mass: {characterDetails.mass}</p>
      {/* Agrega más detalles según sea necesario */}
    </div>
  );
};

export default CharacterDetails;
