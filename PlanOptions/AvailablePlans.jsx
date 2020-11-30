import React from 'react';
import { Segment, Header, List, Image, Grid } from 'semantic-ui-react';
import CreditMeter from '../CreditMeter/CreditMeter';
import { planWrapper, planOptions } from './PlanOptions.module.scss';

const AvailablePlans = () => {
  return (
    <Grid divided="vertically" className={planWrapper}>
      <Grid.Row columns={1}>
        <Grid.Column>monthly</Grid.Column>
        <Grid.Column>plan stuff</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default AvailablePlans;
