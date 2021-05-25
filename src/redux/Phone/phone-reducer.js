import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { createSelector } from 'reselect';
import {
  getContactsSuccess,
  addSuccess,
  deleteChangeSuccess,
  filterChange,
  getContactsRequest,
  getContactsFailure,
  addContactsRequest,
  addFailure,
  deleteChangeFailure,
  deleteContactsRequest,
} from "./phone-actions";

const items = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => payload,
  [addSuccess]: (state, { payload }) => [...state, payload],

  [deleteChangeSuccess]: (state, { payload }) => [
    ...state.filter(({ id }) => id !== payload),
  ],
});

const error = createReducer(null, {});
const filterReducer = createReducer("", {
  [filterChange]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsFailure]: () => false,
  [addContactsRequest]: () => true,
  [addSuccess]: () => false,
  [addFailure]: () => false,
  [filterChange]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteChangeSuccess]: () => false,
  [deleteChangeFailure]: () => false,
});

export default combineReducers({
  items,
  filter: filterReducer,
  error,
  loading,
});
