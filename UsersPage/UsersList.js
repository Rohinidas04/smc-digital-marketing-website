import React, { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';
import { Segment, List, Image, Input } from 'semantic-ui-react';
import {
  widthForth,
  widthThirty,
  clearPadding,
  clearMargin,
  clearBorderRadiu,
  clearBorder,
  textWrapper,
  clearLeftBorder,
  noScrollBar,
  alignCenter,
  flexDisplay,
  limitImageHeight,
  paddingLeft,
  searchWrapper,
  sixtyWdith,
  limitUserListHeight,
} from './UsersPage.module.scss';
import charBubble from '../../assets/icons/usersPageIcon/chatbubble-outline.svg';
import deleteAccount from '../../assets/icons/usersPageIcon/deleteAccount-outline.svg';
import editOrange from '../../assets/icons/edit-orange.svg';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/contacts/contacts.actions';
import PropTypes from 'prop-types';
import {
  openEditContactModal,
  closeModals,
} from '../../redux/modal/modal.actions';
import EditContactModal from './EditContactModal';

const centerTextWrapper = [
  textWrapper,
  clearLeftBorder,
  noScrollBar,
  alignCenter,
];

const UsersList = () => {
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts(filter));
  }, [filter]);

  const delayedQuery = useCallback(
    _.debounce((q) => setFilter(q), 750),
    []
  );

  const handleChange = (e) => {
    delayedQuery(e.target.value);
  };

  const openEditModal = (id) => {
    dispatch(openEditContactModal(id));
  };

  const handleContactDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const contactList = contacts.map((data) => {
    return (
      <List.Item className={[clearPadding, clearBorder].join(' ')}>
        <Segment.Group
          horizontal
          className={[clearMargin, clearBorderRadiu, clearBorder].join(' ')}
        >
          <Segment
            className={[
              widthThirty,
              textWrapper,
              clearLeftBorder,
              noScrollBar,
            ].join(' ')}
          >
            {data.displayName}
          </Segment>
          <Segment className={[widthForth, ...centerTextWrapper].join(' ')}>
            {data.phoneNumber}
          </Segment>
          <Segment
            className={[widthThirty, ...centerTextWrapper].join(' ')}
            textAlign={'center'}
          >
            <div className={flexDisplay}>
              <Image
                src={charBubble}
                className={limitImageHeight}
                link={'./user'}
              />
              <Image
                src={editOrange}
                className={[limitImageHeight, paddingLeft].join(' ')}
                onClick={() => openEditModal(data._id)}
              />
              <Image
                src={deleteAccount}
                className={[limitImageHeight, paddingLeft].join(' ')}
                onClick={() => handleContactDelete(data._id)}
              />
            </div>
          </Segment>
        </Segment.Group>
      </List.Item>
    );
  });

  return (
    <>
      <Segment.Group
        horizontal
        className={[clearMargin, clearBorderRadiu, clearBorder].join(' ')}
      >
        <Segment size={'big'} className={sixtyWdith}>
          <p>Users</p>
        </Segment>
        <Segment className={searchWrapper}>
          <Input
            icon="search"
            iconPosition="left"
            size="big"
            placeholder="Filter users"
            onChange={handleChange}
          />
        </Segment>
      </Segment.Group>
      <Segment.Group horizontal>
        <Segment className={[widthThirty, textWrapper, noScrollBar].join(' ')}>
          Name
        </Segment>
        <Segment className={[widthForth, ...centerTextWrapper].join(' ')}>
          Phone number
        </Segment>
        <Segment
          className={[widthThirty, ...centerTextWrapper].join(' ')}
          textAlign={'center'}
        >
          Options
        </Segment>
      </Segment.Group>
      <Segment className={[clearPadding, clearBorderRadiu].join(' ')}>
        <List className={[limitUserListHeight, noScrollBar].join(' ')}>
          {contactList}
        </List>
      </Segment>
      <EditContactModal />
    </>
  );
};

UsersList.propTypes = {
  clientList: PropTypes.array,
  userID: PropTypes.string,
  dispatch: PropTypes.func,
};

export default UsersList;
