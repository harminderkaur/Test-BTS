import { USERS_TYPES } from '../actionTypes';

const initialState = {
  users: [],
  usersError: null,
  loading: true
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_TYPES.GET_USERS:
      return {
        ...state,
        users: action.payload,
        usersError: null,
        loading: false
      };
    case USERS_TYPES.USERS_ERROR:
      return {
        ...state,
        users: [],
        usersError: action.payload,
        loading: false
      };
    case USERS_TYPES.ADD_USERS:
        return {
          ...state,
          users: [...state.users, action.payload ],
          usersError: action.payload,
          loading: false
        };
    default:
      return state;
  }
};
export default usersReducer;
