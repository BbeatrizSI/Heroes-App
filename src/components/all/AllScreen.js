import React from 'react';
import HeroList from '../heroes/HeroList';

const AllScreen = () => {
    return (
        <div>
            <h1>All Heroes</h1>
            <hr />
            <HeroList publisher='' />
        </div>
    );
};

export default AllScreen;