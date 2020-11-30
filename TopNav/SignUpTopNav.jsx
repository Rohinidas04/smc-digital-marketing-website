import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { signOutUser } from '../../redux/auth/auth.actions';
import messageIcon from '../../assets/icons/messageIcon.png';
import { SIGNIN, SIGNUP } from '../../Router/routes';
import { list, listItem, email, logOut } from './SignUpTopNav.module.scss';

const SignUpTopNav = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const { isAuthenticated, user } = auth;

  const handleLogout = () => {
    dispatch(signOutUser());
  };
  return (
    <List horizontal className={list}>
      {isAuthenticated ? (
        <>
          <List.Item as="a" className={`${listItem} ${email}`}>
            {user.email}
          </List.Item>
          <List.Item
            as={Button}
            className={`${listItem} ${logOut}`}
            onClick={handleLogout}
          >
            Log out
          </List.Item>
        </>
      ) : (
        <>
          <List.Item as={Link} to={SIGNIN} className={`${listItem} ${email}`}>
            Sign In
          </List.Item>
          <List.Item as={Link} to={SIGNUP} className={`${listItem} ${email}`}>
            Sign Up
          </List.Item>
        </>
      )}

      <List.Item as="a" className={listItem}>
        <Image src={messageIcon} />
      </List.Item>
    </List>
  );
};

export default SignUpTopNav;
