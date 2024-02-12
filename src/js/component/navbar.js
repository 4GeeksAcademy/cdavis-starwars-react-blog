import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [dropdownOpen, setDropdownOpen] = useState(false);
  
	
  
	return (
	  <nav className="navbar navbar-dark bg-dark mb-3">
		<Link to="/">
		  <span className="navbar-brand mb-0 h1">
			<img className="img-fluid" width={"100px"} src="https://i.pinimg.com/originals/b6/af/5a/b6af5aeff0ee43a4253fc70c167bb6db.png" alt="Logo"></img>
		  </span>
		</Link>
		<div className="btn-group dropstart">
		  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
			Favoritos {store.favorites.length}
		  </button>
		  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
			{store.favorites.map((favorite, index) => (
			  <li key={index} className="dropdown-item">
				{favorite.name}
				<button onClick={() => actions.removeFromFavorites(favorite)} className="btn btn-danger btn-sm ml-2">
				  Remover
				</button>
			  </li>
			))}
		  </ul>
		</div>
	  </nav>
	);
  };
  