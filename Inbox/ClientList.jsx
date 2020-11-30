import React, { useEffect, useRef } from 'react';
import { List, Item } from 'semantic-ui-react';
import {
  listWrapper,
  clientItemWrapper,
  selectedItemWrapper,
} from './ClientList.module.scss';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  selectClient,
  getInitalData,
  updateClientOrdedMap,
} from '../../redux/clients/clients.actions';

import axios from 'axios';
import Ivana from '../../assets/icons/ivana-cajina-_7LbC5J-jw4-unsplash@2x.png';

const labelType = [
  { type: 'Theme support', color: 'Blue' },
  { type: 'Freelance', color: 'yellow' },
  { type: 'Social', color: 'Darkblue' },
  { type: 'Friends', color: 'Red' },
  { type: 'Family', color: 'Green' },
];

// if user send any message, make the client to the top of the list

const renderClients = (
  clientList,
  dispatch,
  inboxVisibilityFilter,
  selectedIndex,
  userID
) => {
  if (!clientList) {
    return null;
  }
  const { filter, show, order, label } = inboxVisibilityFilter;

  const submitUpdate = async (clientID, updateDate) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/inbox/client`, {
        id: userID,
        clientID,
        data: updateDate,
      });
    } catch (err) {
      //console.log(err.message);
    }
  };

  //update a order in the client redux for the usage of the users list and the segments
  let clientOrderedMap = {};

  const list = clientList
    .sort((a, b) => {
      const compare = (a, b) => {
        const date_a = new Date(a);
        const date_b = new Date(b);
        if (date_a < date_b) {
          return -1;
        }
        if (date_a > date_b) {
          return 1;
        }
        return 0;
      };

      if (order === 'Recent') {
        return compare(b.lastActive, a.lastActive);
      } else {
        return compare(a.lastActive, b.lastActive);
      }
    })
    //filter show
    .map((client, index) => {
      clientOrderedMap[client._id] = index;
      // filter label
      if (label !== '#000000') {
        if (label !== client.label) {
          return {};
        }
      }

      // filter out unread
      if (show === 'Unread' && client.unread === 0) {
        return {};
      }
      // filter
      if ((filter === 'trash') & (client.trash !== true)) {
        return {};
      }
      if ((filter !== 'trash') & (client.trash === true)) {
        return {};
      }
      if ((filter === 'inbox') & (client.trash === true)) {
        return {};
      }
      if ((client[filter] !== true) & (filter !== 'inbox')) {
        return {};
      }

      return (
        <List.Item
          key={index}
          className={
            selectedIndex === index ? selectedItemWrapper : clientItemWrapper
          }
          value={`${index}`}
          onClick={(e, data) => {
            submitUpdate(client._id, { lastActive: Date.now(), unread: 0 });
            const index = parseInt(data.value);
            dispatch(selectClient(index));
          }}
        >
          {/* <Item.Image avatar src={process.env.PUBLIC_URL + client.iconSrc} /> */}

          <Item.Image avatar src={Ivana} />
          <List.Content>
            <List.Header>{client.name}</List.Header>
          </List.Content>
        </List.Item>
      );
    })
    .filter((element) => {
      // if the element is empty from the map, it will filter out.
      if (Object.keys(element).length === 0 && element.constructor === Object) {
        return;
      }
      return element;
    });

  //update the clientOrdedMap to the redux
  dispatch(updateClientOrdedMap(clientOrderedMap));

  return list;
};

const ClientList = ({
  inboxVisibilityFilter,
  clientList,
  dispatch,
  selectedIndex,
  isDataInitialized,
  userID,
}) => {
  const clientListTopRef = useRef(null);

  if (!isDataInitialized) {
    dispatch(getInitalData(userID));
  }

  // const scrollToTop = () => {
  //   clientListTopRef.current.scrollIntoView({ behavior: 'smooth' });
  // };

  //useEffect(scrollToTop, [messages]);

  return (
    <div>
      <List className={listWrapper}>
        <div key={'top'} ref={clientListTopRef} />

        {renderClients(
          clientList,
          dispatch,
          inboxVisibilityFilter,
          selectedIndex,
          userID
        )}
      </List>
    </div>
  );
};

function mapStateToProps(state) {
  const { clients, inboxVisibilityFilter, user, socket, auth } = state;

  return {
    clientList: clients.clientList,
    inboxVisibilityFilter,
    selectedIndex: clients.selectedIndex,
    isDataInitialized: clients.isDataInitialized,
    userID: auth.user._id,
  };
}

ClientList.propTypes = {
  clientList: PropTypes.array,
  dispatch: PropTypes.func,
  inboxVisibilityFilter: PropTypes.shape({
    filter: PropTypes.string,
    label: PropTypes.string,
    show: PropTypes.string,
    order: PropTypes.string,
  }),
  selectedIndex: PropTypes.number,
  isDataInitialized: PropTypes.bool,
  userID: PropTypes.string,
};

export default connect(mapStateToProps)(ClientList);
