import React from 'react';
import { Helmet } from 'react-helmet';
import UsersPageLayout from '../Components/Layouts/UsersPageLayout';
import SideNavBar from '../Components/Sidebar/SideNavBar';
import Users from '../Components/UsersPage/UsersPage';

const UsersPage = () => {
  return (
    <>
      <Helmet>
        <title>Users</title>
      </Helmet>
      <UsersPageLayout sidebar={<SideNavBar />} content={<Users />} />
    </>
  );
};

export default UsersPage;
