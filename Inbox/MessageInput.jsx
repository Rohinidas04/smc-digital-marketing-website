import React, { useState } from 'react';
import {
  inputSMS,
  clock,
  sendBtn,
  clockImage,
} from './MessageInput.module.scss';
import { Button, Image } from 'semantic-ui-react';

import Clock from '../../assets/icons/clock.png';
import { send } from '../../redux/message/message.actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendMessage } from '../../redux/clients/clients.actions';

// eslint-disable-next-line react/prop-types
const MessageInput = ({
  clientList,
  selectedIndex,
  selectedClient,
  dispatch,
  order,
  phone,
}) => {
  const [inputText, setInputText] = useState('');

  const handleOnClick = () => {
    if (!clientList[selectedIndex]) {
      return null;
    }
    var tempDate = new Date();
    const date = tempDate.toISOString();
    const to = clientList[selectedIndex].phone;
    const id = clientList[selectedIndex]._id;
    const messaege = {
      eventType: 'out',
      to,
      from: phone,
      date: date,
      text: inputText,
      messageID: '+16469048020' + date,
    };
    if (inputText) {
      //if the order showing is late, it is not going to update it.
      // tell the client list to mark this client to the top if it is in recent order
      dispatch(sendMessage(id, messaege, order));

      // send the message out
      // append the message the list
      // if the message is not finalised, it cant be marked as note
      // if success, mark success
      // replace the normal note
      // if not, mark error on the message
      dispatch(send(id, messaege));
    }
    setInputText('');
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleOnClick();
    }
  };

  return (
    <div className="input ui fluid">
      <input
        type="text"
        placeholder="Text..."
        className={inputSMS}
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        onKeyDown={handleEnter}
      />
      <Button basic className={clock}>
        <Image src={Clock} className={clockImage}></Image>
      </Button>
      <Button className={sendBtn} onClick={handleOnClick}>
        Send SMS
      </Button>
    </div>
  );
};

function mapStateToProps(state) {
  const { clients, inboxVisibilityFilter, auth } = state;

  return {
    clientList: clients.clientList,
    selectedIndex: clients.selectedIndex,
    order: inboxVisibilityFilter.order,
    phone: auth.user.avaliablePhone[0].phone_number,
  };
}

MessageInput.propTypes = {
  clientList: PropTypes.array,
  selectedClient: PropTypes.object,
  selectedIndex: PropTypes.number,
  dispatch: PropTypes.func,
  order: PropTypes.string,
  phone: PropTypes.string,
};

export default connect(mapStateToProps)(MessageInput);
