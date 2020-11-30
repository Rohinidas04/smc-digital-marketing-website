import React from 'react';
import CreditMeter from '../CreditMeter/CreditMeter';
import NumberSegment from './NumberSegment';
import Inbox from './SmallInbox';
import AnalyticsHeader from '../Analytics/AnalyticsHeader';
import Graph from '../Graph/Graph';
import { Grid, Segment } from 'semantic-ui-react';
import { grid, progress, label, wrapper } from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <Grid className={grid}>
      <Grid.Row>
        <Grid.Column width={10}>
          <Segment>
            <CreditMeter
              totalCredits={50}
              used={20}
              classN={progress}
              size={'medium'}
              labelClass={label}
            />
          </Segment>
        </Grid.Column>
        <Grid.Column width={6}>
          <Segment>
            <NumberSegment telNumber={'+1 (833) 740-4174'} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={10}>
          <Segment className={wrapper}>
            <AnalyticsHeader />
            <Graph />
          </Segment>
        </Grid.Column>
        <Grid.Column width={6}>
          <Segment>
            <Inbox />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Dashboard;
