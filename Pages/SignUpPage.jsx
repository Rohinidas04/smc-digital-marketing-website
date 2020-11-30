import React from 'react';
import { Helmet } from 'react-helmet';
import SignUpLayout from '../Components/Layouts/SignUpLayout';
import SignUpForm from '../Components/Forms/SignUpForm';
import FreeTrialInfo from '../Components/SignUpInfo/FreeTrialInfo';

const SignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <SignUpLayout info={<FreeTrialInfo />} content={<SignUpForm />} />
    </>
  );
};

export default SignUpPage;
