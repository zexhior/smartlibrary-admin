import { Link, useNavigate } from "react-router-dom";
import Stars from "../../../../../../widgets/stars/stars";
import { Authors } from "../../../../../models/authors";
import "./authorlist.scss";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  setShowModal,
  setUpdatePlace,
} from "../../../../../../redux/modalredux";
import { Api } from "../../../../../../utils/api";

interface AuthorListProps {
  authors: Array<Authors>;
}

const AuthorList: React.FC<AuthorListProps> = ({ authors }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const HandlerShowModal = (author: Authors) => {
    dispatch(setShowModal(true));
    dispatch(setUpdatePlace(6));
  };

  const LinkToAuthor = (id: string) => {
    navigate(id);
  };

  return (
    <div className="authorlist">
      {authors.map((author: Authors, key: number) => (
        <div key={key}>
          <div className="authorlist-item border-radius clickable">
            <div className="authorlist-item-header">
              <img
                src={Api.root + author.photo}
                alt="author"
                className="border-radius"
              />
            </div>
            <div className="authorlist-item-body">
              <h3>{author.last_name}</h3>
              <h5>{author.first_name}</h5>
              <Stars star={author.star} />
              <div className="options">
                <button
                  className="button"
                  onClick={() => {
                    LinkToAuthor(author._id);
                  }}
                >
                  Voir
                </button>
                <button
                  className="button"
                  onClick={() => {
                    HandlerShowModal(author);
                  }}
                >
                  <FaTrash size={15} color="white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuthorList;
