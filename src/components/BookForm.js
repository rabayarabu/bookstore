import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { postBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ title: '', author: '', category: '' });

  const addNewBook = (e) => {
    e.preventDefault();
    if (book.title !== '') {
      dispatch(postBook({ item_id: uuid(), ...book }));
      setBook({ title: '', author: '', category: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new book object
    // Call the AddBook callback with the new book
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={addNewBook}>
        <input
          type="text"
          name="title"
          value={book.title}
          placeholder="Book Title"
          onChange={handleSubmit}
          required
        />

        <input
          type="text"
          placeholder="Book Aouthor"
          name="author"
          value={book.author}
          onChange={handleSubmit}
          required
        />

        <input
          type="text"
          placeholder="Category"
          name="category"
          value={book.category}
          onChange={handleSubmit}
          required
        />

        <button type="submit">Add Book</button>
      </form>
    </>

  );
};

export default BookForm;
