import axios from 'axios';

import * as actions from './authActions';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const register = ({ name, email, password }) => async dispatch => {
  dispatch(actions.registerRequest());
  try {
    const response = await axios.post('/users/signup', {
      name,
      email,
      password,
    });
    token.set(response.data.token);
    dispatch(actions.registerSuccess(response.data));
  } catch (err) {
    dispatch(actions.registerError(err.message));
  }
};
export const login = ({ name, email, password }) => async dispatch => {
  dispatch(actions.loginRequest());
  try {
    const response = await axios.post('/users/login', {
      name,
      email,
      password,
    });
    token.set(response.data.token);
    dispatch(actions.loginSuccess(response.data));
  } catch (error) {
    dispatch(actions.loginError(error.message));
  }
};

export const logOut = () => async dispatch => {
  dispatch(actions.logoutRequest());
  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(actions.logoutSuccess());
  } catch (error) {
    dispatch(actions.logoutError(error.message));
  }
};
export const getUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(actions.getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');

    dispatch(actions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(actions.getCurrentUserError(error.message));
  }
};
