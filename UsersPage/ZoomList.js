import React, { useState } from 'react';

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

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from '../../axios';
import {
  deleteClientById,
  redirectFromUserToInbox,
} from '../../redux/clients/clients.actions';
import { resetFilter } from '../../redux/inboxFilter/inboxFilter.actions';
import { Redirect } from 'react-router';

const centerTextWrapper = [
  textWrapper,
  clearLeftBorder,
  noScrollBar,
  alignCenter,
];

const renderUsersList = (clientList, sumbitDeleteClient, handleRedirect) => {
  const clientListRender = clientList.map((element) => {
    const handleDelete = (id) => {
      sumbitDeleteClient(id);
    };

    return (
      <List.Item
        key={element._id}
        className={[clearPadding, clearBorder].join(' ')}
      >
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
            {element.name}
          </Segment>
          <Segment className={[widthForth, ...centerTextWrapper].join(' ')}>
            {element.phone}
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
                onClick={() => handleRedirect(element._id)}
              />
              <Image
                src={deleteAccount}
                className={[limitImageHeight, paddingLeft].join(' ')}
                onClick={() => handleDelete(element._id)}
              />
            </div>
          </Segment>
        </Segment.Group>
      </List.Item>
    );
  });

  return clientListRender;
};

const ZoomList = ({ clientList, userID, dispatch }) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState();
  const [loading, setLoading] = useState(true);
  // redirect back to inbox
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Redirect to="/inbox" />;
  }

  const handleRedirect = (id) => {
    dispatch(redirectFromUserToInbox(id));
    dispatch(resetFilter());
    setRedirect(true);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    const value = event.target.value;
    setLoading(true);
    const escapeRegExp = (string) => {
      return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    };
    setTimeout(() => {
      if (value.length === 0) {
        setLoading(false);
        setSearchResult();
        return;
      }

      const re = new RegExp(escapeRegExp(value), 'i');
      const isMatch = (result) => re.test(result.name) || re.test(result.phone);

      setSearchResult(clientList.filter(isMatch));
    }, 300);
  };

  const sumbitDeleteClient = async (clientID) => {
    dispatch(deleteClientById(clientID));
    try {
      await axios.delete('/inbox/client', {
        params: { id: userID, clientID },
      });
    } catch (err) {
      //console.log(err.message);
    }
  };

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
            value={searchValue}
            onChange={handleSearchChange}
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
          {renderUsersList(
            searchResult ? searchResult : clientList,
            sumbitDeleteClient,
            handleRedirect
          )}
        </List>
      </Segment>
    </>
  );
};

function mapStatetoProps(state) {
  const { clients, auth } = state;
  return { clientList: clients.clientList, userID: auth.user._id };
}

ZoomList.propTypes = {
  clientList: PropTypes.array,
  userID: PropTypes.string,
  dispatch: PropTypes.func,
};

export default connect(mapStatetoProps)(ZoomList);
