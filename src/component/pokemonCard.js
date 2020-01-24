import React from "react";
import "./PokemonCard.css"
import "./PokemonType.js"
import { PokemonType } from "./PokemonType.js";
import { Link } from 'react-router-dom'

function PokemonCard({ pokemon }) {
    const { id, name, type, base } = pokemon;
    return (
      <Link to={`/pokemon/${id}`}>
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
        </Link>
    );
  }

  export default PokemonCard;
