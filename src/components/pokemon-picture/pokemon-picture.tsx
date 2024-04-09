import './pokemon-picture.css';

function PokemonPicture(props: any) {

    const { sprite, name } = props;

    return(
        <>
            <div>
                <img src={sprite} alt={name}></img>
            </div>
        </>
    )

}

export default PokemonPicture;