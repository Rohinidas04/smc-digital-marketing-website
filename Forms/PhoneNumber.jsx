/*eslint-disable react/prop-types*/
import React, { useState, useSelector, useEffect, useCallback } from 'react';
import {
  Form,
  Button,
  Input,
  Header,
  Icon,
  Popup,
  Label,
} from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import _ from 'lodash';
import axios from '../../axios';
import PhoneIconGreen from '../../assets/icons/PhoneIconGreen.svg';

import {
  signUpButton,
  inputField,
  form,
  formTitle,
  formButton,
  active,
  previousButton,
} from './Form.module.scss';
import { toast } from 'react-toastify';

const PhoneNumber = ({ navigation, formData, setForm }) => {
  const [fetching, setFetching] = useState(false);
  const [activeIndex, setActiveIndex] = useState();

  const { next, previous } = navigation;

  const { handleSubmit } = useForm();

  const { phoneNumbers, areaCode, selectedPhoneNumber } = formData;

  const getPhoneNumbers = async () => {
    try {
      setFetching(true);
      const res = await axios.post('/phonenumber/avaliablenumber', {
        areaCode,
      });

      // update global stepper form values
      setForm({ target: { name: 'phoneNumbers', value: res.data.data } });
      setFetching(false);
    } catch (err) {
      setFetching(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getPhoneNumbers();
  }, [areaCode]);

  // set selectedPhoneNumber to the one user clicks
  const handleSelect = (selectedNumber, i) => {
    console.log('Handle select: ', selectedNumber);
    setActiveIndex(i);
    setForm({ target: { name: 'selectedPhoneNumber', value: selectedNumber } });
  };

  console.log('Selected phone number is: ', selectedPhoneNumber);
  const onSubmit = () => {
    if (selectedPhoneNumber) {
      next();
    } else {
      toast('Please select a number');
    }
  };

  const delayedQuery = useCallback(
    _.debounce((q) => setForm({ target: { name: 'areaCode', value: q } }), 750),
    []
  );

  const handleChange = (e) => {
    delayedQuery(e.target.value);
  };

  let availableNumbers;

  if (fetching) {
    availableNumbers = <p>Loading...</p>;
  } else if (phoneNumbers && phoneNumbers.length) {
    availableNumbers = phoneNumbers.map((value, index) => {
      return (
        <Form.Field
          key={index}
          control={Input}
          value={value.phone_number}
          disabled={fetching}
          className={
            activeIndex === index || selectedPhoneNumber == value.phone_number
              ? `${inputField} ${active}`
              : `${inputField}`
          }
          size="large"
          onClick={() => handleSelect(value.phone_number, index)}
        />
      );
    });
  } else {
    availableNumbers = <p>No numbers found, try a different area code.</p>;
  }

  console.log(fetching);

  return (
    <>
      <Header as="h2" className={formTitle}>
        <Popup
          content="Go back"
          trigger={
            <Button
              icon="left chevron"
              size="tiny"
              className={previousButton}
              onClick={previous}
            />
          }
        />
        Select Your Number
      </Header>

      <Form
        noValidate
        className={form}
        onSubmit={handleSubmit(onSubmit)}
        size="large"
        loading={fetching}
      >
        <Form.Field
          id="form-input-control-error-email"
          control={Input}
          label="Area Code"
          placeholder="201"
          className={inputField}
          size="large"
          loading={fetching}
          disabled={fetching}
          defaultValue={areaCode}
          onChange={handleChange}
        />
        {selectedPhoneNumber && (
          <div style={{ paddingBottom: '20px' }}>
            Selected number is &nbsp;
            <span style={{ fontWeight: 'bolder' }}>{selectedPhoneNumber}</span>
          </div>
        )}

        {availableNumbers}

        <Button
          labelPosition="right"
          icon="right chevron"
          content="Next"
          type="submit"
          disabled={fetching}
          className={`${formButton} ${signUpButton}`}
        />
      </Form>
    </>
  );
};

export default PhoneNumber;
