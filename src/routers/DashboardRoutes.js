import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/NavBar';

const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-3">
                <Switch>
                    <Route path="/marvel" component={ MarvelScreen } />
                    <Route path="/hero/:heroId" component={ HeroScreen } />
                    <Route path="/dc" component={ DcScreen } />
                    <Route path="/search" component={ SearchScreen } />

                    {/* <Redirect to="/marvel" /> */}
                </Switch>
            </div>
        </>
    );
};

export default DashboardRoutes;