import React from "react";
import "./pokemonType.css"

const getTypeClassName = (type) =>{
switch(type.toLowerCase()){
    case "fire" :
        return "fire"
    case "water" :
        return "water"
    case "grass" :
        return "grass"
    default :
        return "default"
}

}
export const PokemonType = ({type}) => 
{
    return <span className={`pokemon-card__type
        ${getTypeClassName(type)}`}>{type}</span>
}
