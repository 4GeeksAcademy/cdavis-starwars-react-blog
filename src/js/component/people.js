import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom"; // Asegúrate de importar Link desde 'react-router-dom'
import { FaHeart } from "react-icons/fa";

export const Characters = () => {

  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const openNewTab = (uid) => {
    window.open(`/CharacterDetails/${uid}`, '_blank');
  };

  const getCharacters = async () => {
    const API_URL = "https://www.swapi.tech/api/people";
    const response = await fetch(API_URL);
    const data = await response.json();
    setCharacters(data.results);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const addToFavorites = (character) => {
    setFavorites([...favorites, character]);
  };

  const removeFromFavorites = (character) => {
    const updatedFavorites = favorites.filter((fav) => fav.uid !== character.uid);
    setFavorites(updatedFavorites);
  };

  const isFavorite = (character) => favorites.some((fav) => fav.uid === character.uid);
  
  

  return (
    <div className="text-center carrusel bg-dark d-flex flex-wrap justify-content-around">
      <div className="carrusel">
      {characters.map((people, index) => (
        <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }} key={index}>
          {people.uid && (
            <>
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`}
                className="card-img-top"
                alt={`Image of ${people.name}`}
              />
            </>
          )}
          <div className="card-body">
            <h5 className="card-title">{people.name}</h5>
            <Link to={`/CharacterDetails/${people.uid}`}>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => openNewTab(people.uid)}
              >
                VER MÁS
              </button>
            </Link>
            <FaHeart
              className={`heart-icon ${isFavorite(people) ? "heart-icon-filled" : "heart-icon-empty"}`}
              onClick={() => (isFavorite(people) ? removeFromFavorites(people) : addToFavorites(people))}
            />
          </div>
        </div>
      ))}
      </div>

      <div className="text-center mt-5">
        <h2>Favorites</h2>
        {favorites.map((fav, index) => (
          <p key={index}>{fav.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Characters;
