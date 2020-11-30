import React from 'react';
import PropTypes from 'prop-types';
import { Form, Dropdown } from 'semantic-ui-react';

const CustomDropdown = (props) => {
  return (
    <Form.Dropdown
      id="form-input-control"
      control={Dropdown}
      label={props.label}
      placeholder={props.placeholder}
      fluid
      selection
      // search
      options={props.options}
      className={props.classN}
    />
  );
};

export default CustomDropdown;

CustomDropdown.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  classN: PropTypes.string,
};
