import { useState } from "react";
import Input from "../../../widgets/input/input";
import InputImage from "../../../widgets/inputimg/inputimg";
import "./addauthor.scss";
import { Authors } from "../../../../../models/authors";
import CreateOneElement from "../../../../../controllers/CreateOneElement";

const AddAuthor = () => {
  const [photo, setPhoto] = useState<File>();
  const [author, setAuthor] = useState<Authors | undefined | null>({
    _id: "",
    first_name: "",
    last_name: "",
    star: 0,
    description: "",
    photo: "",
  });

  const HandlerCreate = () => {
    console.log(author);
    if (author) {
      const formdata = new FormData();
      formdata.append("photo", photo as Blob);
      formdata.append("last_name", author.last_name);
      formdata.append("first_name", author.first_name);
      formdata.append("star", author.star.toString());
      formdata.append("description", author.description);
      CreateOneElement("authors", formdata);
    }
  };

  return (
    <div className="addbook border-radius2">
      <h3>Ajout d'un auteur</h3>
      <div className="addbook-cover">
        <InputImage name={"cover"} state={photo} setState={setPhoto} />
      </div>
      <Input
        type={"text"}
        placeholder={"Entrer nom"}
        name={"last_name"}
        label={"Nom"}
        state={author}
        setState={setAuthor}
      />
      <Input
        type={"text"}
        placeholder={"Entrer prénom"}
        name={"first_name"}
        label={"Prénom"}
        state={author}
        setState={setAuthor}
      />
      <Input
        type={"textarea"}
        placeholder={"Entrer déscription"}
        name={"description"}
        label={"Déscription"}
        state={author}
        setState={setAuthor}
      />
      <button className="button" onClick={HandlerCreate}>
        Ajouter
      </button>
    </div>
  );
};

export default AddAuthor;
