import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactReducer from "./reducers/contactsSlice";
import filterReducer from "./reducers/filtersSlice";

const rootReducer = combineReducers({
  contacts: contactReducer,
  filters: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
