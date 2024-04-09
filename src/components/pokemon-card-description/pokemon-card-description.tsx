import './pokemon-card-description.css';

function PokemonCardDescription(props: any) {

    const { name } = props;

    let nameSanetized = () => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return(
        <>
            <div>
                <span className='pokemon_name'>{nameSanetized()}</span>
            </div>
        </>
    )

}

export default PokemonCardDescription;