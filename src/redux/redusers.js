import  contactsReducer  from "./ContactsSlice";
import  filterReducer  from "./FilterSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});