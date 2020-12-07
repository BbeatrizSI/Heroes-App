import React from 'react';
import  PropTypes  from "prop-types";
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
       <Route {...rest} 
        component={ (props) => (
            (isAuthenticated) ? <Component {...props} /> : <Redirect to="/login" />
        )}
        />
    );
};

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PrivateRoute;