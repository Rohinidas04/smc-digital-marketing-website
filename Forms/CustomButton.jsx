import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { formButton } from './Form.module.scss';

const CustomButton = (props) => {
  return (
    <Button className={`${props.classN} ${formButton}`}>{props.content}</Button>
  );
};

export default CustomButton;

CustomButton.propTypes = {
  classN: PropTypes.string,
  content: PropTypes.string,
};
