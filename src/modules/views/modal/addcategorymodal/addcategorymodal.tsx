import { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../../redux/redux";
import { Button } from "../../../../styles/button";
import { FilterId } from "../../../../utils/filterid";
import InputComponent from "../../../../widgets/input/input";
import CreateOneElement from "../../../controllers/CreateOneElement";
import UpdateElement from "../../../controllers/UpdateElement";
import { Category } from "../../../models/category";
import "./addcategorymodal.scss";

const AddCategoryModal = ({ action = "", data = { _id: "", wording: "" } }) => {
  const [category, setCategory] = useState<Category>(data);
  const dispatch = useDispatch();

  const HandlerCreateCategory = (e: any) => {
    e.preventDefault();
    CreateOneElement("categories", FilterId<Category>(category));
    dispatch(closeModal(false));
    window.location.reload();
  };

  const HandlerUpdateCategory = (e: any) => {
    e.preventDefault();
    UpdateElement("categories/", category._id, category);
    dispatch(closeModal(false));
    window.location.reload();
  };

  return (
    <div className="addcategorymodal">
      <form
        onSubmit={
          action === "create" ? HandlerCreateCategory : HandlerUpdateCategory
        }
      >
        <InputComponent
          label="Libellé"
          type="text"
          placeholder="Libellé"
          required={true}
          state={category}
          name={"wording"}
          setState={setCategory}
          activation={false}
        />
        {action === "create" ? (
          <Button type="submit" className="button animation">
            Creer
          </Button>
        ) : (
          <Button type="submit" className="button animation">
            Mettre a jour
          </Button>
        )}
      </form>
    </div>
  );
};

export default AddCategoryModal;
