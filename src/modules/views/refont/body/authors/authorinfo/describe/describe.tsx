import { FaUser } from "react-icons/fa";
import "./describe.scss";
import { Authors } from "../../../../../../models/authors";
import { useState } from "react";
import UpdateElement from "../../../../../../controllers/UpdateElement";

interface DescribeProps {
  author: Authors | undefined;
  setAuthor: React.Dispatch<React.SetStateAction<Authors | undefined>>;
}

const Describe: React.FC<DescribeProps> = ({ author, setAuthor }) => {
  const [edit, setEdit] = useState<boolean>(false);

  const HandlerEdit = () => {
    if (edit && author) UpdateElement("authors", author._id, author);
    edit ? setEdit(false) : setEdit(true);
  };

  const HandlerChange = (text: string) => {
    if (author) setAuthor({ ...author, description: text });
  };

  return (
    <div className="describe border-radius box-shadow">
      <div className="describe-label">
        <div className="describe-label-icon bubble">
          <FaUser color="white" size={20} />
        </div>
        <h4>Description</h4>
      </div>
      <div className="describe-text">
        {edit ? (
          <textarea onChange={(e) => HandlerChange(e.target.value)}>
            {author?.description}
          </textarea>
        ) : (
          <p>{author?.description}</p>
        )}
      </div>
      <button className="button" onClick={HandlerEdit}>
        {edit ? "Sauvegarder" : "Modifier"}
      </button>
    </div>
  );
};

export default Describe;
