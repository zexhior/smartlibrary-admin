import { useState } from "react";
import { BooksData } from "../../../../../mock/database";
import Maintenance from "../../../../../widgets/maitenance/maintenance";
import { Book } from "../../../../models/books";
import "./books.scss";
import NewBook from "./newbook/newbook";
import { FaBook } from "react-icons/fa";
import MainList from "./mainlist/mainlist";
import BestBook from "./bestbook/bestbook";

const Books = () => {
  const [books, setBooks] = useState<Array<Book>>(BooksData);

  return (
    <div className="books">
      <div className="books-body">
        <div className="books-body-header">
          <h4>Les nouveaux livres</h4>
          <NewBook books={books} />
        </div>
        <div className="books-body-content">
          <h4>Liste des livres</h4>
          <MainList books={books} />
        </div>
      </div>
      <div className="books-sidebar">
        <div className="books-sidebar-total border-radius">
          <div className="books-sidebar-total-header">
            <FaBook color="white" size={50} />
          </div>
          <div className="books-sidebar-total-body">
            <h3>10</h3>
            <h5>Livres</h5>
          </div>
        </div>
        <h4>Les meilleurs livres</h4>
        <BestBook books={books.slice(0, 2)} />
      </div>
    </div>
  );
};

export default Books;
