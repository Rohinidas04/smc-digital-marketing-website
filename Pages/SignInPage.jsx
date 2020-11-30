import React from 'react';
import { Helmet } from 'react-helmet';
import SignUpLayout from '../Components/Layouts/SignUpLayout';
import SignInForm from '../Components/Forms/SignInForm';
import FreeTrialInfo from '../Components/SignUpInfo/FreeTrialInfo';

const SignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <SignUpLayout info={<FreeTrialInfo />} content={<SignInForm />} />
    </>
  );
};

export default SignUpPage;
