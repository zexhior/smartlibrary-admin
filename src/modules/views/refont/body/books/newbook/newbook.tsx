import { Api } from "../../../../../../utils/api";
import { Book } from "../../../../../models/books";
import "./newbook.scss";

interface NewBookProps {
  books: Array<Book>;
}

const NewBook: React.FC<NewBookProps> = ({ books }) => {
  return (
    <div className="newbook">
      <div className="newbook-list">
        {books.map((book: Book, key: number) => (
          <div key={key} className="newbook-list-item border-radius">
            <div className="newbook-list-item-background">
              <img src={Api.root + book.cover} alt="book" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewBook;
