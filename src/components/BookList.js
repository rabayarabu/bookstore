import React, { useState } from 'react';

const DeleteBook = (prop) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const { title, author, onClick } = prop;
  const handleDelete = () => {
    setIsDeleted(true);
    onClick();
  };

  if (isDeleted) {
    return null; // Return null to hide the deleted book component
  }

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

export default DeleteBook;
