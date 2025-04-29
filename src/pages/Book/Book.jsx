import React from "react";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const { bookId, author, bookName, image, rating, category, totalPages } =
    singleBook;
  return (
    <Link to={`bookDetails/${bookId}`}>
      <div className="card bg-base-100 drop-shadow-sm">
        <figure className="bg-gray-100 m-3">
          <img className="h-40 p-3" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{totalPages}</div>
          </h2>
          <p>{author}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{rating}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
