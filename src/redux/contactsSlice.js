import { createSlice, combineReducers } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    deleteContact: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
    addItem: (state, { payload }) => [...state, { ...payload }],
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: { changeFilter: (_, { payload }) => payload },
});

export const contactsReducers = combineReducers({
  items: itemsSlice.reducer,
  filter: filterSlice.reducer,
});

export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const { addItem } = itemsSlice.actions;
export const { deleteContact } = itemsSlice.actions;
export const { changeFilter } = filterSlice.actions;
