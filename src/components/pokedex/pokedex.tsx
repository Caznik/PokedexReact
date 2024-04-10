import { useEffect, useState } from 'react';
import './pokedex.css'
import PokedexHeader from '../pokedex_header/pokedex_header'
import PokedexBody from '../pokedex_body/pokedex_body';
import Pagination from '../paginator/pagination';

function Pokedex() {
	// States
	const [totalPokemonCount, setTotalPokemonCount] = useState<number>(0);
	const [pokemonList, setPokemonList] = useState<any[]>([]);
	const [pokemonListDetails, setPokemonListDetails] = useState<any[]>([]);
	const [page, setPage] = useState<number>(0);

	// Variables and constants
	const maxPokemonId = 1025;
	const limit: number = 20;
	
	// Business Functions
	const loadPage = async() => {
		try {
            let offset = page * limit;
			let pageLimit = ((limit + offset) < maxPokemonId) ? limit : (maxPokemonId - offset)

            const data = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${pageLimit}`)
                .then((response) => response.json());

			const total = Math.min(data.count, maxPokemonId); // Limit total count
			setTotalPokemonCount(total);
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
	}, [page]);

	// Load the data for the pokemon list requested
	useEffect(() => {
		if (pokemonList.length > 0) {
            loadPokemonDetails();
        }
	}, [pokemonList]);

	return (
		<>
			<div className="container">
				<PokedexHeader />
				<PokedexBody listOfItems={pokemonListDetails} />
				
				<Pagination currentPage={page} totalItems={totalPokemonCount} itemsPerPage={limit} onPageChange={setPage} />
			</div>
			
		</>
	)
}

export default Pokedex;
