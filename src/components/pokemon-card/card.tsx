import './card.css';
import PokemonPicture from '../pokemon-picture/pokemon-picture';
import PokemonCardDescription from '../pokemon-card-description/pokemon-card-description';
import { useState } from 'react';
import PokemonDetail from '../pokemon_detail/pokemon_detail';

function Card(props: any) {
    // Hooks
    const [modalOpen, setModalOpen] = useState(false);

    // Props
    const { pokemon } = props;

    const openModal = () => {
        console.log('Opening modal...');
        setModalOpen(true);
    };
    
    const closeModal = () => {
        console.log('Closing modal...');
        setModalOpen(false);
    };

    return(
        <>
            <div className='card' onClick={openModal}>
                <PokemonPicture sprite={pokemon.sprites.front_default} name={pokemon.name} />
                <PokemonCardDescription name={pokemon.name} />

                <PokemonDetail isOpen={modalOpen} onClose={closeModal} pokemon={pokemon}/>
            </div>
        </>
    )

}

export default Card;