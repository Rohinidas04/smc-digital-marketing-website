import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { quote, name, description } from './LeftCmpMessage.module.scss';

const LeftCmpMessage = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p className={description}>{props.description}</p>
      <div className={quote}>
        <Icon name="quote left"></Icon>
        <p>{props.quote}</p>
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
