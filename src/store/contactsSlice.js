import { createSlice, current, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contacts = [...state.contacts, action.payload];
      },
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.contacts = [
        ...state.contacts.filter(contact => contact.id !== action.payload),
      ];
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
