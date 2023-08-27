import { createSlice, nanoid } from "@reduxjs/toolkit";

export const ContactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact: {
        reducer: (state, action) => {
            state.push(action.payload)
          },
        prepare: (name, number) => {
            const id = nanoid();
            return {payload: {id, name, number}}
        }
    },
    delContact(state, { payload }) {
        return state.filter(contact => contact.id !== payload);
      },
  },
});

export const { addContact, delContact } = ContactsSlice.actions;
export default ContactsSlice.reducer
export const selectContacts = state => state.contacts