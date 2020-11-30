import React from 'react';
import { Helmet } from 'react-helmet';
import DashboardLayout from '../Components/Layouts/DashboardLayout';
import SideNavBar from '../Components/Sidebar/SideNavBar';
import Dashboard from '../Components/Dashboard/Dashboard';

const DashboardPage = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <DashboardLayout sidebar={<SideNavBar />} content={<Dashboard />} />
    </>
  );
};

export default DashboardPage;
