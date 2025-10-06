import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const selectContacts = (state) => {
  const search = state.filters.search.toLowerCase();
  if (search) {
    return state.contacts.items.filter(
      (contact) =>
        contact.name.toLowerCase().includes(search) ||
        contact.number.includes(state.filters.search)
    );
  }
  return state.contacts.items;
};

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
