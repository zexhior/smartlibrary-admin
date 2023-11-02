import { useParams } from "react-router-dom";
import "./bookinfo.scss";
import { useEffect, useState } from "react";
import { Book } from "../../../../../models/books";
import { BooksData } from "../../../../../../mock/database";
import Info from "./info/info";
import Synopsis from "./synopsis/synopsis";
import BookAuthors from "./bookauthors/bookauthors";
import BookCategories from "./bookcategories/bookcategories";
import BookFavorites from "./bookfavorites/bookfavorites";
import GetOneElement from "../../../../../controllers/GetOneElement";
import { setUpdateBook } from "../../../../../../redux/bookredux";
import UpdateElement from "../../../../../controllers/UpdateElement";
import GetAuthorsByWork from "../../../../../controllers/GetAuthorsByWork";
import GetCategoriesByClassification from "../../../../../controllers/GetCategoriesByClassification";

const BookInfo = () => {
  const { id } = useParams();
  const { element, setElement } = GetOneElement<Book | null>(
    "books/",
    id,
    setUpdateBook,
  ); //useSelector((state: any) => state.book.authors);

  GetAuthorsByWork(element?._id);
  GetCategoriesByClassification(
    "classifications/getCategoryByBook/",
    element?._id as string,
  );

  const HandlerSave = () => {
    if (element?._id) UpdateElement("books", element?._id, element);
  };

  useEffect(() => {
    /*const selectedBook: Book | undefined = BooksData.find(
      (book: Book) => book._id === id?.toString(),
    );
    selectedBook ? setElement(selectedBook) : setElement(null);*/
  }, [id]);

  return element ? (
    <>
      <div className="bookinfo">
        <div className="bookinfo-body">
          <Info book={element} setBook={setElement} />
          <div className="bookinfo-body-detail">
            <div className="syn">
              <Synopsis book={element} setBook={setElement} />
              <button className="button" onClick={HandlerSave}>
                Sauvegarder les modifications
              </button>
            </div>
            <div>
              <BookCategories book={element} />
              <BookAuthors book={element} />
            </div>
          </div>
        </div>
        <div className="bookinfo-sidebar">
          <BookFavorites />
        </div>
      </div>
    </>
  ) : (
    <div></div>
  );
};

export default BookInfo;
