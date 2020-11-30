import React from 'react';
import { Helmet } from 'react-helmet';
import InboxLayout from '../Components/Layouts/InboxLayout';
import SideNavBar from '../Components/Sidebar/SideNavBar';
import Inbox from '../Components/Inbox/Inbox';

const InboxPage = () => {
  return (
    <div>
      <Helmet>
        <title>Inbox</title>
      </Helmet>
      <InboxLayout sidebar={<SideNavBar />} content={<Inbox />} />
    </div>
  );
};

export default InboxPage;
