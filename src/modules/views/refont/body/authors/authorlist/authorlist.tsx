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
import { setUpdateAuthor } from "../../../../../../redux/authorredux";
import EmptyList from "../../../../../../widgets/emptylist/emptylist";

interface AuthorListProps {
  authors: Array<Authors>;
}

const AuthorList: React.FC<AuthorListProps> = ({ authors }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const HandlerShowModal = (author: Authors) => {
    dispatch(setUpdateAuthor(author));
    dispatch(setShowModal(true));
    dispatch(setUpdatePlace(6));
  };

  const LinkToAuthor = (id: string) => {
    navigate(id);
  };

  return (
    <div className="authorlist">
      {authors.length !== 0 ? (
        authors.map((author: Authors, key: number) => (
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
                <div className="authorlist-item-body-text">
                  <h3 className="title">{author.last_name}</h3>
                  <p className="subtitle">{author.first_name}</p>
                  <Stars star={author.star} />
                </div>
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
        ))
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default AuthorList;
