import React from 'react';
import pokemonData from '../pokemon/pokemon';
// import {withRouter} from "react-router-dom"

const PokemonDetailsPage = (props) => {
	const pokemonId = props.match.params.pokemonId;
	const currentPokemonData = pokemonData.find((pokemon) => pokemon.id === Number(pokemonId));
	console.log(currentPokemonData);
	return (
		<div>
			<img alt={pokemonId} src={`${process.env.PUBLIC_URL}/pokemonImage/${pokemonId}.png`} />
			<h1>{currentPokemonData.name.english}</h1>
		</div>
	);
};

export default PokemonDetailsPage;
