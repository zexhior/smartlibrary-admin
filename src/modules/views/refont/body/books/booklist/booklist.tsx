import { Api } from "../../../../../../utils/api";
import Stars from "../../../../../../widgets/stars/stars";
import { Book } from "../../../../../models/books";
import "./booklist.scss";

interface BookListProps {
  books: Book[];
}

const ListComponent = (books: Book[]) => {
  console.log(books);
  return (
    <div className="books">
      {books.map((book: Book, key: number) => (
        <div key={key} className="book box-shadow">
          <div className="book-img">
            <img src={Api.root + book.cover} alt="cover" />
          </div>
          <div className="book-info">
            <h3>{book.title.toLowerCase().slice(0, 20)}</h3>
            <p>{book.publishing_date}</p>
            <Stars star={book.star} />
          </div>
        </div>
      ))}
    </div>
  );
};

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className="booklist">
      {books ? (
        ListComponent(books)
      ) : (
        <div className="empty">
          <h4>Liste vide</h4>
        </div>
      )}
    </div>
  );
};

export default BookList;
