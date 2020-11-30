import React, { useEffect, useRef } from 'react';
import { List } from 'semantic-ui-react';
import ClientCard from './ClientCard';
import NoIconCard from './NoIconCard';
import { mesWrapper } from './MessageBox.module.scss';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { initMessages } from '../../redux/message/message.actions';

const renderMessages = (messages) => {
  if (!messages) {
    return null;
  }
  const list = messages.map((message) => {
    if (message.eventType === 'message.received') {
      return <ClientCard key={message.messageID} message={message} />;
    } else {
      return <NoIconCard key={message.messageID} message={message} />;
    }
  });

  return list;
};

const MessageBox = ({ clientList, selectedIndex, messages, dispatch }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'auto' });
  };
  useEffect(scrollToBottom, [messages, selectedIndex]);

  const selectedClient = clientList[selectedIndex];

  if (!selectedClient || !messages[selectedClient._id]) {
    return <div key={'messageEnd'} ref={messagesEndRef} />;
  }

  if (!messages[selectedClient._id].isInit) {
    dispatch(initMessages(selectedClient._id));
  }
  var curClientMessages = messages[selectedClient._id]
    ? messages[selectedClient._id].messages
    : [];

  return (
    <div>
      <div key={'messageEnd'} ref={messagesEndRef} />
      <List className={mesWrapper}>
        {renderMessages(curClientMessages)}
        <div key={'messageEnd'} ref={messagesEndRef} />
      </List>
    </div>
  );
};

function mapStateToProps(state) {
  const { clients, messages } = state;
  return {
    clientList: clients.clientList,
    selectedIndex: clients.selectedIndex,
    messages,
  };
}

MessageBox.propTypes = {
  clientList: PropTypes.array,
  selectedIndex: PropTypes.number,
  messages: PropTypes.object,
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(MessageBox);
