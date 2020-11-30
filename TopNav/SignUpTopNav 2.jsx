import React from 'react';
import { List, Image } from 'semantic-ui-react';
import messageIcon from '../../assets/icons/messageIcon.png';

import { list, listItem, email, logOut } from './SignUpTopNav.module.scss';

const SignUpTopNav = () => {
  return (
    <List horizontal className={list}>
      <List.Item as="a" className={`${listItem} ${email}`}>
        2smart@gmail.com
      </List.Item>
      <List.Item as="a" className={`${listItem} ${logOut}`}>
        Log out
      </List.Item>
      <List.Item as="a" className={listItem}>
        <Image src={messageIcon} />
      </List.Item>
    </List>
  );
};

export default SignUpTopNav;
