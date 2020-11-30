import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { signInUser } from '../../redux/auth/auth.actions';
import { SIGNUP } from '../../Router/routes';
import SocialSignIn from './SocialSignIn';
import {
  orDivider,
  termsAndCondition,
  form,
  formTitle,
  policy,
  formButton,
  errMsg,
  signUpButton,
} from './Form.module.scss';
import { createContact } from '../../redux/contacts/contacts.actions';
import { closeModals } from '../../redux/modal/modal.actions';
import axios from '../../axios';

const token = localStorage.getItem('bulksmsToken') || null;

const EditContactForm = ({ activeId }) => {
  const [contact, setContact] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `/contacts/view/${activeId}`,

          {
            headers: { Authorization: token },
          }
        );

        setContact(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);

  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    dispatch(createContact(data));
    dispatch(closeModals());
  };
  return (
    <>
      <Form
        noValidate
        className={form}
        size="large"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Group widths="equal">
          <Form.Field>
            <label>First Name</label>
            <input
              name="firstName"
              ref={register({
                required: true,
              })}
              defaultValue={contact.firstName}
            />
            {errors.firstName && errors.firstName.type === 'required' && (
              <p className={errMsg}>First name is required</p>
            )}
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              name="lastName"
              ref={register({
                required: true,
              })}
              defaultValue={contact.lastName}
            />
            {errors.lastName && errors.lastName.type === 'required' && (
              <p className={errMsg}>Last name is required</p>
            )}
          </Form.Field>
        </Form.Group>

        <Form.Field>
          <label>Display Name</label>
          <input
            name="displayName"
            ref={register({
              required: true,
            })}
            defaultValue={contact.displayName}
          />
          {errors.displayName && errors.displayName.type === 'required' && (
            <p className={errMsg}>Display name is required</p>
          )}
        </Form.Field>

        <Form.Field>
          <label>Phone Number</label>
          <input
            name="phoneNumber"
            type="text"
            ref={register({ required: true })}
            defaultValue={contact.phoneNumber}
          />
          {errors.phoneNumber && errors.phoneNumber.type === 'required' && (
            <p className={errMsg}>Phone number is required</p>
          )}
        </Form.Field>

        <Form.Field>
          <label>Email</label>
          <input
            name="email"
            type="text"
            ref={register({ required: true })}
            defaultValue={contact.email}
          />
          {errors.email && errors.email.type === 'required' && (
            <p className={errMsg}>Email is required</p>
          )}
        </Form.Field>

        <Button type="submit" className={`${formButton} ${signUpButton}`}>
          Edit Contact
        </Button>
      </Form>
    </>
  );
};

export default EditContactForm;
