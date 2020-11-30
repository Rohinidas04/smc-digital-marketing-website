import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { dragNote, deleteNote } from '../../redux/clients/clients.actions';
import {
  flowingWrapper,
  dateWrapper,
  monthWrapper,
  timeWrapper,
  textColor,
  deleteWrapper,
  deleteBtn,
} from './Notes.module.scss';

const renderNotes = (notes, props, dispatch) => {
  if (!notes.byId) {
    return <></>;
  }
  const { oldLeft, setOldLeft, oldTop, setOldTop } = props;
  const view = Object.keys(notes.byId).map((key) => {
    const item = notes.byId[key];

    const itemStyle = {
      position: 'absolute',
      left: item.left,
      top: item.top,
    };
    var date = new Date(item.date);
    var monthString = date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
    });
    var timeString = date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });

    const onDragStart = (event) => {};

    const onMouseDown = (event) => {
      setOldLeft(event.clientX);
      setOldTop(event.clientY);
    };

    const onDrag = (event) => {};

    const onDragEnd = (event, key) => {
      event.dataTransfer.dropEffect = 'move';
      const newleft =
        parseInt(event.target.style.left) + event.clientX - oldLeft;
      const newtop = parseInt(event.target.style.top) + event.clientY - oldTop;

      if (
        newleft < window.innerWidth - 50 &&
        newtop < window.innerHeight - 20
      ) {
        const left = `${newleft}px`;
        const right = `${newtop}px`;

        dispatch(dragNote(key, left, right));
      }
    };

    const handleDeleteNote = (event, noteId) => {
      dispatch(deleteNote(noteId));
    };

    return (
      <div
        key={item.id}
        className={flowingWrapper}
        style={itemStyle}
        draggable
        onDragStart={onDragStart}
        onDrag={onDrag}
        onDragEnd={(event) => onDragEnd(event, key)}
        onMouseDown={onMouseDown}
      >
        <div className={deleteWrapper}>
          <Icon
            color="grey"
            name="x"
            key={item.id}
            className={deleteBtn}
            onClick={(event) => handleDeleteNote(event, item.id)}
          />
        </div>

        <span className={textColor}>Note! </span>
        <span className={dateWrapper}>
          <span className={monthWrapper}>{monthString + ' '}</span>
          <span className={timeWrapper}>{timeString}</span>
        </span>
        <p>{item.text}</p>
      </div>
    );
  });
  return view;
};

const Notes = ({ clientList, selectedIndex, dispatch }) => {
  const [oldLeft, setOldLeft] = useState(0);
  const [oldTop, setOldTop] = useState(0);
  const props = { oldLeft, setOldLeft, oldTop, setOldTop };
  const selectedClient = clientList[selectedIndex];
  if (!selectedClient) {
    return <></>;
  }
  return <div>{renderNotes(selectedClient.notes, props, dispatch)}</div>;
};

function mapStateToProps(state) {
  const { clients } = state;
  return {
    clientList: clients.clientList,
    selectedIndex: clients.selectedIndex,
  };
}

Notes.propTypes = {
  clientList: PropTypes.array,
  selectedIndex: PropTypes.number,
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(Notes);
