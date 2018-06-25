import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withAuthentication } from '../components/hoc';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
            (isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                        pathname: '/login',
                        // eslint-disable-next-line react/prop-types
                        state: { from: props.location },
                    }}
              />
            ))
        }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default withAuthentication(PrivateRoute);
