/*eslint-disable react/prop-types*/
import React, { useState, useEffect } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import {
  signUpButton,
  inputField,
  form,
  formTitle,
  formButton,
  confirmNumberButton,
} from './Form.module.scss';
import axios from 'axios';

const PhoneNumberVerification = ({ navigation, formData, setForm }) => {
  const auth = useSelector((state) => state.auth);
  const [error, setError] = useState(null);

  const { email } = auth.user;

  const { next, previous } = navigation;

  const { handleSubmit } = useForm();

  const handlePrevious = () => {
    previous();
  };

  useEffect(() => {
    const sendVerificationText = async () => {
      try {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/registration/verification-code`,
          { phoneNumber: formData.mobilePhoneNumber }
        );
      } catch (err) {
        console.log('Err is: ', err);
        setError('Could not send verification text.');
      }
    };
    sendVerificationText();
  }, []);

  if (error) {
    toast.error(error);
  }

  const history = useHistory();

  const onSubmit = () => {
    console.log({ ...formData, email });

    axios
      .all([
        axios.post(`${process.env.REACT_APP_API_URL}/auth/more-info`, {
          ...formData,
          email,
        }),
        axios.post(
          `${process.env.REACT_APP_API_URL}/phonenumber/incommingnumber`,
          {
            email,
            phoneNumber: formData.selectedPhoneNumber,
          }
        ),
      ])
      .then(
        axios.spread((data1, data2) => {
          history.push('/dashboard');
        })
      )
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      axios
        .post(`${process.env.REACT_APP_API_URL}/phonenumber/allorder`, {
          email,
        })
        .then((res) => {
          console.log('Res is: ', res);
        })
        .catch((err) => console.log('Error is: ', err));
    }, 2500);
  };
  return (
    <>
      <h2 className={formTitle}>Phone number verification</h2>
      <h3 style={{ fontWeight: 'normal' }}>
        A message with a verification code has been sent to &nbsp;
        <strong>{formData.mobilePhoneNumber}</strong>.
      </h3>
      <h3 style={{ fontWeight: 'normal' }}>Enter the code to continue.</h3>
      <Form
        noValidate
        className={form}
        size="large"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Group>
          <Form.Field
            id="form-input-control-error-email"
            control={Input}
            className={inputField}
            size="large"
            style={{ width: '200px' }}
          />

          <Button
            type="submit"
            className={`${formButton} ${signUpButton} ${confirmNumberButton}`}
          >
            Confirm Number
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default PhoneNumberVerification;
