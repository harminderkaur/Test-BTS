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
    case USERS_TYPES.UPDATE_USER:
      return {
        ...state,
        users: state.users.map(item => {
          return item.id === action.payload.id ? { ...action.payload } : { ...item };
        }),
        loading: false
      };
    case USERS_TYPES.ADD_USER:
      console.log("reducer", action)
        return {
          ...state,
          users: [...state.users, {...action.payload, id:state.users.length + 1}],
          loading: false
        };
    default:
      return state;
  }
};
export default usersReducer;