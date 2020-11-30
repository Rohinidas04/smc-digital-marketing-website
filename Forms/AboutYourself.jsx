import React from 'react';
import { Form, Button, Select, Dropdown } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import {
  signUpButton,
  form,
  formTitle,
  formInput,
  formButton,
  errMsg,
} from './Form.module.scss';

const countryOptions = [
  { key: 'us', text: 'United States', value: 'United States' },
  { key: 'ca', text: 'Canada', value: 'Canada' },
];

const AboutYourself = ({ setForm, navigation, formData }) => {
  const { next } = navigation;

  const {
    firstName,
    lastName,
    mobilePhoneNumber,
    organizationName,
    website,
    country,
  } = formData;

  const { register, handleSubmit, errors } = useForm();

  const getCountry = (event, { value }) => {
    let countryName = event.target.textContent;
    formData.country = countryName;
  };

  const onSubmit = () => {
    next();
  };

  return (
    <>
      <h2 className={formTitle}>Tell us a bit about yourself</h2>
      <Form
        noValidate
        className={form}
        onSubmit={handleSubmit(onSubmit)}
        size="large"
      >
        <Form.Group widths="equal">
          <Form.Field>
            <label>Full name</label>
            <input
              name="firstName"
              placeholder="First"
              defaultValue={firstName}
              onChange={setForm}
              ref={register({
                required: true,
              })}
            />
            {errors.firstName && errors.firstName.type === 'required' && (
              <p className={errMsg}>First Name is required</p>
            )}
          </Form.Field>
          <Form.Field>
            <label>&nbsp;</label>
            <input
              name="lastName"
              defaultValue={lastName}
              onChange={setForm}
              placeholder="Last"
              ref={register({
                required: true,
              })}
            />
            {errors.lastName && errors.lastName.type === 'required' && (
              <p className={errMsg}>Last Name is required</p>
            )}
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <label>Mobile phone number</label>
          <input
            name="mobilePhoneNumber"
            defaultValue={mobilePhoneNumber}
            onChange={setForm}
            placeholder="(---) --- ----"
            ref={register({
              required: true,
            })}
          />
          {errors.mobilePhoneNumber &&
            errors.mobilePhoneNumber.type === 'required' && (
              <p className={errMsg}>Mobile Phone Number is required</p>
            )}
        </Form.Field>

        <Form.Field>
          <label>Organization name</label>
          <input
            name="organizationName"
            defaultValue={organizationName}
            onChange={setForm}
            ref={register({
              required: true,
            })}
          />
          {errors.organizationName &&
            errors.organizationName.type === 'required' && (
              <p className={errMsg}>Organization name is required</p>
            )}
        </Form.Field>
        <Form.Field>
          <label>Website (Optional)</label>
          <input name="website" defaultValue={website} onChange={setForm} />
        </Form.Field>

        <Form.Field
          name="country"
          defaultValue={country}
          control={Select}
          options={countryOptions}
          label={{ children: 'Country', htmlFor: 'form-select-control-gender' }}
          placeholder="Country"
          search
          className={formInput}
          onChange={getCountry}
        />

        <Button
          labelPosition="right"
          icon="right chevron"
          content="Next"
          type="submit"
          className={`${formButton} ${signUpButton}`}
        />
      </Form>
    </>
  );
};

AboutYourself.propTypes = {
  setForm: PropTypes.any,
  navigation: PropTypes.any,
  formData: PropTypes.any,
};

export default AboutYourself;
