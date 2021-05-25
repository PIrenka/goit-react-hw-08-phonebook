import {
  getContactsRequest,
  getContactsSuccess,
  getContactsFailure,
  addContactsRequest,
  addSuccess,
  addFailure,
  deleteContactsRequest,
  deleteChangeSuccess,
  deleteChangeFailure,
} from './phone-actions';
import axios from 'axios';

export const getContact = () => async dispatch => {
  dispatch(getContactsRequest());
  try {
    const { data } = await axios.get('/contacts');

    dispatch(getContactsSuccess(data));
  } catch (error) {
    dispatch(getContactsFailure(error));
  }
};

export const addContact = ({ name, number }) => (dispatch, getState) => {
  dispatch(addContactsRequest());

  axios
    .post('/contacts', { name, number })
    .then(({ data }) => dispatch(addSuccess(data)))
    .catch(err => dispatch(addFailure(err)));
};
export const deleteContact = contactId => dispatch => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteChangeSuccess(contactId)))
    .catch(error => dispatch(deleteChangeFailure(error)));
};
