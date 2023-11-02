import "./authorworks.scss";
import BookList from "../../../books/booklist/booklist";
import { FaBook } from "react-icons/fa";
import GetBookByWork from "../../../../../../controllers/GetBookbyWork";

interface AuthorWorksProps {
  author_id: string | undefined;
}

const AuthorWorks: React.FC<AuthorWorksProps> = ({ author_id }) => {
  const {books} = GetBookByWork(`works/`,author_id?author_id:""); 

  return (
    <div className="authorworks">
      <div className="authorworks-label">
        <div className="authorworks-label-icon bubble">
          <FaBook color="white" size={20} />
        </div>
        <h4>Liste des oeuvres de l'auteur</h4>
      </div>
      <BookList books={books} />
    </div>
  );
};

export default AuthorWorks;
