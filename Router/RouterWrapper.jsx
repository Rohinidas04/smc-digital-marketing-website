import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './ProtectedRoute';
import UnprotectedRoute from './UnprotectedRoute';
import {
  SignUpPage,
  InboxPage,
  DashboardPage,
  UsersPage,
  SignInPage,
  PlanOptions,
} from '../Pages';
import {
  SIGNUP,
  MORE_INFO,
  NUM_OPTIONS,
  INBOX,
  DASHBOARD,
  USERS,
  SIGNIN,
  PLAN_OPTIONS,
} from './routes';
import MoreInfoPage from '../Pages/MoreInfoPage';
import PhoneNumberOptionsPage from '../Pages/PhoneNumberOptionsPage';
import 'react-toastify/dist/ReactToastify.css';

const RouterWrapper = () => {
  const auth = useSelector((state) => state.auth);

  // destructure from auth
  const { isAuthenticated, isVerifying } = auth;

  return (
    <>
      <Router>
        <UnprotectedRoute
          exact
          path={SIGNUP}
          component={SignUpPage}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <UnprotectedRoute
          exact
          path={SIGNIN}
          component={SignInPage}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />

        <Switch>
          <ProtectedRoute
            exact
            path={MORE_INFO}
            component={MoreInfoPage}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />
          <Route path={MORE_INFO} component={MoreInfoPage} />
          <ProtectedRoute
            path={INBOX}
            component={InboxPage}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />
          <ProtectedRoute
            path={DASHBOARD}
            component={DashboardPage}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />

          <ProtectedRoute
            path={USERS}
            component={UsersPage}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />

          <ProtectedRoute
            path={NUM_OPTIONS}
            component={PhoneNumberOptionsPage}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />
          <ProtectedRoute
            path={PLAN_OPTIONS}
            component={PlanOptions}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />
        </Switch>
      </Router>
      <ToastContainer />
    </>
  );
};

export default RouterWrapper;
