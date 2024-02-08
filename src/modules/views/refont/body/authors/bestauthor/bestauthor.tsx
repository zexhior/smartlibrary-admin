import { Api } from "../../../../../../utils/api";
import Stars from "../../../../../../widgets/stars/stars";
import { Authors } from "../../../../../models/authors";
import "./bestauthor.scss";

interface BestAuthorProps {
  authors: Array<Authors>;
}

const BestAuthor: React.FC<BestAuthorProps> = ({ authors }) => {
  return (
    <div className="bestauthor">
      <div className="bestauthor-list">
        {authors.map((author: Authors, key: number) => (
          <div key={key} className="bestauthor-list-item border-radius2">
            <div className="bestauthor-list-item-header">
              <img src={Api.root + author.photo} alt="" />
            </div>
            <div className="bestauthor-list-item-body">
              <h4 className="title">{author.last_name}</h4>
              <p className="subtitle">{author.first_name}</p>
              <Stars star={author.star} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestAuthor;
