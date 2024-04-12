import { useEffect, useState } from 'react';
import './ability.css';

function Ability(props: any) {
    // States
    const [abilityState, setAbilityState] = useState({name: "", description: ""});

    // Props
    const { data } = props;

    // API call to obtain ability info
    const fetchData = async() => {
		try {
            const item = await fetch(data.ability.url).then((response) => response.json());
			const enAbility = item.effect_entries.filter((entry: any) => entry.language.name == 'en')[0]
            
            let name = data.ability.name.charAt(0).toUpperCase() + data.ability.name.slice(1);
            let ability = {name: name, description: enAbility.effect};
            setAbilityState(ability);
        } catch (error) {
            console.error('Error loading pokemon list:', error);
        }
	}

    useEffect(() => {
        fetchData();
    }, [data]);


    return(
        <>
            <div className='ability-container'>
                <div className='ability-name'>{abilityState.name}</div>
                <div className='ability-description'>{abilityState.description}</div>
            </div>
        </>
    )
}

export default Ability;