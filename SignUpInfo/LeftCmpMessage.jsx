import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { quote, name, description, text } from './LeftCmpMessage.module.scss';

const LeftCmpMessage = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p className={description}>{props.description}</p>
      <div className={quote}>
        <Icon name="quote left"></Icon>
        <p className={text}>{props.quote}</p>
      </div>
      <p className={name}>{props.name}</p>
    </div>
  );
};

export default LeftCmpMessage;

LeftCmpMessage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  quote: PropTypes.string,
  name: PropTypes.string,
};
