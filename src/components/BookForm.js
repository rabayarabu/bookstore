import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new book object
    // Call the AddBook callback with the new book
    dispatch(addBook({ book: { id: uuid(), title, author } }));
    // Clear the form inputs
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Book Aouthor"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          required
        />

        <button type="submit">Add Book</button>
      </form>
    </>

  );
};

export default BookForm;
