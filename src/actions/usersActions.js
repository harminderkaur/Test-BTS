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

const updateUser = () => async dispatch =>{
  dispatch({
    type: USERS_TYPES.UPDATE_USERS,
  });
}


const addUser = () => async dispatch =>{
    dispatch({
      type: USERS_TYPES.ADD_USERS,
    });
}

const userActions = {
  getUsers, addUser, updateUser
};
export default userActions;
