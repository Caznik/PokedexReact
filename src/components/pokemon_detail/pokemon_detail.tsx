import { useLocation } from 'react-router-dom';
import './pokemon_detail.css';

function PokemonDetail() {
    // Hooks
    const { state } = useLocation();

    // Deconstruction navigate-location
    const {pokemon} = state;

    return(
        <>
            <div>
                {pokemon.id} - {pokemon.name}
            </div>
        </>
    )
}

export default PokemonDetail;