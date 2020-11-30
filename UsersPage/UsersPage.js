import React from 'react';

import { Grid, Segment, Header, Icon } from 'semantic-ui-react';
import { padding, sementWrapper } from './UsersPage.module.scss';
import UsersList from './UsersList';
import ContactsMangament from './ContactsMangament';
import CreateSegmentPage from './CreateSegment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getInitalData } from '../../redux/usersPage/usersPage.action';

const pageOption = {
  USERS_PAGE: 'USERS_PAGE',
  CREATE_SEGMENT_SECTION: 'CREATE_SEGMENT_SECTION',
  MANAGE_CONTACT_LIST_SECTION: 'MANAGE_CONTACT_LIST_SECTION',
  MANAGE_CUSTOM_SETTING_SECTION: 'MANAGE_CUSTOM_SETTING_SECTION',
};

const Users = ({ isInit, userID, currentPage, dispatch }) => {
  const createSegmentPage = true;

  //init contact list and segment list get data from the sever
  if (!isInit) {
    dispatch(getInitalData(userID));
  }

  const renderCreateSegmentPage = () => {
    return <CreateSegmentPage />;
  };

  const renderUserPage = () => {
    return (
      <Grid>
        <Grid.Row className={padding}>
          <Grid.Column width={6}>
            <Segment.Group className={sementWrapper}>
              <UsersList />
            </Segment.Group>
          </Grid.Column>
          <Grid.Column width={10}>
            <Segment.Group className={sementWrapper}>
              <ContactsMangament />
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  };

  switch (currentPage) {
    case pageOption.USERS_PAGE:
      return renderUserPage();
    case pageOption.CREATE_SEGMENT_SECTION:
      return renderCreateSegmentPage();
    default:
      return renderUserPage();
  }
};

function mapStateToProps(state) {
  const { usersPage, auth } = state;
  return {
    isInit: usersPage.init,
    userID: auth.user._id,
    currentPage: usersPage.currentPage,
  };
}

Users.propTypes = {
  isInit: PropTypes.bool,
  currentPage: PropTypes.string,
};

export default connect(mapStateToProps)(Users);
