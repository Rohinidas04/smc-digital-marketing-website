import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Form, Input } from 'semantic-ui-react';
import InputField from './InputField';
import CustomDropdown from './CustomDropdown';
import CustomButton from './CustomButton';
import {
  connectPayPal,
  saveCCInfo,
  formTitle,
  inputField,
  expirationCVVWrapper,
  paymentInfoForm,
  paymentDropdown,
  cvvInput,
  expDropdownWrapper,
  expirationCVVLabels,
  expLabel,
} from './Form.module.scss';

const months = [...Array(13).keys()].slice(1).map((month) => ({
  key: month,
  text: month,
  value: month,
}));

const days = [...Array(32).keys()].slice(1).map((day) => ({
  key: day,
  text: day,
  value: day,
}));

const PaymentInfoForm = () => {
  return (
    <>
      <Form className={''}>
        <h2 className={formTitle}>Payment Information</h2>
        {/* <label>Name on Card</label> */}
        <Form.Group widths="equal">
          <InputField
            size="huge"
            placeholder="First"
            input={Input}
            classN={inputField}
            label="Name on Card"
          />
          <InputField
            size="huge"
            input={Input}
            placeholder="Last"
            classN={inputField}
            label="Surname"
          />
        </Form.Group>

        {/* <label>Card Number</label> */}
        <InputField
          size="massive"
          label="Card Number"
          input={Input}
          placeholder="xxxx-xxxx-xxxx-xxxx"
          classN={inputField}
        />

        <Form.Group className={expirationCVVWrapper}>
          <Form.Group className={expDropdownWrapper}>
            <label className={expLabel}>Expiration</label>
            <Form.Group inline widths="equal">
              <CustomDropdown options={months} />
              <CustomDropdown options={days} />
            </Form.Group>
          </Form.Group>
          <InputField
            size="huge"
            label="CVV"
            input={Input}
            classN={cvvInput}
            placeholder="123"
          />
        </Form.Group>

        <CustomButton
          content="Connect PayPal(Optional)"
          classN={connectPayPal}
        />

        <CustomButton content="Save Credit Card" classN={saveCCInfo} />
      </Form>
    </>
  );
};

PaymentInfoForm.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  input: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  classN: PropTypes.string,
};

export default PaymentInfoForm;
