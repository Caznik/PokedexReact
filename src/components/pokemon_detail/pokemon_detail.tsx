import './pokemon_detail.css';
import '../../theme.css';
import { useEffect, useState } from 'react';
import PokemonPicture from '../pokemon-picture/pokemon-picture';
import Tabs from '../tabs/tabs';
import PokemonStats from '../pokemon-stats/pokemon-stats';

function PokemonDetail(props: any) {
    // Deconstruction props
    const { isOpen, onClose, pokemon } = props;

    // States
    const [isVisible, setIsVisible] = useState(isOpen);

    useEffect(() => {
        setIsVisible(isOpen);
    }, [isOpen]);

    // Function to handle closing the modal
    const handleClose = () => {
        onClose(); // Call onClose function passed from parent component
    };

    // DOM functions
    const types = pokemon.types.map(
        (type: any) => {
            let typeName:string = type.type.name;
            return <span key={typeName} className={`${typeName} type-detail`}>{typeName.charAt(0).toUpperCase() + typeName.slice(1)}</span>
        }
    )

    // Tabs
    const tabs = [
        { title: 'Stats', content: <PokemonStats stats={pokemon.stats}/> },
        { title: 'Tab 2', content: <div>Content for Tab 2</div> },
        { title: 'Tab 3', content: <div>Content for Tab 3</div> }
    ];

    return(
        <>
            {isVisible && (
                <div className="modal-overlay" onClick={handleClose}>
                    <div className='modal-sprite-container'>
                        <div className='pokeball'>
                            <div className='pokeball-button'></div>
                            <PokemonPicture sprite={pokemon.sprites.front_default} name={pokemon.name} className="pokemon-sprite"/>
                        </div> 
                    </div>

                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={handleClose}>X</button>
                        <div className="modal-pokemon-basic-info">
                            <div className='modal-pokemon-name-container'>
                                <span>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
                            </div>
                            <div className='modal-pokemon-types-container'>
                                {types}
                            </div>
                        </div>

                        <hr className="modal-separator"/>

                        <Tabs tabs={tabs} />

                    </div>
                </div>
            )}
        </>
    )
}

export default PokemonDetail;
