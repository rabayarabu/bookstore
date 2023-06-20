import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';
import { selectBooks } from '../redux/store';
import { getBooks } from '../redux/books/booksSlice';

const BookStore = () => {
  const {
    books, getStatus, postStatus, delStatus,
  } = useSelector(selectBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (getStatus.loading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  if (getStatus.error) {
    return (
      <div>
        <h3>An error occurred:</h3>
        <pre>{getStatus.errMsg}</pre>
      </div>
    );
  }

  return (
    <div>
      <BookForm />
      <p>{postStatus.loading ? 'Posting...' : ''}</p>
      <p>{delStatus.loading ? 'Deleting...' : ''}</p>
      <pre>{postStatus.error ? postStatus.errMsg : ''}</pre>
      <pre>{delStatus.error ? delStatus.errMsg : ''}</pre>
      <ul>
        {books.map((book) => (
          <BookList key={book.id} id={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default BookStore;
