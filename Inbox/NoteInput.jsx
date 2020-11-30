import React, { useState } from 'react';
import { inputSMS, sendBtn } from './MessageInput.module.scss';
import { Button } from 'semantic-ui-react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNote } from '../../redux/clients/clients.actions';

// eslint-disable-next-line react/prop-types
const NoteInput = ({ clientList, selectedIndex, dispatch }) => {
  const [inputText, setInputText] = useState('');

  const handleOnClick = () => {
    if (!clientList[selectedIndex]) {
      return null;
    }
    var tempDate = new Date();
    const date = tempDate.toISOString();
    console.log(date);
    //using time stamp as id
    const note = {
      id: date,
      date: date,
      text: inputText,
      left: '800px',
      top: '500px',
    };
    if (inputText) {
      dispatch(addNote(note));
    }
    setInputText('');
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleOnClick();
    }
  };

  return (
    <div className="input ui fluid">
      <input
        type="text"
        placeholder="Text..."
        className={inputSMS}
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        onKeyDown={handleEnter}
      />
      <Button className={sendBtn} onClick={handleOnClick}>
        Put Note
      </Button>
    </div>
  );
};

function mapStateToProps(state) {
  const { clients } = state;
  console.log();
  return {
    clientList: clients.clientList,
    selectedIndex: clients.selectedIndex,
  };
}

NoteInput.propTypes = {
  clientList: PropTypes.array,
  selectedIndex: PropTypes.number,
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(NoteInput);
