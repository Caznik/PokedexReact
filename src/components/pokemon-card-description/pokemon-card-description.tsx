import './pokemon-card-description.css';

function PokemonCardDescription(props: any) {

    const { name } = props;

    return(
        <>
            <div>
                <span className='pokemon_name'>{name}</span>
            </div>
        </>
    )

}

export default PokemonCardDescription;