import React from 'react';
import { Helmet } from 'react-helmet';
import MoreInfo from '../Components/MoreInfo';

const MoreInfoPage = () => {
  return (
    <>
      <Helmet>
        <title>More info</title>
      </Helmet>
      <MoreInfo />
    </>
  );
};

export default MoreInfoPage;
