import './pokemon-picture.css';

function PokemonPicture(props: any) {

    const { sprite, name } = props;

    return(
        <>
            <div className='sprite-container'>
                <img src={sprite} alt={name} className='sprite'></img>
            </div>
        </>
    )

}

export default PokemonPicture;