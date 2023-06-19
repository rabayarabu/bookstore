import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push(payload.book);
    },
    removeBook: (state, { payload }) => ({
      bookItems: state.books.filter((book) => book.id !== payload.id),
    }),
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
