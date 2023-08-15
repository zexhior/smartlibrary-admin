import { FaFile, FaPlus, FaTrash } from "react-icons/fa";
import { useState } from "react";
import "./bookcategories.scss";
import { CategoriesData } from "../../../../../../../mock/database";
import { Category } from "../../../../../../models/category";

const BookCategories = () => {
  const [categories, setCategories] = useState<Array<Category>>(
    CategoriesData.slice(0, 2)
  );

  return (
    <div className="bookcategories">
      <div className="bookcategories-label">
        <div className="bookcategories-label-icon bubble">
          <FaFile color="white" size={20} />
        </div>
        <h4>Categories</h4>
      </div>
      <div className="bookcategories-list">
        {categories.map((category: Category) => (
          <div className="category border-radius">
            <p>{category.wording}</p>
            <button className="button">
              <FaTrash size={15} color="black" />
            </button>
          </div>
        ))}
        <button className="button">
          <FaPlus size={15} color="white" />
        </button>
      </div>
    </div>
  );
};

export default BookCategories;
function setState<T>(
  CategoryData: { _id: string; wording: string }[]
): [any, any] {
  throw new Error("Function not implemented.");
}
