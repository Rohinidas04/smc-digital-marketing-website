import React, { useState } from 'react';
import { Segment, List, Input, Menu } from 'semantic-ui-react';
import {
  clearPadding,
  clearMargin,
  clearBorderRadiu,
  clearBorder,
  textWrapper,
  clearLeftBorder,
  noScrollBar,
  alignCenter,
  listMenuWrapper,
  listSearchWrapper,
} from './UsersPage.module.scss';

import ContactHeader from './ContactHeader';
import ContactList from './ContactList';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  deleteContact,
  deleteSegment,
  toggleZoomList,
} from '../../redux/usersPage/usersPage.action';

const centerTextWrapper = [
  textWrapper,
  clearLeftBorder,
  noScrollBar,
  alignCenter,
];
const ContactsMangament = ({ contactList, segmentList, userID, dispatch }) => {
  const [activeItem, setActiveItem] = useState('Lists');
  const [searchResult, setSearchResult] = useState();
  const [loading, setLoading] = useState(true);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  // const handleSearchChange = (event) => {
  //   setSearchValue(event.target.value);
  //   const value = event.target.value;
  //   setLoading(true);
  //   const escapeRegExp = (string) => {
  //     return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  //   };
  //   setTimeout(() => {
  //     if (value.length === 0) {
  //       setLoading(false);
  //       setSearchResult();
  //       return;
  //     }

  //     const re = new RegExp(escapeRegExp(value), 'i');
  //     const isMatch = (result) => re.test(result.name) || re.test(result.phone);

  //     setSearchResult(clientList.filter(isMatch));
  //   }, 300);
  // };

  const handleContactListDelete = (contactListID) => {
    dispatch(deleteContact(userID, contactListID));
  };

  const handleSegmenttDelete = (segmentID) => {
    dispatch(deleteSegment(userID, segmentID));
  };

  const handleContactListZoom = (contactListID) => {
    dispatch(toggleZoomList({ type: 'contact', id: contactListID }));
  };

  const renderSwitch = (activeItem) => {
    switch (activeItem) {
      case 'Lists':
        return (
          <ContactList
            listOption={contactList}
            handleDelete={handleContactListDelete}
            handleZoom={handleContactListZoom}
          ></ContactList>
        );
      case 'Segments':
        return (
          <ContactList
            listOption={segmentList}
            handleDelete={handleSegmenttDelete}
          ></ContactList>
        );
    }
  };

  return (
    <>
      <Segment.Group
        horizontal
        className={[clearMargin, clearBorderRadiu, clearBorder].join(' ')}
      >
        <ContactHeader />
      </Segment.Group>
      <Segment.Group horizontal className={clearBorder}>
        <Segment className={listMenuWrapper}>
          <Menu text>
            <Menu.Item
              name="Lists"
              active={activeItem === 'Lists'}
              onClick={handleItemClick}
            >
              Lists
            </Menu.Item>

            <Menu.Item
              name="Segments"
              active={activeItem === 'Segments'}
              onClick={handleItemClick}
            >
              Segments
            </Menu.Item>
          </Menu>
        </Segment>
        <Segment className={listSearchWrapper}>
          <Input
            icon="search"
            iconPosition="left"
            size="big"
            placeholder="Filter Lists"
          ></Input>
        </Segment>
      </Segment.Group>
      <Segment className={[clearPadding, clearBorderRadiu].join(' ')}>
        {renderSwitch(activeItem)}
      </Segment>
    </>
  );
};

function mapStateToProps(state) {
  const { usersPage, auth } = state;
  return {
    contactList: usersPage.contactList,
    segmentList: usersPage.segmentList,
    userID: auth.user._id,
  };
}

ContactsMangament.propTypes = {
  contactList: PropTypes.object,
  segmentList: PropTypes.object,
};

export default connect(mapStateToProps)(ContactsMangament);
