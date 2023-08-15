import React, { useState } from "react";
import { Book } from "../../../../../../models/books";
import "./bookauthors.scss";
import { FaTrash, FaUser } from "react-icons/fa";
import { AuthorsData } from "../../../../../../../mock/database";
import { Authors } from "../../../../../../models/authors";
import Stars from "../../../../../../../widgets/stars/stars";

interface BookAuthorsProps {
  book: Book;
  setBook: React.Dispatch<React.SetStateAction<Book | null>>;
}

const BookAuthors: React.FC<BookAuthorsProps> = () => {
  const [authors, setAuthors] = useState<Array<Authors>>(AuthorsData);

  return (
    <div className="bookauthors">
      <div className="bookauthors-label">
        <div className="bookauthors-label-icon bubble">
          <FaUser size={20} color="white" />
        </div>
        <h4>Les auteurs du livre</h4>
      </div>
      <div className="bookauthors-list">
        {authors.map((author: Authors) => (
          <div className="authors border-radius box-shadow">
            <div className="authors-header">
              <img
                src={author.photo}
                alt="author"
                className="border-radius"
                width={100}
                height={100}
              />
            </div>
            <div className="authors-body">
              <h3>{author.last_name}</h3>
              <p>{author.first_name} </p>
              <Stars star={author.star} />
              <button className="button animation">
                <FaTrash size={15} color="white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookAuthors;
