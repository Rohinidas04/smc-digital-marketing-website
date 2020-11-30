import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'semantic-ui-react';
import {
  signUpButton,
  inputField,
  signUpGoogle,
  signUpFacebook,
  orDivider,
  termsAndCondition,
  form,
  formTitle,
  policy,
  formButton,
} from './Form.module.scss';

const SignUpForm = () => {
  return (
    <>
      <h2 className={formTitle}>Sign up with</h2>
      <Form className={form} size="large">
        <Form.Group widths="equal">
          <Button className={`${formButton} ${signUpGoogle}`} size="big">
            <i className="blue google icon"></i>Google
          </Button>
          <Button className={`${formButton} ${signUpFacebook}`} size="big">
            <i className="facebook icon"></i>Facebook
          </Button>
        </Form.Group>

        <h3 className={orDivider}>OR</h3>

        <Form.Field
          id="form-input-control-error-email"
          control={Input}
          label="Email"
          placeholder="your@example.com"
          className={inputField}
          size="large"
        />

        <Form.Field
          id="form-input-control-error-email"
          control={Input}
          label="Password"
          placeholder="At least 8 characters"
          className={inputField}
          type="password"
          size="large"
          icon="eye slash outline"
        />
        <Button className={`${formButton} ${signUpButton}`}>Sign up</Button>

        <div className={policy}>
          <p>
            By signing up you agree to our
            <Link to="/" className={termsAndCondition}>
              {'Terms & Conditions'}
            </Link>
            . Our system monitors all
          </p>
          <p>messages to ensure compliance with zero spam policy.</p>
        </div>
      </Form>
    </>
  );
};

SignUpForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
};

export default SignUpForm;
