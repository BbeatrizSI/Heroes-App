import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher';
import HeroCard from './HeroCard';
import { heroes } from "../../data/heroes";

const HeroList = ({ publisher }) => {


    const allHeroes = heroes;
    const heroesList = useMemo( () => getHeroesByPublisher(publisher), [publisher]);
    
     

    

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {(publisher) ?
                heroesList.map(hero => (
                    <HeroCard key= {hero.id} {...hero} />
                ))
                :
                allHeroes.map(hero => (
                    <HeroCard key= {hero.id} {...hero} />
                ))
            }
            
        </div>
    );
};

export default HeroList;