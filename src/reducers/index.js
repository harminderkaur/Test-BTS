import { combineReducers } from 'redux';
import usersReducer from './userReducers';
export default combineReducers({
  users: usersReducer
});
