import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

// const items = createReducer([], {
//   'contacts/addContactSuccess': (state, action) => [...state, action.payload],
//   // [addContact]: (state, action) => [...state, action.payload],
//   [deleteContact]: (state, action) =>
//     state.filter(({ id }) => id !== action.payload),
// });

// const filter = createReducer('', {
//   [filterContacts]: (_, action) => action.payload,
// });

// export default combineReducers({ items, filter });

const items = createReducer([], {
  [actions.getContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, { payload }) => [...state, payload],

  [actions.deleteContactSuccess]: (state, { payload }) => [
    ...state.filter(({ id }) => id !== payload),
  ],
});

const error = createReducer(null, {});
const filter = createReducer('', {
  [actions.filterContacts]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [actions.getContactsRequest]: () => true,
  [actions.getContactsSuccess]: () => false,
  [actions.getContactsError]: () => false,
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
  [actions.filterContacts]: () => false,
});

export default combineReducers({
  items,
  filter,
  error,
  loading,
});
