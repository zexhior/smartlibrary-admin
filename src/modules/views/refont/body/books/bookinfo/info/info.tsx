import { useState } from "react";
import { Book } from "../../../../../../models/books";
import "./info.scss";
import Stars from "../../../../../../../widgets/stars/stars";
import InputComponent from "../../../../../../../widgets/input/input";
import { Api } from "../../../../../../../utils/api";
import UpdateElement from "../../../../../../controllers/UpdateElement";

interface InfoProps {
  book: Book;
  setBook: React.Dispatch<React.SetStateAction<Book | null | undefined>>;
}

const Info: React.FC<InfoProps> = ({ book, setBook }) => {
  const [edit, setEdit] = useState<boolean>(false);

  const HandlerEdit = () => {
    if (edit) {
      UpdateElement("books", book._id, book);
    }
    edit ? setEdit(false) : setEdit(true);
  };

  return (
    <div className="info border-radius">
      <div className="info-detail">
        <InputComponent
          label={"Titre"}
          type={"text"}
          placeholder={""}
          required={false}
          state={book}
          name={"title"}
          activation={edit}
          setState={setBook}
        />
        <InputComponent
          label={"Date de publication"}
          type={"date"}
          placeholder={""}
          required={false}
          state={book}
          name={"publishing_date"}
          activation={edit}
          setState={setBook}
        />
        <InputComponent
          label={"ISBN"}
          type={"text"}
          placeholder={""}
          required={false}
          state={book}
          name={"isbn"}
          activation={edit}
          setState={setBook}
        />
        <h4>Nombre d'étoile : </h4>
        <Stars star={book?.star} />
        <button className="button" onClick={HandlerEdit}>
          {edit ? "Sauvegarder" : "Modifier"}
        </button>
      </div>
      <div className="info-img">
        <img src={Api.root + book?.cover} alt="book" />
      </div>
    </div>
  );
};

export default Info;
