import clientsTypes from './clients.types';
import axios from 'axios';

const {
  DATA_INITIALIZED,

  SELECT_CLIENT,
  UPDATE_RESOLVE,
  UPDATE_NAME,
  UPDATE_PHONE,

  CREATE_CLIENT,
  DELETE_CLIENT,
  DELETE_CLIENT_BY_ID,
  TRASH_CLIENT,

  SEND_MESSAGE,
  //NEW_MESSAGE,

  CHANGE_LABEL,

  ADD_NOTE,
  DRAG_NOTE,
  DELETE_NOTE,

  RECEIVE_CREATE_CLIENT,
  RECEIVE_CREATE_CLIENT_SUCCESS,
  RECEIVE_CREATE_CLIENT_FAIL,

  NEW_CLIENT_AND_MESSAGE,

  REDIRECT_FROM_USERS_TO_INBOX,

  UPDATE_CLIENT_ORDERED_MAP,
} = clientsTypes;

export const getInitalData = (userID) => async (dispatch) => {
  try {
    let { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/inbox/clientList`,
      {
        params: { id: userID },
      }
    );
    // You're dispatching not only the metadata, but also setting isDataInitialized to true, to denote, that data has been loaded
    dispatch({ type: DATA_INITIALIZED, data: data.message });
  } catch (error) {
    //console.log(error);
  }
};

export const selectClient = (index) => {
  return {
    type: SELECT_CLIENT,
    index: index,
  };
};

export const updateResolve = () => {
  return {
    type: UPDATE_RESOLVE,
  };
};

export const updateName = (name) => {
  return {
    type: UPDATE_NAME,
    name,
  };
};

export const updatePhone = (phone) => {
  return {
    type: UPDATE_PHONE,
    phone,
  };
};

export const createClient = (id) => {
  //id is from the database

  //this function dispatch two reducer
  // client: generate a client
  // message: generate the corresponding message for client
  return {
    type: CREATE_CLIENT,
    id,
  };
};

export const deleteClient = () => {
  return {
    type: DELETE_CLIENT,
  };
};

export const deleteClientById = (id) => {
  return {
    type: DELETE_CLIENT_BY_ID,
    id,
  };
};

export const trashClient = () => {
  return {
    type: TRASH_CLIENT,
  };
};

// it will pop the client to the top of the clientlist and append the message
export const sendMessage = (id, message, order) => {
  return {
    type: SEND_MESSAGE,
    id,
    message,
    order,
  };
};

export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    note,
  };
};

export const dragNote = (noteId, x, y) => {
  return {
    type: DRAG_NOTE,
    noteId,
    x,
    y,
  };
};

export const deleteNote = (noteId) => {
  return {
    type: DELETE_NOTE,
    noteId,
  };
};

export const changeLabel = (label) => {
  return {
    type: CHANGE_LABEL,
    label,
  };
};

export const redirectFromUserToInbox = (id) => {
  return {
    type: REDIRECT_FROM_USERS_TO_INBOX,
    id,
  };
};

export function newClient() {
  return (dispatch) => {
    const newMessage = (data) => {
      return dispatch({
        type: NEW_CLIENT_AND_MESSAGE,
        id: data.id,
        phone: data.phone,
      });
    };

    return dispatch({
      type: 'socket',
      types: [
        RECEIVE_CREATE_CLIENT,
        RECEIVE_CREATE_CLIENT_SUCCESS,
        RECEIVE_CREATE_CLIENT_FAIL,
      ],
      promise: (socket) => socket.on('createClient', newMessage),
    });
  };
}

export const updateClientOrdedMap = (clientOrderedMap) => {
  return {
    type: UPDATE_CLIENT_ORDERED_MAP,
    clientOrderedMap,
  };
};
