import { useState } from "react";
import { Book } from "../../../../../../models/books";
import "./synopsis.scss";
import { FaBook, FaPaperPlane } from "react-icons/fa";

interface SynopsisProps {
  book: Book;
  setBook: React.Dispatch<React.SetStateAction<Book | null>>;
}

const Synopsis: React.FC<SynopsisProps> = ({ book, setBook }) => {
  const [edit, setEdit] = useState<boolean>(false);

  const HandlerEdit = () => {
    edit ? setEdit(false) : setEdit(true);
  };

  return (
    <div className="synopsis box-shadow border-radius">
      <div className="synopsis-label">
        <div className="synopsis-label-icon bubble">
          <FaBook size={20} color="white" />
        </div>
        <h4>Synopsis</h4>
      </div>
      {edit ? <textarea>{book.synopsis}</textarea> : <p>{book.synopsis}</p>}
      <button className="button" onClick={HandlerEdit}>
        {edit ? "Sauvegarder" : "Modifier"}
      </button>
    </div>
  );
};

export default Synopsis;
