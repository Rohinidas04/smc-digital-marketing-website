import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import {
  signUpWithGoogle,
  signUpWithFacebook,
} from '../../redux/auth/auth.actions';
import { signUpGoogle, signUpFacebook, formButton } from './Form.module.scss';

const SocialSignIn = () => {
  const dispatch = useDispatch();

  const handleGoogleSignIn = () => {
    dispatch(signUpWithGoogle());
  };

  const handleFacebookSignIn = () => {
    dispatch(signUpWithFacebook());
  };

  return (
    <Form.Group widths="equal">
      <Button
        className={`${formButton} ${signUpGoogle}`}
        size="big"
        onClick={handleGoogleSignIn}
      >
        <i className="blue google icon"></i>Google
      </Button>
      <Button
        className={`${formButton} ${signUpFacebook}`}
        size="big"
        onClick={handleFacebookSignIn}
      >
        <i className="facebook icon"></i>Facebook
      </Button>
    </Form.Group>
  );
};

export default SocialSignIn;
