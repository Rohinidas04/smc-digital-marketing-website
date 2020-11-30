import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { menuContainer } from './AnalyticsHeader.module.scss';

const AnalyticsHeader = () => {
  const [activeItem, setActiveItem] = useState({ item: 'messages' });
  const [activeItem2, setActiveItem2] = useState({
    item: 'Current Billing Cycle',
  });

  const handleClick = (e, { name }) => {
    setActiveItem({ item: name });
  };

  const handleClick2 = (e, { name }) => {
    setActiveItem2({ item: name });
  };

  return (
    <div className={menuContainer}>
      <Menu secondary>
        <Menu.Item
          name="messages"
          active={activeItem.item === 'messages'}
          onClick={handleClick}
        />
        <Menu.Item
          name="subscribers"
          active={activeItem.item === 'subscribers'}
          onClick={handleClick}
        />
      </Menu>
      <Menu>
        <Menu.Item
          name="Current Billing Cycle"
          active={activeItem2.item === 'Current Billing Cycle'}
          onClick={handleClick2}
        />
        <Menu.Item
          name="7 Days"
          active={activeItem2.item === '7 Days'}
          onClick={handleClick2}
        />
        <Menu.Item
          name="30 Days"
          active={activeItem2.item === '30 Days'}
          onClick={handleClick2}
        />
        <Menu.Item
          name="90 Days"
          active={activeItem2.item === '90 Days'}
          onClick={handleClick2}
        />
      </Menu>
    </div>
  );
};

export default AnalyticsHeader;
