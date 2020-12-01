import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import LoginScreen from '../components/login/LoginScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/NavBar';
import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {
    return (
        <Router>
        <div>
            <Switch>
                <Route exact path="/login" component={ LoginScreen } />
                <Route path="/" component={ DashboardRoutes } />
            </Switch>
        </div>
      </Router>
    );
};

export default AppRouter;