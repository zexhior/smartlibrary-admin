import React, { useState } from "react";
import { Book } from "../../../../../../models/books";
import "./bookauthors.scss";
import { FaTrash, FaUser } from "react-icons/fa";
import { AuthorsData } from "../../../../../../../mock/database";
import { Authors } from "../../../../../../models/authors";
import Stars from "../../../../../../../widgets/stars/stars";
import GetAuthorsByWork from "../../../../../../controllers/GetAuthorsByWork";
import {
  setShowModal,
  setUpdatePlace,
} from "../../../../../../../redux/modalredux";
import { useDispatch, useSelector } from "react-redux";
import { setUpdateAuthor } from "../../../../../../../redux/authorredux";
import { Api } from "../../../../../../../utils/api";

interface PropsBookAuthors {
  book: Book;
}

const BookAuthors: React.FC<PropsBookAuthors> = ({ book }) => {
  const dispatch = useDispatch();
  GetAuthorsByWork(book?._id);
  const authors = useSelector((state: any) => state.book.authors);

  const HandlerShow = () => {
    dispatch(setShowModal(true));
    dispatch(setUpdatePlace(2));
  };

  const HandlerDeleteAuthor = (author: Authors) => {
    dispatch(setShowModal(true));
    dispatch(setUpdatePlace(5));
    dispatch(setUpdateAuthor(author));
  };

  return (
    <div className="bookauthors">
      <div className="bookauthors-label">
        <div className="bookauthors-label-icon bubble">
          <FaUser size={20} color="white" />
        </div>
        <h4>Les auteurs du livre</h4>
        <button className="button" onClick={(e) => HandlerShow()}>
          Ajouter +
        </button>
      </div>
      <div className="bookauthors-list">
        {authors.map((author: Authors, key: number) => (
          <div className="authors border-radius box-shadow" key={key}>
            <div className="authors-header">
              <img
                src={Api.root + author.photo}
                alt="author"
                className="border-radius"
                width={100}
                height={100}
              />
            </div>
            <div className="authors-body">
              <div className="authors-body-text">
                <h3 className="title">{author.last_name}</h3>
                <p className="subtitle">{author.first_name} </p>
                <Stars star={author.star} />
              </div>
              <button
                className="button animation"
                onClick={(e) => HandlerDeleteAuthor(author)}
              >
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
