import React from "react";
import pokemonData from '../pokemon/pokemon';
import PokemonCard from './pokemonCard';


export default () =>{
    return <div className='pokemon-gallery'> 
        {pokemonData.map(p => {
            return <PokemonCard pokemon = {p} />;
        })}
    </div>
}