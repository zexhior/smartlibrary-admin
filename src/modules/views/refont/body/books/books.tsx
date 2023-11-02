import { SetStateAction, useState } from "react";
import { Book } from "../../../../models/books";
import "./books.scss";
import NewBook from "./newbook/newbook";
import { FaBook } from "react-icons/fa";
import MainList from "./mainlist/mainlist";
import BestBook from "./bestbook/bestbook";
import Modal from "../modal/modal";
import { useDispatch, useSelector } from "react-redux";
import useGetAllElement from "../../../../controllers/GetAllElement";
import {
  setListBestBook,
  setListBook,
  setListNewBook,
} from "../../../../../redux/bookredux";
import {
  setShowModal,
  setUpdatePage,
  setUpdatePlace,
} from "../../../../../redux/modalredux";
import PaginationComponent from "../../../../../widgets/pagination/pagination";

const Books = () => {
  const [page, setPage] = useState<number>(1);
  const { size } = useGetAllElement<Book>("books", page, setListBook);
  useGetAllElement<Book>("books", 1, setListNewBook);
  useGetAllElement<Book>("books", 1, setListBestBook);
  const newbooks = useSelector((state: any) => state.book.newbooks);
  const bestbooks = useSelector((state: any) => state.book.bestbooks);
  const books = useSelector((state: any) => state.book.books);
  const dispatch = useDispatch();
  dispatch(setUpdatePage("book"));

  const HandlerShowModal = () => {
    dispatch(setShowModal(true));
    dispatch(setUpdatePlace(0));
  };

  return (
    <div className="books">
      <div className="books-body">
        <div className="books-body-header">
          <h4>Les nouveaux livres</h4>
          <NewBook books={newbooks.slice(0, 5)} />
        </div>
        <div className="books-body-content">
          <div className="books-body-content-label">
            <h4>Liste des livres</h4>
            <button
              className="button"
              onClick={(e) => {
                HandlerShowModal();
              }}
            >
              Ajouter +
            </button>
          </div>
          <MainList books={books} />
          <PaginationComponent
            page={page}
            setPage={setPage}
            endPage={size / 8}
          />
        </div>
      </div>
      <div className="books-sidebar">
        <div className="books-sidebar-total border-radius">
          <div className="books-sidebar-total-header">
            <FaBook color="white" size={50} />
          </div>
          <div className="books-sidebar-total-body">
            <h3>{size}</h3>
            <h5>Livres</h5>
          </div>
        </div>
        <h4>Les meilleurs livres</h4>
        <BestBook books={bestbooks.slice(0, 2)} />
      </div>
    </div>
  );
};

export default Books;
