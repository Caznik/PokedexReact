import StatsGraph from '../stats-graph/stats-graph';
import './pokemon-stats.css';

function PokemonStats(props: any) {
    // Deconstruction props
    const { stats } = props;

    // DOM functions
        // Stats
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

                <div className='stats-graph'>
                    <StatsGraph stats={stats} />
                </div>
            </div>
        </>
    )
}

export default PokemonStats;