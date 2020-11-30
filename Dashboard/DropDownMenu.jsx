import React from 'react';
import { useDispatch } from 'react-redux';
import { Dropdown, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Ivana from '../../assets/icons/ivana-cajina-_7LbC5J-jw4-unsplash@2x.png';
import { NUM_OPTIONS, PLAN_OPTIONS } from '../../Router/routes';
import { signOutUser } from '../../redux/auth/auth.actions';

const friendOptions = [
  {
    key: 'Phone Number Options',
    text: 'Phone Number Options',
    value: 'Phone Number Options',
    route: NUM_OPTIONS,
  },
  {
    key: 'Plan Options',
    text: 'Plan Options',
    value: 'Plan Options',
    route: PLAN_OPTIONS,
  },
];

const trigger = (
  <span>
    <Image avatar src={Ivana} />
  </span>
);

const DropDownMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signOutUser());
  };

  return (
    <Dropdown direction="left" trigger={trigger}>
      <Dropdown.Menu>
        {friendOptions.map((option) => {
          // console.log(option);
          return (
            <Dropdown.Item
              as={Link}
              key={option.value}
              {...option}
              to={option.route}
            />
          );
        })}
        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDownMenu;
