import React from 'react';
import { List, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUser } from '../../redux/auth/auth.actions';
import Speedometer from '../../assets/icons/speedometer-outline@2x.png';
import Chatbubbles from '../../assets/icons/chatbubbles-outline@2x.png';
import People from '../../assets/icons/people-outline@2x.png';
import Megaphone from '../../assets/icons/megaphone-outline@2x.png';
import Key from '../../assets/icons/key-outline@2x.png';
import Refresh from '../../assets/icons/refresh-outline@2x.png';
import Build from '../../assets/icons/build-outline@2x.png';
import Settings from '../../assets/icons/settings-outline@2x.png';
import Analytics from '../../assets/icons/analytics-outline@2x.png';
import Body from '../../assets/icons/body-outline@2x.png';
import Ellipse from '../../assets/icons/Ellipse 2@2x.png';

import {
  placeholder,
  sidebarSelectionWrapper,
  iconTitleWrapper,
  icons,
  iconWrapper,
  link,
  number,
} from './SideNavBar.module.scss';

import PropTypes from 'prop-types';

const navPoints = [
  {
    icon: Speedometer,
    title: 'Dashboard',
    path: '/dashboard',
  },
  {
    icon: Chatbubbles,
    title: 'Inbox',
    path: '/inbox',
  },
  {
    icon: People,
    title: 'Users',
    path: '/users',
  },
  {
    icon: Megaphone,
    title: 'Campaigns',
    path: '',
  },
  {
    icon: Key,
    title: 'keywords',
    path: '',
  },
  {
    icon: Refresh,
    title: 'Sequences',
    path: '',
  },
  {
    icon: Build,
    title: 'Tools',
    path: '',
  },
  {
    icon: Settings,
    title: 'Settings',
    path: '',
  },
  {
    icon: Analytics,
    title: 'Analytics',
    path: '',
  },
  {
    icon: Body,
    title: 'Referrals',
    path: '',
  },
];

const renderListItems = () => {
  const items = [];

  navPoints.forEach((item, i) => {
    if (i !== 0 && i % 3 === 0) {
      items.push(<div key={`placeholder-${i}`} className={placeholder}></div>);
    }

    items.push(
      <List.Item
        selection
        verticalAlign="middle"
        className={sidebarSelectionWrapper}
        key={item.title}
      >
        <List.Content className={iconTitleWrapper}>
          <List.Icon
            className={icons}
            as={Image}
            verticalAlign="middle"
            src={item.icon}
          />
          <List.Content>
            <Link to={item.path} className={link}>
              {item.title}
            </Link>
          </List.Content>
        </List.Content>
        <List.Content>
          <List.Icon as={Image} verticalAlign="middle" src={Ellipse} />
        </List.Content>
      </List.Item>
    );
  });

  return items;
};

const SideNavBar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const { user } = auth;

  let phone;

  if (user.avaliablePhone) {
    // TODO: FIX this
    phone = user.avaliablePhone[0].phone_number;
    // phone = '';
  }

  phone = null;

  phone = phone ? phone[0].phone_number : '';

  return (
    <>
      {/* <h3>+1 (833) 744-0417 </h3> */}
      <List size="large">
        <List.Item className={number}>
          <List.Content>{phone}</List.Content>
        </List.Item>
        {renderListItems()}
      </List>
    </>
  );
};

function mapStateToProps(state) {
  const { auth } = state;

  return {
    phone: auth.user.avaliablePhone,
  };
}

SideNavBar.propTypes = {
  phone: PropTypes.array,
};

export default SideNavBar;
