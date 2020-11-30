import React from 'react';
import { List } from 'semantic-ui-react';
import {
  messageItem,
  contenItem,
  clientName,
  dateWrapper,
  floatRight,
  monthWrapper,
  timeWrapper,
} from './NoIconCard.module.scss';
import { PropTypes } from 'prop-types';

const NoIconCard = ({ message }) => {
  // clean up the date
  var date = new Date(message.date);
  var monthString = date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
  });
  var timeString = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <List.Item className={messageItem}>
      <List.Content>
        <div className={floatRight}>
          <div className={contenItem}>
            <List.Header as="a" className={clientName}>
              You
            </List.Header>
            <List.Description>{message.text}</List.Description>
          </div>
          <div className={dateWrapper}>
            <span className={monthWrapper}>{monthString + ' '}</span>
            <span className={timeWrapper}>{timeString}</span>
          </div>
        </div>
      </List.Content>
    </List.Item>
  );
};

NoIconCard.propTypes = {
  message: PropTypes.shape({
    date: PropTypes.string,
    text: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default NoIconCard;
