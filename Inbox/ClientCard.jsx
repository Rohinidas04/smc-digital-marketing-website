import React from 'react';
import { Image, List, Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  messageItem,
  contenItem,
  clientName,
  dateWrapper,
  monthWrapper,
  timeWrapper,
  leftImage,
  leftContent,
  rightContent,
  messageWrapper,
  labelWrapper,
  labelTextWrapper,
  emXem,
  relativeInlineBlock,
  emHeight,
} from './ClientCard.module.scss';
import Ivana from '../../assets/icons/ivana-cajina-_7LbC5J-jw4-unsplash@2x.png';
import { changeLabel } from '../../redux/clients/clients.actions';
import axios from 'axios';

const renderTime = (timeStamp) => {
  //clean up date
  var date = new Date(timeStamp);
  var monthString = date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
  });
  var timeString = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return (
    <div className={dateWrapper}>
      <span className={monthWrapper}>{monthString + ' '}</span>
      <span className={timeWrapper}>{timeString}</span>
    </div>
  );
};

const renderDropDownLabel = (
  clientID,
  clientLabel,
  userID,
  labelList,
  dispatch
) => {
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

  const submitUpdate = async (updateData) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/inbox/client`, {
        id: userID,
        clientID,
        data: updateData,
      });
    } catch (err) {
      //console.log(err.message);
    }
  };

  const handleChange = (event, key) => {
    submitUpdate({ label: key.value });
    dispatch(changeLabel(key.value));
  };

  return (
    <Dropdown
      inline
      options={labelOptions}
      value={clientLabel}
      icon={null}
      onChange={handleChange}
    />
  );
};

const ClientCard = ({ message, selectedClient, user, dispatch }) => {
  return (
    <List.Item
      className={messageItem}
      onDoubleClick={() => {
        console.log('mark it important');
      }}
    >
      <div>
        <div className={leftImage}>
          <Image avatar src={Ivana} />
        </div>
        <div className={rightContent}>
          <div className={contenItem}>
            <div className={leftContent}>
              <div className={clientName}>{selectedClient.name}</div>
              <div className={[emXem, relativeInlineBlock].join(' ')}>
                {renderDropDownLabel(
                  selectedClient._id,
                  selectedClient.label,
                  user.id,
                  user.labelsOption,
                  dispatch
                )}
              </div>
              <p className={messageWrapper}>{message.text}</p>
            </div>
          </div>
          {renderTime(message.date)}
        </div>
      </div>
    </List.Item>
  );
};

function mapStateToProps(state) {
  const { clients, user } = state;

  const selectedClient = clients.clientList[clients.selectedIndex];
  return {
    selectedClient,
    user,
  };
}

ClientCard.propTypes = {
  message: PropTypes.shape({
    date: PropTypes.string,
    text: PropTypes.string,
    name: PropTypes.string,
    from: PropTypes.string,
  }),
  selectedClient: PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    _id: PropTypes.string,
  }),
  dispatch: PropTypes.func,
  user: PropTypes.shape({
    labelsOption: PropTypes.array,
    id: PropTypes.string,
  }),
};

export default connect(mapStateToProps)(ClientCard);
