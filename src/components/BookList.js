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
    <li>
      <div className="booklist">
        <div className="book">
          <p>
            {category}
          </p>
          <h2>
            {title}
          </h2>
          <p>
            {author}
          </p>
          <div className="buttonlist">
            <button type="button" className="btn">Comments</button>
            <button type="button" className="btn" onClick={handleDelete}>Remove</button>
            <button type="button" className="btn">Edit</button>
          </div>
        </div>
        <div className="progress blue">
          <span className="progress-left">
            <span className="progress-bar" />
          </span>
          <span className="progress-right">
            <span className="progress-bar" />
          </span>
          <div className="progress-value">90%</div>
          <div className="completed">completed</div>
        </div>
        <div className="chapter">
          <h5 className="current-chapter">CURRENT CHAPTER</h5>
          <p>Chapter 1</p>
          <button type="button" className="progress-btn">Update Progress</button>
        </div>
      </div>
    </li>

  );
};

export default BookList;
