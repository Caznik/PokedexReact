import Ability from '../ability/ability';
import './abilities.css';

function Abilities(props: any) {

    const { abilities } = props;

    const abilityItems = abilities.map(
        (data: any, index: number) => {
            return <Ability key={data.name + index.toString()} data={data} />
        }
    );

    return(
        <>
            <div className='abilities-container'>
                {abilityItems}
            </div>
        </>
    )
}

export default Abilities;