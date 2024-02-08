import { Api } from "../../../../../../utils/api";
import { Authors } from "../../../../../models/authors";
import "./newauthors.scss";

interface NewAuthorsProps {
  authors: Array<Authors>;
}

const NewAuthors: React.FC<NewAuthorsProps> = ({ authors }) => {
  return (
    <div className="newauthors">
      <div className="newauthors-list">
        {authors.map((author: Authors, key: number) => (
          <div key={key} className="newauthors-list-item border-radius">
            <img src={Api.root + author.photo} alt="author" />
            <div className="newauthors-list-item-mirror">
              <div className="newauthors-list-item-mirror-name">
                <h3>{author.last_name}</h3>
                <h4>{author.first_name}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewAuthors;
