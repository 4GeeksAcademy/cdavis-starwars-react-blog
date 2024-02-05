import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { FaHeart } from "react-icons/fa"; // Importa el ícono del corazón

export const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const getPlanets = async () => {
    const API_URL = "https://www.swapi.tech/api/planets";
    const response = await fetch(API_URL);
    const data = await response.json();
    setPlanets(data.results);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const addToFavorites = (planets) => {
    setFavorites([...favorites, planets]);
  };

  const removeFromFavorites = (planets) => {
    const updatedFavorites = favorites.filter((fav) => fav.uid !== planets.uid);
    setFavorites(updatedFavorites);
  };

  const isFavorite = (planets) => favorites.some((fav) => fav.uid === planets.uid);

  return (
    <div className="text-center carrusel bg-dark d-flex flex-wrap justify-content-around">
      <div className="carrusel">
      {planets.map((planets, index) => (
        <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }} key={index}>
          {planets.uid && (
            <>
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${planets.uid}.jpg`}
                className="card-img-top"
                alt={`Image of ${planets.name}`}
              />
            
            </>
          )}
          <div className="card-body">
            <h5 className="card-title">{planets.name}</h5>
            
           
          </div>
        </div>
      ))}
      </div>
      
      
      
      
      
    </div>
  );
};

export default Planets;
