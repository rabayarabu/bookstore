import { useDispatch } from 'react-redux';
import { delBook } from '../redux/books/booksSlice';

const BookList = (prop) => {
  const dispatch = useDispatch();
  const {
    book: {
      author, title, id, category,
    },
  } = prop;
  const handleDelete = () => {
    dispatch(delBook(id));
  };

  return (
    <div className="booklist">
      <h2>
        {title}
      </h2>
      <p>
        {author}
      </p>
      <p>
        {category}
      </p>
      <button className="deletebtn" type="button" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BookList;
