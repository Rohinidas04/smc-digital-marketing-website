import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Form, Button, Header, Popup } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import {
  connectPayPal,
  saveCCInfo,
  formTitle,
  form,
  formButton,
  previousButton,
} from './Form.module.scss';
import { useForm } from 'react-hook-form';
import axios from '../../axios';
import './stripe.css';

const PaymentInfoForm = ({ navigation }) => {
  const auth = useSelector((state) => state.auth);

  // get email from redux store
  const { email } = auth.user;

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const { handleSubmit, register, errors, control } = useForm();

  const { next, previous } = navigation;

  const createPaymentIntent = async () => {
    try {
      const res = await axios.post('/payment/create-payment-intent', {
        email,
      });
      setClientSecret(res.data.data.clientSecret);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    createPaymentIntent();
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const onSubmit = async (event) => {
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: email,
        },
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      next();
    }
  };

  return (
    <>
      <Form
        className={form}
        size="large"
        loading={processing}
        onSubmit={handleSubmit(onSubmit)}
      >
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
          Payment Information
        </Header>

        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />

        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        {/* Show a success message upon completion */}
        <p className={succeeded ? 'result-message' : 'result-message hidden'}>
          Payment succeeded, see the result in your
          <a href={`https://dashboard.stripe.com/test/payments`}>
            Stripe dashboard.
          </a>
          Refresh the page to pay again.
        </p>

        <Button
          disabled={processing || disabled || succeeded}
          className={`${formButton} ${connectPayPal}`}
        >
          Connect PayPal(Optional)
        </Button>

        <Button
          labelPosition="right"
          icon="right chevron"
          content="Next"
          type="submit"
          loading={processing}
          className={`${formButton} ${saveCCInfo}`}
        />
      </Form>
    </>
  );
};

export default PaymentInfoForm;

PaymentInfoForm.propTypes = {
  navigation: PropTypes.any,
};
