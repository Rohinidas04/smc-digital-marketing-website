import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import FullPageLoader from '../Components/Loaders/FullPageLoader';
import { SIGNIN } from './routes';

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isVerifying ? (
        <FullPageLoader />
      ) : isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: `${SIGNIN}`,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  component: PropTypes.func,
  isAuthenticated: PropTypes.bool.isRequired,
  isVerifying: PropTypes.bool.isRequired,
  location: PropTypes.object,
};
