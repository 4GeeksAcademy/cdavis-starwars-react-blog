import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { FaHeart } from "react-icons/fa"; // Importa el ícono del corazón

export const Starships = () => {
  const [starships, setStarships] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const getstarships = async () => {
    const API_URL = "https://www.swapi.tech/api/starships";
    const response = await fetch(API_URL);
    const data = await response.json();
    setStarships(data.results);
  };

  useEffect(() => {
    getstarships();
  }, []);

  const addToFavorites = (starships) => {
    setFavorites([...favorites, starships]);
  };

  const removeFromFavorites = (starships) => {
    const updatedFavorites = favorites.filter((fav) => fav.uid !== starships.uid);
    setFavorites(updatedFavorites);
  };

  const isFavorite = (starships) => favorites.some((fav) => fav.uid === starships.uid);

  return (
    <div className="text-center carrusel bg-dark d-flex flex-wrap justify-content-around">
      <div className="carrusel">
      {starships.map((starships, index) => (
        <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }} key={index}>
          {starships.uid && (
            <>
              <img
                src={`https://starwars-visualguide.com/assets/img/starships/${starships.uid}.jpg`}
                className="card-img-top"
                alt={`Image of ${starships.name}`}
              />
            
            </>
          )}
          <div className="card-body">
            <h5 className="card-title">{starships.name}</h5>
            
            
          </div>
        </div>
      ))}
      </div>
      
      
      
    </div>
  );
};

export default Starships;
