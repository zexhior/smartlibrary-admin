import { Authors as AuthorsModel } from "../../../../models/authors";
import "./authors.scss";
import NewAuthors from "./newauthors/newauthors";
import AuthorList from "./authorlist/authorlist";
import { FaPen } from "react-icons/fa";
import BestAuthor from "./bestauthor/bestauthor";
import useGetAllElement from "../../../../controllers/GetAllElement";
import {
  setListAuthors,
  setListBestAuthors,
  setListNewAuthors,
} from "../../../../../redux/authorredux";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal, setUpdatePlace } from "../../../../../redux/modalredux";
import { SetStateAction, useState } from "react";
import PaginationComponent from "../../../../../widgets/pagination/pagination";

const Authors = () => {
  const [page, setPage] = useState<number>(1);
  const { size } = useGetAllElement<AuthorsModel>(
    "authors",
    page,
    setListAuthors,
  );
  const newauthors = useGetAllElement<AuthorsModel>(
    "authors",
    1,
    setListNewAuthors,
  );
  const bestauthors = useGetAllElement<AuthorsModel>(
    "authors",
    1,
    setListBestAuthors,
  );
  const authors = useSelector((state: any) => state.author.authors);
  const dispatch = useDispatch();

  const HandlerShowModal = () => {
    dispatch(setShowModal(true));
    dispatch(setUpdatePlace(7));
  };

  return (
    <div className="authors">
      <div className="authors-body">
        <div className="authors-body-header">
          <h4>Les nouveaux auteurs</h4>
          <NewAuthors authors={newauthors.elements.slice(0, 5)} />
        </div>
        <div className="authors-body-content">
          <div className="authors-body-content-title">
            <h4>Liste des auteurs</h4>
            <button
              className="button"
              onClick={(e) => {
                HandlerShowModal();
              }}
            >
              Ajouter +
            </button>
          </div>
          <div className="authors-body-content-list">
            <AuthorList authors={authors} />
            <PaginationComponent
              page={page}
              setPage={setPage}
              endPage={size / 8}
            />
          </div>
        </div>
      </div>
      <div className="authors-sidebar">
        <div className="authors-sidebar-total border-radius">
          <div className="authors-sidebar-total-header">
            <FaPen color="white" size={50} />
          </div>
          <div className="authors-sidebar-total-body">
            <h3>{size}</h3>
            <h5>Auteurs</h5>
          </div>
        </div>
        <h4>Meilleurs auteurs</h4>
        <BestAuthor authors={bestauthors.elements.slice(0, 3)} />
      </div>
    </div>
  );
};

export default Authors;
