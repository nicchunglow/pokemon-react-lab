import React from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import ReactLoading from 'react-loading'
// import pokemonData from '../pokemon/pokemon';

// `1. change this to a class component
// 2. add inputbox in this file
// 3. update inputVal from input box (event) => this.setState({val: event.target.value})
// 4. use filter to filter the pokemonData based on the inputVal
// pokemonData.filter(p => p.startsWith(this.state.inputVal))
// 5. when inputVal is "" do not filter, when inputVal is not "", do the filter

class PokemonGallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			pokemonData: [],
			isloading : true
		};
	}

	componentDidMount() {
		axios('https://us-central1-pokedex-23fb6.cloudfunctions.net/app/pokemonData')
			.then((res) => {
				this.setState({
					pokemonData: res.data,
					isloading : false
				});
			})
			.catch(() =>
				this.setState({
					errorMessage: 'GG liao',
					isloading : false
				})
			);
	}

	handleChange = (event) => {
		this.setState({
			value: event.target.value
		});
	};

	render() {
		const filteredPokemon = this.state.pokemonData.filter((aPokemon) =>
			aPokemon.name.english.toLowerCase().startsWith(this.state.value.toLowerCase())
		);

		return (
			<div>
				{!!this.state.isloading && <ReactLoading />}
				Search <input type="text" value={this.state.value} onChange={this.handleChange} />
				<div className="pokemon-gallery">
					{filteredPokemon.map((p) => {
						return <PokemonCard key={p.id} pokemon={p} />;
					})}
					{!!this.state.errorMessage && <div>{this.state.errorMessage}</div>}
				</div>
			</div>
		);
	}
}
export default PokemonGallery;
