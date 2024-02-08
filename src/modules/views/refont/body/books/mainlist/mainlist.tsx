import { useNavigate } from "react-router-dom";
import Stars from "../../../../../../widgets/stars/stars";
import { Book } from "../../../../../models/books";
import "./mainlist.scss";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  setShowModal,
  setUpdatePlace,
} from "../../../../../../redux/modalredux";
import GetOneElement from "../../../../../controllers/GetOneElement";
import { setUpdateBook } from "../../../../../../redux/bookredux";
import { useState } from "react";
import { Api } from "../../../../../../utils/api";
import EmptyList from "../../../../../../widgets/emptylist/emptylist";

interface MainListProps {
  books: Array<Book>;
}

const MainList: React.FC<MainListProps> = ({ books }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandlerShowModal = (book: Book) => {
    dispatch(setUpdateBook(book));
    dispatch(setShowModal(true));
    dispatch(setUpdatePlace(3));
  };

  const LinkToBook = (id: String) => {
    navigate(`${id}`);
  };

  return (
    <div className="mainlist">
      {books.length !== 0 ? (
        books.map((book: Book, key: number) => (
          <div key={key}>
            <div className="book box-shadow border-radius clickable">
              <div className="book-header border-radius">
                <img src={Api.root + book.cover} alt="book" />
              </div>
              <div className="book-content">
                <div className="book-content-text">
                  <h3 className="title">
                    {book.title?.toLowerCase().slice(0, 20)}
                  </h3>
                  <p className="subtitle">{book.publishing_date}</p>
                  <Stars star={book.star} />
                </div>
                <div className="options">
                  <button
                    className="button"
                    onClick={() => {
                      LinkToBook(book._id);
                    }}
                  >
                    Voir
                  </button>
                  <button
                    className="button"
                    onClick={() => {
                      HandlerShowModal(book);
                    }}
                  >
                    <FaTrash size={15} color="white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default MainList;
