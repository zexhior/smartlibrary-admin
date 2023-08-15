import { useParams } from "react-router-dom";
import "./bookinfo.scss";
import { SetStateAction, useEffect, useState } from "react";
import { Book } from "../../../../../models/books";
import { BooksData } from "../../../../../../mock/database";
import Info from "./info/info";
import Synopsis from "./synopsis/synopsis";
import BookAuthors from "./bookauthors/bookauthors";
import BookCategories from "./bookcategories/bookcategories";
import BookFavorites from "./bookfavorites/bookfavorites";

const BookInfo = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const selectedBook: Book | undefined = BooksData.find(
      (book: Book) => book._id === id?.toString()
    );
    selectedBook ? setBook(selectedBook) : setBook(null);
  }, [id]);

  return book ? (
    <div className="bookinfo">
      <div className="bookinfo-body">
        <Info book={book} setBook={setBook} />
        <div className="bookinfo-body-detail">
          <div>
            <Synopsis book={book} setBook={setBook} />
          </div>
          <div>
            <BookCategories />
            <BookAuthors book={book} setBook={setBook} />
          </div>
        </div>
      </div>
      <div className="bookinfo-sidebar">
        <BookFavorites />
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default BookInfo;
