import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { FaHeart } from "react-icons/fa"; // Importa el ícono del corazón

export const Species = () => {
  const [species, setSpecies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const getspecies = async () => {
    const API_URL = "https://www.swapi.tech/api/species";
    const response = await fetch(API_URL);
    const data = await response.json();
    setSpecies(data.results);
  };

  useEffect(() => {
    getspecies();
  }, []);

  const addToFavorites = (species) => {
    setFavorites([...favorites, species]);
  };

  const removeFromFavorites = (species) => {
    const updatedFavorites = favorites.filter((fav) => fav.uid !== species.uid);
    setFavorites(updatedFavorites);
  };

  const isFavorite = (species) => favorites.some((fav) => fav.uid === species.uid);

  return (
    <div className="text-center carrusel bg-dark d-flex flex-wrap justify-content-around">
      <div className="carrusel">
      {species.map((species, index) => (
        <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }} key={index}>
          {species.uid && (
            <>
              <img
                src={`https://starwars-visualguide.com/assets/img/species/${species.uid}.jpg`}
                className="card-img-top"
                alt={`Image of ${species.name}`}
              />
            
            </>
          )}
          <div className="card-body">
            <h5 className="card-title">{species.name}</h5>
            
            {/* Corazón que cambia de color según el estado */}
            <FaHeart
              className={`heart-icon ${isFavorite(species) ? "heart-icon-filled" : "heart-icon-empty"}`}
              onClick={() => (isFavorite(species) ? removeFromFavorites(species) : addToFavorites(species))}
            />
          </div>
        </div>
      ))}
      </div>
      
      {/* Lista de favoritos */}
      <div className="text-center mt-5">
        <h2>Favorites</h2>
        {favorites.map((fav, index) => (
          <p key={index}>{fav.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Species;
