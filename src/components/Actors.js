import React from "react";
import { actors } from "../data";

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <div>
          <h4>Name: {actor.name}{" "}</h4>
          <p>Movies:</p>
          {actor.movies.map(movie => (
            <li>{movie}</li>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Actors;
