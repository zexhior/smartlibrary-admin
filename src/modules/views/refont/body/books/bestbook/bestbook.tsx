import Stars from "../../../../../../widgets/stars/stars";
import { Book } from "../../../../../models/books";
import "./bestbook.scss";

interface BestBookProps {
  books: Array<Book>;
}

const BestBook: React.FC<BestBookProps> = ({ books }) => {
  return (
    <div className="bestbook">
      {books.map((book: Book, key: number) => {
        return (
          <div key={key} className="book">
            <div className="book-header">
              <img src={book.cover} alt="book" />
            </div>
            <div className="book-body">
              <h5>{book.title}</h5>
              <h6>{book.publishing_date}</h6>
              <Stars star={book.star} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BestBook;
