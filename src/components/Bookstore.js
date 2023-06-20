import { useSelector } from 'react-redux';
import BookForm from './BookForm';
import BookList from './BookList';

const BookStore = () => {
  const { books } = useSelector((store) => store.books);

  return (
    <div className="books">
      {books.map((book) => (
        <BookList
          key={book.id}
          id={book.id}
          book={book}
        />
      ))}
      <BookForm />
    </div>
  );
};

export default BookStore;
