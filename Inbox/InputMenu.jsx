import React from 'react';
import { Menu } from 'semantic-ui-react';
import { menuWrapper, menuItem, normalItem } from './InputMenu.module.scss';
import { PropTypes } from 'prop-types';

const ClientBox = ({ activeItem, setActiveItem }) => {
  return (
    <Menu pointing borderless secondary className={menuWrapper}>
      <Menu.Item
        name="message"
        active={activeItem === 'Message'}
        onClick={() => setActiveItem('Message')}
        className={activeItem === 'Message' ? menuItem : normalItem}
      />
      <Menu.Item
        name="Note"
        active={activeItem === 'Note'}
        onClick={() => setActiveItem('Note')}
        className={activeItem === 'Note' ? menuItem : normalItem}
      />
    </Menu>
  );
};

ClientBox.propTypes = {
  activeItem: PropTypes.string,
  setActiveItem: PropTypes.func,
};

export default ClientBox;
