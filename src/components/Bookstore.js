import React, { useState } from 'react';
import BookForm from './BookForm';
import DeleteBook from './BookList';

const BookList = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    // ...more books
  ]);

  const handleDeleteBook = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };
  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };
  return (
    <div className="books">
      {books.map((book) => (
        <DeleteBook
          key={book.id}
          title={book.title}
          author={book.author}
          onClick={() => handleDeleteBook(book.id)}
        />
      ))}
      <BookForm onAddBook={handleAddBook} />
    </div>
  );
};

export default BookList;
