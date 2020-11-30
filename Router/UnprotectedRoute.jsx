import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import FullPageLoader from '../Components/Loaders/FullPageLoader';
import { MORE_INFO } from './routes';

const UnprotectedRoute = ({
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
        <Redirect
          to={{
            pathname: `${MORE_INFO}`,
            state: { from: props.location },
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default UnprotectedRoute;

UnprotectedRoute.propTypes = {
  component: PropTypes.func,
  isAuthenticated: PropTypes.bool.isRequired,
  isVerifying: PropTypes.bool.isRequired,
  location: PropTypes.object,
};
