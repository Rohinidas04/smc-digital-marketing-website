import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react';
// import { inputField } from './Form.module.scss';

const InputField = (props) => {
  return (
    <Form.Field
      id="form-input-control"
      control={props.input}
      label={props.label}
      placeholder={props.placeholder}
      className={props.classN}
      size={props.size}
    />
  );
};

export default InputField;

InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  options: PropTypes.arrayOf([PropTypes.object]),
  input: PropTypes.func,
  classN: PropTypes.string,
};
