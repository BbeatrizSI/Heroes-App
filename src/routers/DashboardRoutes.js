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
                    <Route exact path="/heroes-app/marvel" component={ MarvelScreen } />
                    <Route exact path="/heroes-app/hero/:heroId" component={ HeroScreen } />
                    <Route exact path="/heroes-app/dc" component={ DcScreen } />
                    <Route exact path="/heroes-app/search" component={ SearchScreen } />

                    <Redirect to="/heroes-app/marvel" />
                </Switch>
            </div>
        </>
    );
};

export default DashboardRoutes;