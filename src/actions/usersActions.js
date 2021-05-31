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


const addUser = () => async dispatch => {
  try {
    const res = await httpRequest({
      url: URL
    });
    dispatch({
      type: USERS_TYPES.ADD_USERS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: USERS_TYPES.USERS_ERROR,
      payload: e.message
    });
  }
};


export const addNewUser = data => {
  console.log("adding mother a new user", data);
  return dispatch => {
    axios.post(URL)
    .then(response =>{
     console.log("datata sent by me", response.data)
      dispatch(addUser(data));
      dispatch(getUsers());
    })
    .catch((e) => {
      dispatch({
        type: USERS_TYPES.USERS_ERROR,
        payload: e.message
      });
    })
  }
}

const userActions = {
  getUsers, addUser
};
export default userActions;
