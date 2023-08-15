import { Link } from "react-router-dom";
import Stars from "../../../../../../widgets/stars/stars";
import { Book } from "../../../../../models/books";
import "./mainlist.scss";

interface MainListProps {
  books: Array<Book>;
}

const MainList: React.FC<MainListProps> = ({ books }) => {
  return (
    <div className="mainlist">
      {books.map((book: Book, key: number) => (
        <Link key={key} to={`${book._id}`} className="no-style">
          <div className="book box-shadow border-radius">
            <div className="book-header border-radius">
              <img src={book.cover} alt="book" />
            </div>
            <div className="book-content">
              <h3>{book.title}</h3>
              <h5>{book.publishing_date}</h5>
              <Stars star={book.star} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MainList;
