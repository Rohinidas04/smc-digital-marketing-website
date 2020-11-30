import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import {
  iconWrapper,
  menuItemWrapper,
  menuWrapper,
  menuItemTextWrapper,
  labelTextWrapper,
  inlineBlock,
  activemenuItemWrapper,
  labelIconWrapper,
} from './FilterBox.module.scss';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import inboxIcon from '../../assets/icons/InboxIcon/filterBox/inbox.png';
import selectedInboxIcon from '../../assets/icons/InboxIcon/filterBox/selectedInbox.png';
import starIcon from '../../assets/icons/InboxIcon/filterBox/starred.png';
import selectedStarIcon from '../../assets/icons/InboxIcon/filterBox/selectedStarred.png';
// import importantIcon from '../../assets/icons/InboxIcon/filterBox/important.png';
// import selectedImportantIcon from '../../assets/icons/InboxIcon/filterBox/selectedImportant.png';
import scheduleIcon from '../../assets/icons/InboxIcon/filterBox/scheduled.png';
import selectedScheduleIcon from '../../assets/icons/InboxIcon/filterBox/selectedScheduled.png';
import trashIcon from '../../assets/icons/InboxIcon/filterBox/trash.png';
import selectedTrashIcon from '../../assets/icons/InboxIcon/filterBox/selectedTrash.png';

// if user send any message, make the client to the top of the list
import { register } from '../../redux/user/user.actions';

import { setVisibilityFilter } from '../../redux/inboxFilter/inboxFilter.actions';

const FilterBox = ({ inboxVisibilityFilter, dispatch, userID, isRegister }) => {
  //useEffect(scrollToBottom, [messages]);

  if (!isRegister) {
    dispatch(register(userID));
  }

  const tagsOption = [
    {
      src: inboxIcon,
      selectedSrc: selectedInboxIcon,
      text: 'Inbox',
      key: 'inbox',
    },
    {
      src: starIcon,
      selectedSrc: selectedStarIcon,
      text: 'Starred',
      key: 'starred',
    },
    {
      src: scheduleIcon,
      selectedSrc: selectedScheduleIcon,
      text: 'Scheduled',
      key: 'scheduled',
    },
    {
      src: trashIcon,
      selectedSrc: selectedTrashIcon,
      text: 'Trash',
      key: 'trash',
    },
  ];

  const labelsOption = [
    { color: '#52A2E9', text: 'Theme support' },
    { color: '#EFB35B', text: 'Freelance' },
    { color: '#5C6CE5', text: 'Social' },
    { color: '#E96A75', text: 'Friends' },
    { color: '#39B488', text: 'Family' },
  ];

  const renderTags = (tagsOption) => {
    const tags = tagsOption.map((element) => {
      var selected =
        element.key === inboxVisibilityFilter.filter ? true : false;
      return (
        <div key={element.key}>
          <Menu.Item
            className={selected ? activemenuItemWrapper : menuItemWrapper}
            onClick={() => {
              dispatch(setVisibilityFilter(element.key));
            }}
          >
            <div className={inlineBlock}>
              <Image
                src={selected ? element.selectedSrc : element.src}
                className={iconWrapper}
              />
              <span className={menuItemTextWrapper}>{element.text}</span>
            </div>
          </Menu.Item>
        </div>
      );
    });
    return tags;
  };
  const renderLabels = (labelsOption) => {
    const labels = labelsOption.map((element) => {
      return (
        <div key={element.color}>
          <Menu.Item
            // className={
            //   element.text === inboxVisibilityFilter.label
            //     ? activemenuItemWrapper
            //     : menuItemWrapper
            // }
            className={menuItemWrapper}
            onClick={() => {
              // dispatch(setLabelFilter(element.text));
            }}
          >
            <div className={inlineBlock}>
              <div
                className={labelIconWrapper}
                style={{ color: element.color }}
              ></div>
              <span className={labelTextWrapper}>{element.text}</span>
            </div>
          </Menu.Item>
        </div>
      );
    });
    return labels;
  };

  return (
    <div>
      <Menu text vertical className={menuWrapper}>
        {renderTags(tagsOption)}
        <Menu.Item
          key="showall"
          header
          className={menuItemWrapper}
          onClick={() => {
            // dispatch(setLabelFilter('SHOW_ALL'));
          }}
        >
          Labels
        </Menu.Item>
        {renderLabels(labelsOption)}
      </Menu>
    </div>
  );
};

function mapStateToProps(state) {
  const { inboxVisibilityFilter, user } = state;
  return {
    inboxVisibilityFilter,
    isRegister: user.isRegister,
    userID: user.id,
  };
}

FilterBox.propTypes = {
  inboxVisibilityFilter: PropTypes.shape({
    filter: PropTypes.string,
    label: PropTypes.string,
  }),
  dispatch: PropTypes.func,
  isRegister: PropTypes.bool,
  userID: PropTypes.string,
};

export default connect(mapStateToProps)(FilterBox);
