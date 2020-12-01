import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher';
import HeroCard from './HeroCard';

const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="card-columns">
            {
                heroes.map(hero => (
                    <HeroCard key= {hero.id} {...hero} />
                ))
            }
            
        </div>
    );
};

export default HeroList;