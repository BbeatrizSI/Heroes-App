import React from 'react';
import  PropTypes  from "prop-types";
import { Route, Redirect } from 'react-router-dom';


const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
       <Route {...rest} 
        component={ (props) => (
            (!isAuthenticated) ? <Component {...props} /> : <Redirect to="/" /> 
        )}
        />
    );
};

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PublicRoute;