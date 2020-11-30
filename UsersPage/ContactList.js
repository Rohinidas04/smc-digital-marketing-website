import React, { useState } from 'react';
import { Segment, Dropdown, List, Image } from 'semantic-ui-react';
import {
  limitUserListHeight,
  noScrollBar,
  listItemWrapper,
} from './UsersPage.module.scss';
import { useSelector, useDispatch, connect } from 'react-redux';

import menuIcon from '../../assets/icons/InboxIcon/menu.png';

import propTypes from 'prop-types';

const ContactList = ({ listOption, handleDelete, handleZoom }) => {
  if (!listOption) {
    return (
      <List className={[limitUserListHeight, noScrollBar].join(' ')}></List>
    );
  }

  // const { statistics } = useSelector((state) => state.contacts);

  const renderHeader = () => {
    return (
      <List.Item className={listItemWrapper} key="header">
        <Segment.Group horizontal className={listItemWrapper}>
          <Segment>Name</Segment>
          <Segment>Created</Segment>
          <Segment>Contacts</Segment>
          <Segment>Active</Segment>
          <Segment>Invalid</Segment>
          <Segment>Unsubscribes</Segment>
          <Segment>
            <p></p>
          </Segment>
        </Segment.Group>
      </List.Item>
    );
  };

  const renderList = () => {
    let showList = Object.keys(listOption).map((keyName, i) => {
      if (listOption[keyName].deleted === true) {
        return;
      }
      let element = listOption[keyName];
      const created = new Date(element.created).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });

      console.log(element);

      return (
        <List.Item
          className={listItemWrapper}
          key={element._id}
          onDoubleClick={() => handleZoom(element._id)}
        >
          <Segment.Group horizontal className={listItemWrapper}>
            <Segment>
              <span>{element.name}</span>
            </Segment>
            <Segment>
              <span>{created}</span>
            </Segment>
            <Segment>
              <span>{element.contacts}</span>
            </Segment>
            <Segment>
              <span>{element.active}</span>
            </Segment>
            <Segment>
              <span>{element.invalid}</span>
            </Segment>
            <Segment>
              <span>{element.unsubscribes}</span>
            </Segment>
            <Dropdown direction="right" inline icon={'ellipsis vertical'}>
              <Dropdown.Menu direction="right">
                <Dropdown.Item
                  text="delete"
                  onClick={() => handleDelete(element._id)}
                />
              </Dropdown.Menu>
            </Dropdown>
          </Segment.Group>
        </List.Item>
      );
    });
    return showList;
  };

  return (
    <>
      <List className={[limitUserListHeight, noScrollBar].join(' ')}>
        {renderHeader()}
        {/* <List.Item className={listItemWrapper}>
          <Segment.Group horizontal className={listItemWrapper}>
            <Segment>
              <span>All contacts</span>
            </Segment>
            <Segment>
              <span></span>
            </Segment>
            <Segment><span>{statistics.totalContacts}</span></Segment>
            <Segment>
              <span></span>
            </Segment>
            <Segment>
              <span></span>
            </Segment>
            <Segment>
              <span></span>
            </Segment>
            <Dropdown direction="right" inline icon={'ellipsis vertical'}>
              <Dropdown.Menu direction="left">
                <Dropdown.Item text="delete" onClick={() => {}} />
              </Dropdown.Menu>
            </Dropdown>
          </Segment.Group>
        </List.Item> */}
        {renderList(listOption)}
      </List>
    </>
  );
};

function mapStateToProps(state) {
  const { auth } = state;
  return {
    userID: auth.user._id,
  };
}

ContactList.propTypes = {
  dispatch: propTypes.func,
};

export default connect(mapStateToProps)(ContactList);
