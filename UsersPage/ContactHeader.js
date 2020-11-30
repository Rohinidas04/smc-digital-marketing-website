import React, { useRef, useState } from 'react';
import { Segment, Button, Image, Icon, Input } from 'semantic-ui-react';
import {
  buttonGroup,
  overFlow,
  hightlineButton,
  buttonWrapper,
} from './UsersPage.module.scss';
import cloudUpload from '../../assets/icons/usersPageIcon/cloud-upload-outline.svg';
import setting from '../../assets/icons/usersPageIcon/settings-outline.svg';
import shuffle from '../../assets/icons/usersPageIcon/shuffle-outline.svg';
import add from '../../assets/icons/usersPageIcon/add-outline.svg';
import userAdd from '../../assets/icons/usersPageIcon/Icon ionic-md-person-add.svg';
import Papa from 'papaparse';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setPage,
  createContact,
  importList,
} from '../../redux/usersPage/usersPage.action';
import NewContactModal from './NewContactModal';

const ContactHeader = ({ userID, dispatch }) => {
  const fileInputRef = useRef();
  const [currentFile, setCurrentFile] = useState();

  const onFileChange = async (event) => {
    setCurrentFile(event.target.files[0]);

    let contactListName = event.target?.files[0]?.name;

    // if it is undefine, it will the file dont have name, there for, it will be return
    if (!contactListName) {
      return;
    }

    Papa.parse(event.target.files[0], {
      header: true,
      complete: function (data) {
        dispatch(importList(userID, contactListName, data.data));
      },
      error: (error) => {
        // handle error
      },
    });
  };

  return (
    <>
      <Segment className={buttonGroup}>
        <div className={overFlow}>
          <Button size="small" className={hightlineButton}>
            <Icon as={Image} src={userAdd} />
            <span>Add Contact </span>
          </Button>
          <NewContactModal />

          <Button
            size="small"
            className={buttonWrapper}
            onClick={() => fileInputRef.current.click()}
          >
            <Icon as={Image} src={cloudUpload} />
            <span>Import</span>
            <input
              ref={fileInputRef}
              id="myInput"
              style={{ display: 'none' }}
              type={'file'}
              accept={'.csv'}
              onChange={onFileChange}
            />
          </Button>

          <Button
            size="small"
            className={buttonWrapper}
            onClick={() => {
              console.log('create new segment');
              dispatch(createContact(userID));
            }}
          >
            <Icon as={Image} src={add} />
            <span>Add List</span>
          </Button>

          <Button
            size="small"
            className={buttonWrapper}
            onClick={() => {
              dispatch(setPage('CREATE_SEGMENT_SECTION'));
            }}
          >
            <Icon as={Image} src={shuffle} />
            <span>Add Segment</span>
          </Button>
          <Button size="small" floated="right" className={buttonWrapper}>
            <Icon as={Image} src={setting} />
            <span>Custom Fields</span>
          </Button>
        </div>
      </Segment>
    </>
  );
};

function mapStateToProps(state) {
  const { auth } = state;
  return {
    userID: auth.user._id,
  };
}

ContactHeader.propTypes = {
  userID: PropTypes.string,
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(ContactHeader);
