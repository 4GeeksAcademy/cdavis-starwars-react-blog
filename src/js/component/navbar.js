import React, { useState } from "react";
import { Link } from "react-router-dom";
import Characters from "./people";
 // Make sure to import Characters if it's a separate component


export const Navbar = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
  	const [favorites, setFavorites] = useState([]);
  
	const toggleDropdown = () => {
	  setDropdownOpen(!dropdownOpen);
	};
  
	const addToFavorites = (character) => {
	  setFavorites([...favorites, character]);
	};
  
	const removeFromFavorites = (character) => {
	  const updatedFavorites = favorites.filter((fav) => fav.uid !== character.uid);
	  setFavorites(updatedFavorites);
	};
  
	return (
	  <nav className="navbar navbar-dark bg-dark mb-3">
		<Link to="/">
		  <span className="navbar-brand mb-0 h1">
			<img className="img-fluid" width={"100px"} src="https://i.pinimg.com/originals/b6/af/5a/b6af5aeff0ee43a4253fc70c167bb6db.png" alt="Logo"></img>
		  </span>
		</Link>
		<div className="dropdown">
			<button onClick={toggleDropdown} className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
			Favoritos {favorites.length}
			</button>
			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
			{favorites.map((fav, index) => (
				<li key={index}>
				<p>{fav.name}</p>
				</li>
			))}
			</ul>
		</div>
		
	  </nav>
	);
  };