import { useEffect, useState } from 'react';
import PokedexHeader from '../header/pokedex_header'
import './pokedex.css'

function Pokedex() {
	// States
	const [pokemonList, setPokemonList] = useState<any[]>([]);
	const [pokemonListDetails, setPokemonListDetails] = useState<any[]>([]);
	const [page, setPage] = useState(0);

	// Variables and constants
	const limit: number = 20;
	
	// Business Functions
	const loadPage = async() => {
		try {
            const offset = page * limit;
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
                .then((response) => response.json());

            setPokemonList(data.results);
            setPokemonListDetails([]); // Clear the details list when changing page
        } catch (error) {
            console.error('Error loading pokemon list:', error);
        }
	}

	const loadPokemonDetails  = async() => {
		try {
            const details = await Promise.all(
                pokemonList.map((pokemonInfo) =>
                    fetch(pokemonInfo.url).then((response) => response.json())
                )
            );

            setPokemonListDetails(details);
        } catch (error) {
            console.error('Error loading pokemon details:', error);
        }
	}

	// Load first page of pokedex when loading app
	useEffect(() => {
		loadPage();
	}, []);

	// Load the data for the pokemon list requested
	useEffect(() => {
		if (pokemonList.length > 0) {
            loadPokemonDetails();
        }
	}, [pokemonList]);


	// DOM functions
	const arrayDataItems = pokemonListDetails.map((pokemonData) => <li key={pokemonData.id}>{pokemonData.name}</li>);

	return (
		<>
			<div className="container">
				<PokedexHeader />

				<div>
					<ul>{arrayDataItems}</ul>
				</div>
			</div>
			
		</>
	)
}

export default Pokedex
