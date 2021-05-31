import { USERS_TYPES } from '../actionTypes';
import httpRequest from '../utils/httpRequest';
const URL = 'https://jsonplaceholder.typicode.com/users';
const getUsers = () => async dispatch => {
  try {
    const res = await httpRequest({
      url: URL
    });
    dispatch({
      type: USERS_TYPES.GET_USERS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: USERS_TYPES.USERS_ERROR,
      payload: e.message
    });
  }
};

const updateUser = data => dispatch => {
  console.log(data);
  dispatch({
    type: USERS_TYPES.UPDATE_USER,
    payload: data
  });
};

const userActions = {
  getUsers,
  updateUser
};
export default userActions;
