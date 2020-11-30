import React from 'react';
import { List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import CreditMeter from '../CreditMeter/CreditMeter';
import Ivana from '../../assets/icons/ivana-cajina-_7LbC5J-jw4-unsplash@2x.png';
import DropdownMenu from './DropDownMenu';
import {
  title,
  headerWrapper,
  progress,
  rightCorner,
  icons,
  label,
  question,
} from './DashboardHeader.module.scss';

const Header = ({ headerTitle }) => {
  return (
    <List horizontal className={headerWrapper}>
      <List.Item>
        <List.Header className={title}>{headerTitle}</List.Header>
      </List.Item>
      <List.Item className={rightCorner}>
        <CreditMeter
          totalCredits={50}
          used={20}
          classN={progress}
          size={'small'}
          labelClass={label}
        />
        <List.Icon
          className={question}
          size="large"
          name="question circle outline"
        ></List.Icon>
        {/* <List.Icon className={icons} name="user secret"></List.Icon> */}
        <DropdownMenu />
        {/* <img className={icons} src={Ivana} />  */}
      </List.Item>
    </List>
  );
};

Header.propTypes = {
  headerTitle: PropTypes.string,
};

export default Header;
