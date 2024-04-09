import './card.css';
import PokemonPicture from '../pokemon-picture/pokemon-picture';
import PokemonCardDescription from '../pokemon-card-description/pokemon-card-description';

function Card(props: any) {

    const { pokemon } = props;

    return(
        <>
            <div className='card'>
                <PokemonPicture sprite={pokemon.sprites.front_default} name={pokemon.name} />
                <PokemonCardDescription name={pokemon.name} />
            </div>
        </>
    )

}

export default Card;