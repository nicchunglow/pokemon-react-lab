import React from "react";
import "./PokemonCard.css"
import "./pokemonType.js"
import { PokemonType } from "./pokemonType.js";
function PokemonCard({ pokemon }) {
    const { id, name, type, base } = pokemon;
    return (
      <div className="pokemon-card">
              <img 
              className="pokemon-card_image" 
              alt={name} 
              src={process.env.PUBLIC_URL + `/pokemonImage/${id}.png`}/>
        <div className='pokemon-card_name'>{name.english}</div>
        <div> {type.map(t => <PokemonType type={t} />
        )}</div>
        <div> {Object.entries(base).map(seperateBase => {
          return <p className='pokemon-card__base'> {seperateBase[0] + ":"  + seperateBase[1]}</p>
        })}
          </div>
        </div>
    );
  }

  export default PokemonCard;
