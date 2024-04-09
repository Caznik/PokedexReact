import './pokedex_body.css';
import Card from '../pokemon-card/card';

function PokedexBody(props: any) {

    const { listOfItems } = props;

    // DOM functions
    const cardList = listOfItems.map(
        (pokemonData:any) => <Card key={pokemonData.id} pokemon={pokemonData}/>
    );

    return (
		<>
			<div className="body-container">
                {cardList}
			</div>
		</>
	)
}

export default PokedexBody;