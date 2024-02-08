import { useState } from "react";
import { Authors } from "../../../../../../../models/authors";
import "./authormodal.scss";
import InputSearch from "../../../../../widgets/inputsearch/inputsearch";
import SearchElement from "../../../../../../../controllers/SearchElement";
import { setBookAuthor } from "../../../../../../../../redux/bookredux";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../../../../../../../redux/modalredux";
import { Api } from "../../../../../../../../utils/api";
import CreateOneElement from "../../../../../../../controllers/CreateOneElement";

const AuthorModal = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState<string>("");
  const [authors, setAuthors] = useState<Array<Authors> | never>([]);
  const dispatch = useDispatch();
  const authorsbooks = useSelector((state: any) => state.book.authors);
  const book = useSelector((state: any) => state.book.updatebook);
  const works = useSelector((state: any) => state.work.selectedWorks);

  const findResult = async (text: string) => {
    const authors = await SearchElement(
      "authors/search",
      `first_name=${text}&last_name=${text}`,
      null
    );
    setAuthors(authors);
  };

  const HandlerAddAuthor = (author: Authors) => {
    if (
      !authorsbooks.find((element: Authors) => element._id === author._id) ||
      authorsbooks.length === 0
    ) {
      let authors_mod = [...authorsbooks, author];
      CreateOneElement("works/", { author: author._id, book: book._id });
      dispatch(setBookAuthor(authors_mod));
      dispatch(setShowModal(false));
    } else {
      setText("Déja ajouté");
    }
  };

  return (
    <div className="authormodal border-radius">
      <div>
        <h4>Ajouter auteur</h4>
        <InputSearch
          search={search}
          setSearch={setSearch}
          fonction={findResult}
        />
        <div className="authormodal-list">
          {authors.map((author: Authors, key: number) => (
            <div
              key={key}
              className="authormodal-list-item border-radius2"
              onClick={(e) => HandlerAddAuthor(author)}
            >
              <img
                src={Api.root + author.photo}
                alt="author"
                className="bubble"
              />
              <div className="detail">
                <h5>{author.last_name}</h5>
                <h6>{author.first_name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="message">{text}</p>
    </div>
  );
};

export default AuthorModal;
