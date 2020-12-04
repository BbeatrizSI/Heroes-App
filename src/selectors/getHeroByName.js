import { heroes } from "../data/heroes";

const getHeroByName = (name = '') => {

    if(name === '') {
        return [];
    }

    name = name.toLocaleLowerCase();
    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes(name));
};

export default getHeroByName;