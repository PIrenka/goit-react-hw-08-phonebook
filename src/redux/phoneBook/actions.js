import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
// import { v4 as uuid } from 'uuid';

import axois from 'axios';

axios.defaults.baseURL = 'http://localhost:3004';

export const addContact = ({ name, phone }) => dispatch => {
  const contact = { name, phone };

  dispatch({ type: 'contacts/addRequest' });

  axios
    .post('/contacts', contact)
    .then(({ data }) =>
      dispatch({ type: 'contacts/addConatctSuccess', payload: data }),
    )
    .catch(error =>
      dispatch({ type: 'contacts/addConatctError', payload: error }),
    );
};

// export const addContact = createAction('contacts/add', payload => ({
//   // export const addContact = createAction('contacts/add', ({ name, phone }) => ({
//   // payload: {
//   //   id: uuid(),
//   //   name,
//   //   phone,
//   // },
//   payload,
// }));
export const deleteContact = createAction('contacts/delete');
export const filterContacts = createAction('contacts/filter');
