import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import {
  dropdownWrapper,
  middleSeperate,
  normalFontWeight,
  width40px,
} from './Tags.module.scss';
import {
  labelWrapper,
  labelTextWrapper,
  emHeight,
} from './ClientCard.module.scss';
import {
  setLabelFilter,
  setShowFilter,
  setOrderFilter,
} from '../../redux/inboxFilter/inboxFilter.actions';
import { selectClient } from '../../redux/clients/clients.actions';
const showOption = [
  { key: 'Show All', text: 'Show All', value: 'Show All' },
  { key: 'Unread', text: 'Unread', value: 'Unread' },
];

const orderOption = [
  { key: 'Recent', text: 'Recent', value: 'Recent' },
  { key: 'Older', text: 'Older', value: 'Older' },
];

const renderDropDownLabel = (label, labelList, handleChange) => {
  //turn the label List into dropdown format
  const labelOptions = labelList.map((item) => {
    return {
      key: item.color,
      text: <div className={labelWrapper} style={{ color: item.color }}></div>,
      value: item.color,
      content: (
        <div className={emHeight}>
          <div className={labelWrapper} style={{ color: item.color }}></div>
          <div className={labelTextWrapper}>{item.text}</div>
        </div>
      ),
    };
  });

  return (
    <Dropdown
      inline
      options={labelOptions}
      value={label}
      onChange={handleChange}
    />
  );
};

const renderDropDown = (label, labelList, handleChange) => {
  //turn the label List into dropdown format
  const labelOptions = labelList.map((item) => {
    return {
      key: item.text,
      text: <div className={width40px}>{item.text}</div>,
      value: item.text,
      content: (
        <div className={emHeight}>
          <div className={normalFontWeight}>{item.text}</div>
        </div>
      ),
    };
  });

  return (
    <Dropdown
      inline
      options={labelOptions}
      value={label}
      onChange={handleChange}
    />
  );
};

const SearchBox = ({ labelsOption, inboxVisibilityFilter, dispatch }) => {
  const { label, show, order } = inboxVisibilityFilter;

  const handleOrderChange = (event, key) => {
    dispatch(selectClient(-1));
    dispatch(setOrderFilter(key.value));
  };
  const handleShowChange = (event, key) => {
    dispatch(selectClient(-1));
    dispatch(setShowFilter(key.value));
  };

  const handleLabelChange = (event, key) => {
    dispatch(selectClient(-1));
    dispatch(setLabelFilter(key.value));
  };

  return (
    <div className={dropdownWrapper}>
      {renderDropDown(show, showOption, handleShowChange)}
      <div className={middleSeperate}></div>
      {renderDropDown(order, orderOption, handleOrderChange)}
      <div className={middleSeperate}> </div>
      {renderDropDownLabel(label, labelsOption, handleLabelChange)}
    </div>
    // <div className={dropdownWrapper}>
    //   <Menu secondary widths={3}>
    //     {renderDropDown(show, showOption)}
    //     {renderDropDown(order, orderOption)}
    //     {renderDropDownLabel(label, labelsOption)}
    //   </Menu>
    // </div>
  );
};

function mapStateToProps(state) {
  const { user, inboxVisibilityFilter } = state;

  return {
    labelsOption: user.labelsOption,
    inboxVisibilityFilter,
  };
}

SearchBox.propTypes = {
  dispatch: PropTypes.func,
  labelsOption: PropTypes.array,
  inboxVisibilityFilter: PropTypes.shape({
    label: PropTypes.string,
    show: PropTypes.string,
    order: PropTypes.string,
  }),
};

export default connect(mapStateToProps)(SearchBox);
