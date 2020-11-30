import React from 'react';
import { Segment, Header, List, Image, Grid } from 'semantic-ui-react';
import CreditMeter from '../CreditMeter/CreditMeter';
import { planWrapper, planOptions } from './PlanOptions.module.scss';

const YourPlan = () => {
  return (
    <Grid divided="vertically" className={planWrapper}>
      <Grid.Row columns={3}>
        <Grid.Column width={2}>
          <Header as="h3">Your Plan</Header>
        </Grid.Column>
        <Grid.Column width={7}>
          <List divided verticalAlign="middle">
            <List.Item>
              <List.Content className={planOptions}>
                <List.Header>Selected Plan</List.Header>
                <List.Header>Free Trial</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content className={planOptions}>
                <List.Header>Pre Paid</List.Header>
                <List.Header>14 days</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content className={planOptions}>
                <List.Header>Next Charge</List.Header>
                <List.Header>Jul 9th, 2020</List.Header>
              </List.Content>
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={7}>
          <p>1 credit per SMS / 3 credits per MMS.</p>
          <CreditMeter totalCredits={50} used={20} size={'medium'} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default YourPlan;
