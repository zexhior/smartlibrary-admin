import { useState } from "react";
import InputComponent from "../../../../../../../widgets/input/input";
import { Authors } from "../../../../../../models/authors";
import "./info.scss";
import Stars from "../../../../../../../widgets/stars/stars";
import { Api } from "../../../../../../../utils/api";
import UpdateElement from "../../../../../../controllers/UpdateElement";

interface InfoProps {
  author: Authors | undefined;
  setAuthor: React.Dispatch<React.SetStateAction<Authors | undefined>>;
}

const Info: React.FC<InfoProps> = ({ author, setAuthor }) => {
  const [edit, setEdit] = useState<boolean>(false);

  const HandlerEdit = () => {
    if (edit && author) UpdateElement("authors", author?._id, author);
    edit ? setEdit(false) : setEdit(true);
  };

  return author ? (
    <div className="info-author border-radius">
      <div className="info-author-data">
        <InputComponent
          label={"Nom"}
          type={"text"}
          placeholder={""}
          required={false}
          state={author}
          name={"last_name"}
          activation={edit}
          setState={setAuthor}
        />
        <InputComponent
          label={"Prénom"}
          type={"text"}
          placeholder={""}
          required={false}
          state={author}
          name={"first_name"}
          activation={edit}
          setState={setAuthor}
        />
        <h4>Nombre d'étoile</h4>
        <Stars star={author.star} />
        <button className="button" onClick={HandlerEdit}>
          {edit ? "Sauvegarder" : "Modifier"}
        </button>
      </div>
      <div className="info-author-img">
        <img src={Api.root + author.photo} alt="author" />
      </div>
    </div>
  ) : (
    <p>Pas d'auteur</p>
  );
};

export default Info;
