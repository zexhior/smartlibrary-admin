import { useDispatch, useSelector } from "react-redux";
import "./deletebook.scss";
import { setShowModal } from "../../../../../../redux/modalredux";
import { useEffect, useState } from "react";
import { Category } from "../../../../../models/category";
import {
  setBookAuthor,
  setBookCategory,
  setListDeletedCategories,
  setListNewCategories,
} from "../../../../../../redux/bookredux";
import { Authors } from "../../../../../models/authors";
import DeleteElement from "../../../../../controllers/DeleteElement";
import { Classification } from "../../../../../models/classification";
import { Work } from "../../../../../models/work";

const DeleteBook = () => {
  const [element, setElement] = useState<string>("");
  const dispatch = useDispatch();
  const author = useSelector((state: any) => state.author.updateauthor);
  let authors = useSelector((state: any) => state.book.authors);

  let category = useSelector((state: any) => state.category.updatecategory);
  let categories = useSelector((state: any) => state.book.categories);
  let classifications = useSelector(
    (state: any) => state.classification.selectedClassification
  );
  let works = useSelector((state: any) => state.work.selectedWorks);

  const book = useSelector((state: any) => state.book.updatebook);
  const place = useSelector((state: any) => state.modal.place);

  const HandlerDelete = async () => {
    switch (place) {
      case 3:
        console.log("supprimer livre");
        DeleteElement("books/", book._id);
        break;
      case 4:
        let result = categories.filter(
          (element: Category) => element._id !== category._id
        );
        const classification = classifications.find(
          (data: Classification) => data.category === category._id
        );
        dispatch(setBookCategory(result));
        DeleteElement("classifications/", classification._id);
        break;
      case 5:
        let authors_mod = authors.filter(
          (element: Authors) => element._id !== author._id
        );
        const work = works.find((data: Work) => data.author === author._id);
        authors_mod = authors_mod ? authors_mod : [];
        dispatch(setBookAuthor(authors_mod));
        DeleteElement("works/", work._id);

        break;
      case 6:
        DeleteElement("authors/", author._id);
        console.log("delete author");
        break;
      default:
        console.log("fin");
    }
    dispatch(setShowModal(false));
  };

  const HandlerNoButton = () => {
    dispatch(setShowModal(false));
  };

  useEffect(() => {
    switch (place) {
      case 3:
        setElement("ce livre");
        break;
      case 4:
        setElement("cette categorie");
        break;
      case 5:
        setElement("cet auteur");
        break;
      case 6:
        setElement("cet auteur");
        break;
      default:
        console.log("fin");
    }
  }, [element, place]);

  return (
    <div className="deletebook">
      <div className="text">
        <p>Voulez-vous vraiment supprimer {element}</p>
      </div>
      <div className="options">
        <button className="btn" onClick={HandlerDelete}>
          Oui
        </button>
        <button className="btn" onClick={HandlerNoButton}>
          Non
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
