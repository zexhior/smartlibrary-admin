import { useState } from "react";
import "./addbook.scss";
import { Book } from "../../../../../models/books";
import Input from "../../../widgets/input/input";
import InputImage from "../../../widgets/inputimg/inputimg";
import CreateOneElement from "../../../../../controllers/CreateOneElement";
import { useDispatch } from "react-redux";
import { setShowModal } from "../../../../../../redux/modalredux";

const AddBook = () => {
  const [file, setFile] = useState<File>();
  const [cover, setCover] = useState<File>();
  const [book, setBook] = useState<Book | undefined | null>({
    _id: "",
    title: " ",
    isbn: " ",
    star: 0,
    publishing_date: "2012-05-16",
    cover: "",
    synopsis: " ",
    file: " ",
  });
  const dispatch = useDispatch();

  const HandlerCreate = async () => {
    console.log(file);
    if (book) {
      const formdata = new FormData();
      formdata.append("book", file as Blob);
      formdata.append("image", cover as Blob);
      formdata.append("title", book.title);
      formdata.append("isbn", book.isbn);
      formdata.append("publishing_date", book.publishing_date.split("T")[0]);
      formdata.append("star", book.star.toString());
      formdata.append("synopsis", book.synopsis);
      await CreateOneElement("books", formdata);
      dispatch(setShowModal(false));
      window.location.reload();
    }
  };

  return (
    <div className="addbook border-radius2">
      <h3>Ajout d'un livre</h3>
      <div className="addbook-cover">
        <InputImage name={"cover"} state={cover} setState={setCover} />
      </div>
      <Input
        type={"file"}
        placeholder={""}
        name={"file"}
        label={"Fichier PDF"}
        state={file}
        setState={setFile}
      />
      <Input
        type={"file"}
        placeholder={""}
        name={"file"}
        label={"Fichier Audio"}
        state={book}
        setState={setBook}
      />
      <Input
        type={"text"}
        placeholder={"Entrer titre"}
        name={"title"}
        label={"Titre"}
        state={book}
        setState={setBook}
      />
      <Input
        type={"text"}
        placeholder={"Entrer ISBN"}
        name={"isbn"}
        label={"ISBN"}
        state={book}
        setState={setBook}
      />
      <Input
        type={"date"}
        placeholder={"Entrer date"}
        name={"publishing_date"}
        label={"Date de publication"}
        state={book}
        setState={setBook}
      />
      <Input
        type={"textarea"}
        placeholder={"Entrer synopsis"}
        name={"synopsis"}
        label={"Synopsis"}
        state={book}
        setState={setBook}
      />
      <button className="button" onClick={HandlerCreate}>
        Ajouter
      </button>
    </div>
  );
};

export default AddBook;
