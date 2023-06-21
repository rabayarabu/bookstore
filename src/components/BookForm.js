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
    <div className="book-form">
      <h3 className="new-book">ADD NEW BOOK</h3>
      <form onSubmit={addNewBook}>
        <input
          type="text"
          name="title"
          value={book.title}
          placeholder="Book Title"
          onChange={handleSubmit}
          required
        />
        <select
          className="select"
          name="category"
          value={book.category}
          onChange={handleSubmit}
        >
          <option value="Action">Action</option>
          <option value="Science-Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>

        <button type="submit" className="add-book-button">Add Book</button>
      </form>
    </div>

  );
};

export default BookForm;
