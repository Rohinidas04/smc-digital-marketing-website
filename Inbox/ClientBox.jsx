import React, { useState } from 'react';
import {
  clientBoxWrapper,
  phoneInputWrapper,
  nameInputWrapper,
  resolveButtonWrapper,
  resolveIconWrapper,
  resolveColor,
  profileWrapper,
  clockWrapper,
  dropDownWrapper,
  dropitem,
  menuIconWrapper,
} from './ClientBox.module.scss';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Image, Dropdown } from 'semantic-ui-react';

import unresolvedIcon from '../../assets/icons/InboxIcon/unresolved.png';
import resolvedIcon from '../../assets/icons/InboxIcon/resolved.png';
import profileIcon from '../../assets/icons/InboxIcon/profile.png';
import clockIcon from '../../assets/icons/InboxIcon/clock.png';
import menuIcon from '../../assets/icons/InboxIcon/menu.png';

import {
  updateResolve,
  updateName,
  updatePhone,
  deleteClient,
  trashClient,
} from '../../redux/clients/clients.actions';

import axios from '../../axios';

const ClientBox = ({ userID, clientList, selectedIndex, dispatch }) => {
  const [edited, setEdited] = useState(false);

  const handlePhoneUpdate = (e) => {
    setEdited(true);
    dispatch(updatePhone(e.target.value));
  };

  const handleNameUpdate = (e) => {
    setEdited(true);
    dispatch(updateName(e.target.value));
  };

  const selectedClient = clientList[selectedIndex];

  if (!selectedClient) {
    return <div style={{ height: '24px' }}></div>;
  }

  const clientID = selectedClient._id;

  const submitUpdate = async (updateDate) => {
    try {
      await axios.post('/inbox/client', {
        id: userID,
        clientID,
        data: updateDate,
      });
    } catch (err) {
      //console.log(err.message);
    }
  };

  const sumbitDeleteClient = async () => {
    try {
      await axios.delete('/inbox/client', {
        params: { id: userID, clientID },
      });
    } catch (err) {
      //console.log(err.message);
    }
  };

  return (
    <div>
      <div>
        <div className={dropDownWrapper}>
          <Dropdown
            direction="right"
            inline
            className={dropitem}
            icon={<Image src={menuIcon} className={menuIconWrapper} />}
          >
            <Dropdown.Menu className={dropitem} direction="left">
              <Dropdown.Item
                className={dropitem}
                text={selectedClient.trash === false ? 'Trash' : 'Untrash'}
                onClick={() => {
                  submitUpdate({ trash: !selectedClient.trash });
                  dispatch(trashClient());
                }}
              />
              <Dropdown.Item
                className={dropitem}
                text="delete"
                onClick={() => {
                  sumbitDeleteClient();
                  dispatch(deleteClient());
                }}
              />
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className={clientBoxWrapper}>
          <input
            value={selectedClient.name}
            className={nameInputWrapper}
            onChange={handleNameUpdate}
            onBlur={() => {
              submitUpdate({ name: selectedClient.name });
            }}
            maxLength="30"
          />
          <input
            value={selectedClient.phone}
            className={phoneInputWrapper}
            onChange={handlePhoneUpdate}
            onBlur={() => {
              submitUpdate({ phone: selectedClient.phone });
            }}
          />
          <button className={clockWrapper}>
            <Image src={clockIcon} className={resolveIconWrapper}></Image>
            <span>{'Snooze'}</span>
          </button>
          <button className={profileWrapper}>
            <Image src={profileIcon} className={resolveIconWrapper}></Image>
            <span>{'Profile'}</span>
          </button>
          <button
            className={resolveButtonWrapper}
            onClick={() => {
              submitUpdate({ resolved: !selectedClient.resolved });
              dispatch(updateResolve());
            }}
          >
            {selectedClient.resolved === true ? (
              <>
                <Image
                  src={resolvedIcon}
                  className={resolveIconWrapper}
                ></Image>
                <span className={resolveColor}>{'resolved'}</span>
              </>
            ) : (
              <>
                <Image
                  src={unresolvedIcon}
                  className={resolveIconWrapper}
                ></Image>
                <span>{'unresolved'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  const { clients, user, auth } = state;
  return {
    clientList: clients.clientList,
    selectedIndex: clients.selectedIndex,
    userID: auth.user._id,
  };
}

ClientBox.propTypes = {
  clientList: PropTypes.array,
  selectedIndex: PropTypes.number,
  dispatch: PropTypes.func,
  userID: PropTypes.string,
};

export default connect(mapStateToProps)(ClientBox);
