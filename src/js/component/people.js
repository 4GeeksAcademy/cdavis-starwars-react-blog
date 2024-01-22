import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { FaHeart } from "react-icons/fa";
import "../../styles/modal.css"; // Agrega estilos de modal.css (crea un archivo de estilo para el modal)

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

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

  const openModal = (character) => {
    setShowModal(true);
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCharacter(null);
  };

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
            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" type="button" className="btn btn-warning" onClick={() => openModal(people)}>
              VER MÁS
            </button>
            <FaHeart
              className={`heart-icon ${isFavorite(people) ? "heart-icon-filled" : "heart-icon-empty"}`}
              onClick={() => (isFavorite(people) ? removeFromFavorites(people) : addToFavorites(people))}
            />
          </div>
        </div>
      ))}
      </div>

      {/* Modal */}
      {showModal && selectedCharacter && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal fade">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-header">
              <h2>{selectedCharacter.name}</h2>
            </div>
            <div className="modal-body">
              <h3>{selectedCharacter.height}</h3>
              <p>Lorem ipsum</p>
            </div>
            {/* Agrega aquí la información adicional del personaje que deseas mostrar en el modal */}
          </div>
        </div>
      )}

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

export default Characters;
