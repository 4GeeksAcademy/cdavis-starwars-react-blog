import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { Context } from "../store/appContext";

export const Characters = () => {
  const { store, actions } = useContext(Context);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    actions.getCharacters();
    setFavorites(store.favorites); // Actualizar los favoritos al cargar los personajes
  }, [store.favorites]); // Agregar store.favorites como dependencia para actualizar cuando cambie

  const addToFavorites = (character) => {
    // Verificar si el personaje ya está en favoritos
    const isAlreadyFavorite = favorites.some((fav) => fav.uid === character.uid);
    if (!isAlreadyFavorite) {
      setFavorites([...favorites, character]);
    }
  };

  const removeFromFavorites = (character) => {
    const updatedFavorites = favorites.filter((fav) => fav.uid !== character.uid);
    setFavorites(updatedFavorites);
  };

  const isFavorite = (character) => {
    return favorites.some((fav) => fav.uid === character.uid);
  };

  return (
    <div className="text-center carrusel bg-dark d-flex flex-wrap justify-content-around">
      <div className="carrusel">
        {store.characters.map((people, index) => (
          <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }} key={index}>
            {people.uid && (
              <>
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`}
                  className="card-img-top"
                  alt={`Image of ${people.name}`}
                />
                <div className="card-body">
                  <h5 className="card-title">{people.name}</h5>
                  <Link to={`/CharacterDetails/${people.uid}`}>
                    <button type="button" className="btn btn-warning">
                      VER MÁS
                    </button>
                  </Link>
                  
                  <FaHeart
                    className={`heart-icon ${isFavorite(people) ? "heart-icon-filled" : "heart-icon-empty"}`}
                    onClick={() => (isFavorite(people) ? actions.removeFromFavorites(people) : actions.addToFavorites(people) ? "heart-icon-filled" : "heart-icon-empty")}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
