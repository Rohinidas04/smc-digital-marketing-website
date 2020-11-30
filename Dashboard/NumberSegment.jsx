import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { numberWrapper, title } from './NumberSegment.module.scss';

const NumberSegment = ({ telNumber }) => {
  return (
    <Segment className={numberWrapper}>
      <h4 className={title}>Your number</h4>
      <p>{telNumber}</p>
      <p>Vanity Toll-Free</p>
    </Segment>
  );
};

export default NumberSegment;

NumberSegment.propTypes = {
  telNumber: PropTypes.string,
};
