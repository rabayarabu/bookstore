import React, { useState } from 'react';

const BookForm = (prop) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const { onAddBook } = prop;
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new book object
    const newBook = {
      title,
      author,
    };

    // Call the onAddBook callback with the new book
    onAddBook(newBook);

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
          id="title"
          placeholder="Book Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <input
          type="text"
          id="author"
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
