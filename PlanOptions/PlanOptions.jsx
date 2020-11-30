/*eslint-disable react/prop-types*/
import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import {
  Card,
  Icon,
  Select,
  Segment,
  Header,
  Container,
  Button,
  Image,
} from 'semantic-ui-react';
import SingleViewLayout from '../Layouts/SingleViewLayout';

import {
  pageWrapper,
  numberTitle,
  cardGroupWrapper,
  bottomSegment,
} from './PlanOptions.module.scss';
import YourPlan from './YourPlan';
import AvailablePlans from './AvailablePlans';

const Plans = () => {
  return (
    <Segment className={pageWrapper}>
      <Container>
        <YourPlan />
        <AvailablePlans />
      </Container>
    </Segment>
  );
};

const PlanOptions = () => {
  return <SingleViewLayout title="Plans" body={<Plans />} />;
};

export default PlanOptions;
