import React from 'react';
import { Segment, Icon, Input, List, Divider } from 'semantic-ui-react';
import {
  inboxHeader,
  title,
  inbox,
  search,
  nameLabel,
  messageWrapper,
  date,
  messageText,
  input,
} from './Inbox.module.scss';

const messages = [
  {
    name: 'Cynthia',
    date: '1d',
    message: 'lol',
  },
  {
    name: 'David',
    date: '2d',
    message: 'looks good to me',
  },
  {
    name: 'Joann',
    date: '1d',
    message: 'Thank you',
  },
];

const renderMessages = () => {
  const list = messages.map((message) => {
    return (
      <>
        <List.Content className={messageWrapper}>
          <div className={nameLabel}>
            <p>{message.name}</p>
            <p className={date}>{message.date}</p>
          </div>
          <p className={messageText}>{message.message}</p>
        </List.Content>
        <Divider />
      </>
    );
  });

  return list;
};

const SmallInbox = () => {
  return (
    <List>
      <List.Header horizontal className={inboxHeader}>
        <h4 className={title}>Inbox</h4>
        <Icon name="plus"></Icon>
      </List.Header>
      <List.Item>
        <Input
          fluid
          icon="search"
          size="small"
          className={input}
          placeholder="search..."
        />
      </List.Item>
      <List.Item>{renderMessages()}</List.Item>
    </List>
  );
};

export default SmallInbox;
