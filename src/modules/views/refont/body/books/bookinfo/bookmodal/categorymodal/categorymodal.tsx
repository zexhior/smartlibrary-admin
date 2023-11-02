import { useEffect, useState } from "react";
import "./categorymodal.scss";
import { Category } from "../../../../../../../models/category";
import { useDispatch, useSelector } from "react-redux";
import useGetAllElement from "../../../../../../../controllers/GetAllElement";
import { setListCategory } from "../../../../../../../../redux/categoryredux";
import { setBookCategory } from "../../../../../../../../redux/bookredux";
import { setShowModal } from "../../../../../../../../redux/modalredux";

interface CategoryModalProps {
  bookCategories: Array<Category>;
}

const CategoryModal = () => {
  const bookCategories = useSelector((state: any) => state.book.categories);
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();
  const { elements } = useGetAllElement<Category>(
    "categories",
    1,
    setListCategory,
  );

  const [selectedCategory, setSelectedCategory] = useState<Category>(
    elements[0],
  );

  const HandlerChange = (wording: string) => {
    const selected: Category | undefined = elements.find(
      (category: Category) => category.wording === wording,
    );
    if (selected) setSelectedCategory(selected);
  };

  const HandlerAddCategory = () => {
    if (
      elements &&
      !bookCategories.find(
        (element: Category) => element._id === selectedCategory._id,
      )
    ) {
      dispatch(setBookCategory([...bookCategories, selectedCategory]));
      dispatch(setShowModal(false));
    } else {
      setText("Déja ajouté");
    }
  };

  useEffect(() => {
    setSelectedCategory(elements[0]);
  }, [elements]);

  return (
    <div className="categorymodal border-radius">
      <h4>Ajouter une catégorie</h4>
      <select
        className="border-radius2"
        onChange={(e) => HandlerChange(e.target.value)}
      >
        {elements.map((category: Category, key: number) => (
          <option key={key}>{category.wording}</option>
        ))}
      </select>
      <button className="button" onClick={HandlerAddCategory}>
        Ajouter
      </button>
      <p className="message">{text}</p>
    </div>
  );
};

export default CategoryModal;
