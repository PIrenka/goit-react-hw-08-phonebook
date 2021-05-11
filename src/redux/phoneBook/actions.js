import { createAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export const addContact = createAction('contacts/add', ({ name, phone }) => ({
  payload: {
    id: uuid(),
    name,
    phone,
  },
}));
export const deleteContact = createAction('contacts/delete');
export const filterContacts = createAction('contacts/filter');
