import { FaFile, FaPlus, FaTrash } from "react-icons/fa";
import "./bookcategories.scss";
import { Category } from "../../../../../../models/category";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowModal,
  setUpdatePlace,
} from "../../../../../../../redux/modalredux";
import { setUpdateCategory } from "../../../../../../../redux/categoryredux";
import { Book } from "../../../../../../models/books";
import GetCategoriesByClassification from "../../../../../../controllers/GetCategoriesByClassification";

interface PropsBookCategories {
  book: Book;
}

const BookCategories: React.FC<PropsBookCategories> = ({ book }) => {
  const dispatch = useDispatch();
  GetCategoriesByClassification("classifications", book?._id as string);
  const categories = useSelector((state: any) => state.book.categories);

  const HandlerShowModalCategory = (category: Category) => {
    dispatch(setShowModal(true));
    dispatch(setUpdatePlace(4));
    dispatch(setUpdateCategory(category));
  };

  const HandlerShow = () => {
    dispatch(setShowModal(true));
    dispatch(setUpdatePlace(1));
  };

  return (
    <div className="bookcategories">
      <div className="bookcategories-label">
        <div className="bookcategories-label-icon bubble">
          <FaFile color="white" size={20} />
        </div>
        <h4>Categories</h4>
      </div>
      <div className="bookcategories-list">
        {categories.map((category: Category, key: number) => (
          <div key={key} className="category border-radius">
            <p>{category.wording}</p>
            <button
              className="button"
              onClick={(e) => HandlerShowModalCategory(category)}
            >
              <FaTrash size={15} color="black" />
            </button>
          </div>
        ))}
        <button
          className="button"
          onClick={(e) => {
            HandlerShow();
          }}
        >
          <FaPlus size={15} color="white" />
        </button>
      </div>
    </div>
  );
};

export default BookCategories;
