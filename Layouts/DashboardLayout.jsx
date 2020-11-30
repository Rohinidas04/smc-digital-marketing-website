import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Header from '../Dashboard/DashboardHeader';
import {
  left,
  right,
  topSegment,
  sideNavBar,
  dashboardContent,
} from './DashboardLayout.module.scss';

const DashboardLayout = ({ sidebar, content }) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={3} className={left}>
          <Segment className={sideNavBar}>{sidebar}</Segment>
        </Grid.Column>
        <Grid.Column width={13} className={right}>
          <Segment className={topSegment}>
            <Header headerTitle="DashBoard" />
          </Segment>
          <Segment className={dashboardContent}>{content}</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default DashboardLayout;

DashboardLayout.propTypes = {
  sidebar: PropTypes.any.isRequired,
  content: PropTypes.any.isRequired,
};
