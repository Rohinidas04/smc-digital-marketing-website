import clientsTypes from './clients.types';
const {
  DATA_INITIALIZED,

  SELECT_CLIENT,
  UPDATE_RESOLVE,
  UPDATE_NAME,
  UPDATE_PHONE,
  CREATE_CLIENT,
  DELETE_CLIENT,
  TRASH_CLIENT,

  ADD_NOTE,
  DELETE_NOTE,
  DELETE_CLIENT_BY_ID,
  DRAG_NOTE,

  SEND_MESSAGE,

  NEW_MESSAGE,
  CHANGE_LABEL,
  NEW_CLIENT_AND_MESSAGE,

  REDIRECT_FROM_USERS_TO_INBOX,

  UPDATE_CLIENT_ORDERED_MAP,
} = clientsTypes;
const initialState = {
  isDataInitialized: false,
  clientList: [
    // {
    //   id: '1',
    //   name: 'important schedue testing',
    //   phone: '+1646288',
    //   lastView: '2:33',
    //   tag: 'Freelance',
    //   starred: false,
    //   importanted: true,
    //   scheduled: true,
    //   trash: false,
    //   lastMessage: '2:36',
    //   iconSrc: '/assets/icons/ivana.png',
    //   resolved: false,
    //   messages: [],
    //   label: '#5C6CE5',
    //   notes: {
    //     byId: {
    //       '1': {
    //         id: '1',
    //         date: '2020-08-11T19:23:53.098Z',
    //         text: '1234',
    //         left: '800px',
    //         top: '500px',
    //       },
    //       '2': {
    //         id: '2',
    //         date: '2020-08-11T19:40:51.515Z',
    //         text: '1234',
    //         left: '800px',
    //         top: '500px',
    //       },
    //     },
    //     allIds: ['1', '2'],
    //   },
    // },
    // {
    //   id: '2',
    //   name: 'scheduled',
    //   phone: '+13478491352',
    //   lastView: '2:33',
    //   tag: 'Freelance',
    //   starred: false,
    //   importanted: false,
    //   scheduled: true,
    //   trash: false,
    //   lastMessage: '2:36',
    //   iconSrc: '/assets/icons/ivana.png',
    //   resolved: false,
    //   messages: [],
    //   label: '#5C6CE5',
    //   notes: {
    //     byId: {},
    //     allIds: [],
    //   },
    // },
    // {
    //   id: '3',
    //   name: 'starred',
    //   phone: '+123456789',
    //   lastView: '2:33',
    //   tag: 'Freelance',
    //   starred: true,
    //   importanted: false,
    //   scheduled: false,
    //   trash: true,
    //   lastMessage: '2:36',
    //   iconSrc: '/assets/icons/ivana.png',
    //   resolved: false,
    //   messages: [],
    //   label: '#5C6CE5',
    //   notes: {
    //     byId: {},
    //     allIds: [],
    //   },
    // },
    // {
    //   id: '4',
    //   name: 'star',
    //   phone: '+122',
    //   lastView: '2:33',
    //   tag: 'Freelance',
    //   starred: true,
    //   importanted: false,
    //   scheduled: false,
    //   trash: false,
    //   lastMessage: '2:36',
    //   iconSrc: '/assets/icons/ivana.png',
    //   resolved: false,
    //   messages: [],
    //   label: '#5C6CE5',
    //   notes: {
    //     byId: {},
    //     allIds: [],
    //   },
    // },
    // {
    //   id: '5',
    //   name: 'admin Wu',
    //   phone: '+1234',
    //   lastView: '2:33',
    //   tag: 'Freelance',
    //   starred: false,
    //   importanted: false,
    //   scheduled: false,
    //   trash: false,
    //   lastMessage: '2:36',
    //   iconSrc: '/assets/icons/ivana.png',
    //   resolved: false,
    //   messages: [],
    //   label: '#5C6CE5',
    //   notes: {
    //     byId: {},
    //     allIds: [],
    //   },
    // },
    // {
    //   id: '6',
    //   name: 'admin Wu',
    //   phone: '+1235',
    //   lastView: '2:33',
    //   tag: 'Freelance',
    //   starred: false,
    //   importanted: false,
    //   scheduled: false,
    //   trash: false,
    //   lastMessage: '2:36',
    //   iconSrc: '/assets/icons/ivana.png',
    //   resolved: false,
    //   messages: [],
    //   label: '#5C6CE5',
    //   notes: {
    //     byId: {},
    //     allIds: [],
    //   },
    // },
  ],
  selectedIndex: 0,
  redirectFromUsertoInbox: false,
};

const emptyState = {
  isDataInitialized: false,
  clientList: [],
  selectedIndex: 0,
};

const defaultClient = {
  name: 'new client',
  phone: '+put',
  lastActive: '2:33',
  label: '#52A2E9',
  starred: false,
  importanted: false,
  scheduled: true,
  trash: false,
  lastMessage: '2:36',
  iconSrc: '/assets/icons/ivana.png',
  resolved: false,
  unread: 0,
  notes: {
    byId: {},
    allIds: [],
  },
};

function arrayReducer(state, action) {
  switch (action.type) {
    case TRASH_CLIENT: {
    }
    case ADD_NOTE:
      return {
        ...state,
        notes: {
          byId: { ...state.notes.byId, [action.note.id]: action.note },
          allIds: [...state.notes.allIds, action.note.id],
        },
      };
    case DRAG_NOTE:
      return {
        ...state,
        notes: {
          byId: {
            ...state.notes.byId,
            [action.noteId]: {
              ...state.notes.byId[action.noteId],
              left: action.x,
              top: action.y,
            },
          },
          allIds: [...state.notes.allIds.slice(0)],
        },
      };
    case DELETE_NOTE:
      const { [action.noteId]: _, ...rest } = state.notes.byId;
      return {
        ...state,
        notes: {
          byId: {
            ...rest,
          },
          allIds: [
            ...state.notes.allIds.filter((item) => item !== action.noteId),
          ],
        },
      };
    case CHANGE_LABEL:
      return { ...state, label: action.label };
    case UPDATE_NAME:
      return { ...state, name: action.name };
    case UPDATE_RESOLVE:
      return { ...state, resolved: !state.resolved };
    case UPDATE_PHONE:
      return { ...state, phone: action.phone };

    default:
      return state;
  }
}

export default function reducer(state = emptyState, action = {}) {
  switch (action.type) {
    case ADD_NOTE:
    case DELETE_NOTE:
    case DRAG_NOTE:
    case UPDATE_RESOLVE:
    case UPDATE_PHONE:
    case CHANGE_LABEL:
    case UPDATE_NAME: {
      return {
        ...state,
        clientList: [
          ...state.clientList.map((item, index) => {
            if (index !== state.selectedIndex) {
              return item;
            }
            return arrayReducer(item, action);
          }),
        ],
      };
    }
    case TRASH_CLIENT: {
      return {
        ...state,
        clientList: [
          ...state.clientList.map((item, index) => {
            if (index !== state.selectedIndex) {
              return item;
            }
            return { ...item, trash: !item.trash };
          }),
        ],
        selectedIndex: -1,
      };
    }
    case DELETE_CLIENT: {
      return {
        ...state,
        clientList: [
          ...state.clientList.slice(0, state.selectedIndex),
          ...state.clientList.slice(state.selectedIndex + 1),
        ],
        selectedIndex: -1,
      };
    }
    case DELETE_CLIENT_BY_ID: {
      //reset index
      return {
        ...state,
        clientList: [
          ...state.clientList.filter((element) => element._id != action.id),
        ],
        selectedIndex: -1,
      };
    }
    case DATA_INITIALIZED: {
      return {
        ...state,
        clientList: [...state.clientList, ...action.data],
        isDataInitialized: true,
      };
    }

    case CREATE_CLIENT: {
      var date = new Date().toISOString();

      var newClient = {
        ...defaultClient,
        lastActive: date,
        _id: action.id,
        lastMessage: date,
      };
      return {
        ...state,
        selectedIndex: 0,
        clientList: [newClient, ...state.clientList],
      };
    }
    case NEW_CLIENT_AND_MESSAGE: {
      var date = new Date().toISOString();

      var newClient = {
        ...defaultClient,
        lastActive: date,
        _id: action.id,
        lastMessage: date,
        phone: action.phone,
      };
      return {
        ...state,
        clientList: [
          ...state.clientList.slice(0, 1),
          newClient,
          ...state.clientList.slice(1),
        ],
      };
    }

    case SELECT_CLIENT: {
      return {
        ...state,
        clientList: [
          ...state.clientList.map((item, index) => {
            if (index !== state.selectedIndex) {
              return item;
            }
            return { ...item, unread: 0 };
          }),
        ],
        selectedIndex: action.index,
      };
    }

    case REDIRECT_FROM_USERS_TO_INBOX: {
      const newindex = state.clientList.findIndex(
        (element) => element._id === action.id
      );

      return { ...state, selectedIndex: newindex };
    }

    case SEND_MESSAGE: {
      // update the client List put it to the top
      // console.log(action.message);
      const now = new Date().toISOString();
      state.clientList[state.selectedIndex].lastActive = now;
      const newIndex = action.order === 'Recent' ? 0 : state.selectedIndex;

      return {
        ...state,
        clientList: [
          state.clientList[state.selectedIndex],
          ...state.clientList.slice(0, state.selectedIndex),
          ...state.clientList.slice(state.selectedIndex + 1),
        ],
        selectedIndex: newIndex,
      };
    }

    // a message come in update the last message
    case NEW_MESSAGE: {
      return { ...state };
    }
    case UPDATE_CLIENT_ORDERED_MAP: {
      return { ...state, clientOrderedMap: action.clientOrderedMap };
    }

    default: {
      return state;
    }
  }
}
