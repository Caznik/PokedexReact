import './pokemon-stats.css';

function PokemonStats(props: any) {

    const { stats } = props;

    const pokemonStats = stats.map(
        (stat: any) => {
            let statName = stat.stat.name.toUpperCase();
            let baseStat = stat.base_stat;

            return (
            <div key={stat.stat.name}>
                <div className='stat'>{statName}:{baseStat}</div>
            </div>)
        }
    )

    return(
        <>
            <div className='stats-container'>
                <div className='stats'>
                    {pokemonStats}
                </div>
            </div>
        </>
    )
}

export default PokemonStats;