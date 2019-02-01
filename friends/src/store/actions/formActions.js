import axios from 'axios';

export const ADD_FRIENDS_START = 'ADD_FRIENDS_START';
export const ADD_FRIENDS_SUCCESS = 'ADD_FRIENDS_SUCCESS';
export const ADD_FRIENDS_FAILURE = 'ADD_FRIENDS_FAILURE';

export const addFriend = item => dispatch => {
  dispatch({ type: ADD_FRIENDS_START });
  axios
    .post('http://localhost:5000/api/friends', item)
    .then(response => {
      dispatch({
        type: ADD_FRIENDS_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => dispatch({ type: ADD_FRIENDS_FAILURE, payload: err }));
};