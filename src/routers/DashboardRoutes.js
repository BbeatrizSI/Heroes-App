import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar } from '../components/ui/NavBar';

const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/marvel" component="{ MarvelScreen }"
                </Switch>
            </div>
        </>
    );
};

export default DashboardRoutes;