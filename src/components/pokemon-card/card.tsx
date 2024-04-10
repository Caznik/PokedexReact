import './card.css';
import PokemonPicture from '../pokemon-picture/pokemon-picture';
import PokemonCardDescription from '../pokemon-card-description/pokemon-card-description';
import { useNavigate } from 'react-router-dom';

function Card(props: any) {
    // Hooks
    const navigate = useNavigate();

    // Props
    const { pokemon } = props;

    // Hook functions
        // Navigate to pokemon detail
    const navigateToDetail = () => {
        navigate(
            "/pokemon/" + pokemon.id, // Path to navigate
            {
                state: { pokemon }
            }
        )
    }

    return(
        <>
            <div className='card' onClick={navigateToDetail}>
                <PokemonPicture sprite={pokemon.sprites.front_default} name={pokemon.name} />
                <PokemonCardDescription name={pokemon.name} />
            </div>
        </>
    )

}

export default Card;