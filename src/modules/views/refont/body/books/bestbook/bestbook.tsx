import { Api } from "../../../../../../utils/api";
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
              <img src={Api.root + book.cover} alt="book" />
            </div>
            <div className="book-body">
              <h5 className="title">{book.title.slice(0, 18)}</h5>
              <p className="subtitle">{book.publishing_date}</p>
              <Stars star={book.star} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BestBook;
