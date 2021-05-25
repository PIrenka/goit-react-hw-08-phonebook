import { createAction } from "@reduxjs/toolkit";

export const getContactsRequest = createAction("contacts/getContactsRequest");
export const getContactsSuccess = createAction("contacts/getContactsSuccess");
export const getContactsFailure = createAction("contacts/getContactsFailurer");

export const addContactsRequest = createAction("contacts/addContactsRequest");
export const addSuccess = createAction("contacts/addSuccess");
export const addFailure = createAction("contacts/addFailure");

export const filterChange = createAction("contacts/filterChange");

export const deleteContactsRequest = createAction("contacts/deleteContactsRequest");
export const deleteChangeSuccess = createAction("contacts/deleteChangeSuccess");
export const deleteChangeFailure = createAction("contacts/deleteChangeFailure");
