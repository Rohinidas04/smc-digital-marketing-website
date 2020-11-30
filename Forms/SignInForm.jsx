import React from 'react';
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

const SignInForm = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const { register, handleSubmit, errors } = useForm();

  const { loading, error } = auth;

  // TODO: Toast shows up twice, fix it!
  // if there's an error show the toast
  error && toast(error);

  const onSubmit = async (data) => {
    const { email, password } = data;
    dispatch(signInUser(email, password));
  };
  return (
    <>
      <h2 className={formTitle}>Sign in with</h2>
      <Form
        noValidate
        className={form}
        size="large"
        loading={loading}
        onSubmit={handleSubmit(onSubmit)}
      >
        <SocialSignIn />

        <h3 className={orDivider}>OR</h3>

        <Form.Field>
          <label>Email</label>
          <input
            name="email"
            placeholder="your@example.com"
            ref={register({
              required: true,
              pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
            })}
          />
          {errors.email && errors.email.type === 'required' && (
            <p className={errMsg}>Email is required</p>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <p className={errMsg}>Email is invalid</p>
          )}
        </Form.Field>

        <Form.Field>
          <label>Password</label>
          <input
            name="password"
            placeholder="At least 8 characters"
            type="password"
            icon="eye slash outline"
            ref={register({ required: true, minLength: 8, maxLength: 20 })}
          />
          {errors.password && errors.password.type === 'required' && (
            <p className={errMsg}>Password is required</p>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <p className={errMsg}>
              Password should be at least 8 characters long
            </p>
          )}
          {errors.password && errors.password.type === 'maxLength' && (
            <p className={errMsg}>Password is too long</p>
          )}
        </Form.Field>

        <Button type="submit" className={`${formButton} ${signUpButton}`}>
          Sign in
        </Button>

        <div className={policy}>
          <p>
            Don&apos;t have an account? &nbsp;
            <Link to={SIGNUP} className={termsAndCondition}>
              Sign up instead
            </Link>
          </p>
        </div>
      </Form>
    </>
  );
};

export default SignInForm;
