import React from 'react';
import { Image } from 'semantic-ui-react';
import inboxSearchBox from '../../assets/icons/inboxSearchBox.png';
import {
  searchWrapper,
  imageWrapper,
  searchBoxWrapper,
} from './SearchBox.module.scss';
import { connect } from 'react-redux';
import { createClient } from '../../redux/clients/clients.actions';
import PropTypes from 'prop-types';
import axios from 'axios';

const SearchBox = ({ userID, dispatch }) => {
  const handleCreateClient = async () => {
    try {
      const {
        data,
      } = await axios.post(`${process.env.REACT_APP_API_URL}/inbox/newclient`, {
        id: userID,
      });

      const clientID = data.message.clientID;

      dispatch(createClient(clientID));
    } catch (err) {
      //console.log(err.message);
    }
  };

  return (
    <div className={searchBoxWrapper}>
      <div className="ui left icon input fluid">
        <input placeholder="Search" className={searchWrapper} />
        <i aria-hidden="true" className="search icon"></i>
        <Image
          className={imageWrapper}
          src={inboxSearchBox}
          onClick={handleCreateClient}
        />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  const { user, auth } = state;
  return {
    userID: auth.user._id,
  };
}

SearchBox.propTypes = {
  dispatch: PropTypes.func,
  userID: PropTypes.string,
};

export default connect(mapStateToProps)(SearchBox);
