import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookList = (prop) => {
  const dispatch = useDispatch();
  const { book: { author, title, id } } = prop;
  const handleDelete = () => {
    dispatch(removeBook({ id }));
  };

  return (
    <div className="booklist">
      <h2>
        {title}
      </h2>
      <p>
        {author}
      </p>
      <button className="deletebtn" type="button" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BookList;
