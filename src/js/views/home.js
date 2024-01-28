import React from "react";
import "../../styles/home.css";

import Characters from "../component/people";
import Starships from "../component/starships";
import Planet from "../component/planets";
import Species from "../component/species";

export const Home = () => {
  return (


    <div className="scroll-container text-white bg-dark mt-5 overflow-auto">
      <div className="card d-inline-block">
        <h2 className="text-warning bg-dark p-5">PERSONAJES</h2>
        <Characters />
      </div>
      <div className="card d-inline-block">
        <h2 className="text-warning bg-dark p-5">NAVES</h2>
        <Starships />
      </div>
      <div className="card d-inline-block">
        <h2 className="text-warning bg-dark p-5">PLANETAS</h2>
        <Planet />
      </div>
      <div className="card d-inline-block">
        <h2 className="text-warning bg-dark p-5">ESPECIES</h2>
        <Species />
      </div>
    </div>
  );
};

export default Home;
