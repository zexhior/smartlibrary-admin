import { Api } from "../../../../../../utils/api";
import EmptyList from "../../../../../../widgets/emptylist/emptylist";
import Stars from "../../../../../../widgets/stars/stars";
import { Book } from "../../../../../models/books";
import "./booklist.scss";

interface BookListProps {
  books: Book[];
}

const ListComponent = (books: Book[]) => {
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
      {books.length !== 0 ? ListComponent(books) : <EmptyList />}
    </div>
  );
};

export default BookList;
