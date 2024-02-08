import { FaBook, FaCalendarWeek, FaMailBulk, FaPhone } from "react-icons/fa";
import { User } from "../../../../../models/users";
import "./userinfo.scss";
import BookList from "../../books/booklist/booklist";
import { Api } from "../../../../../../utils/api";
import { GetUserFavoriteBook } from "../../../../../controllers/GetUserFavoriteBook";

interface UserInfoProps {
  user: User | undefined;
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  const { books } = GetUserFavoriteBook(`favoriteBooks`, user?._id);

  return (
    <div className="userinfo">
      {user ? (
        <div className="userinfo-content border-radius">
          <div className="userinfo-content-header">
            <div className="userinfo-content-header-detail">
              <h2>
                {user.name} {user.first_name}
              </h2>
              <div className="userinfo-content-header-detail-text">
                <FaMailBulk color="gray" size={15} />
                <p>{user.email}</p>
              </div>
              <div className="userinfo-content-header-detail-text">
                <FaPhone color="gray" size={15} />
                <p>{user.phone_number}</p>
              </div>
              <div className="userinfo-content-header-detail-text">
                <FaCalendarWeek color="gray" size={15} />
                <p>{user.birth_date}</p>
              </div>
            </div>
            <div className="userinfo-content-header-img border-radius">
              <img src={Api.root + user.photo} alt="user" />
            </div>
          </div>
          <div className="userinfo-content-body">
            <div className="userinfo-content-body-options">
              <div className="userinfo-content-body-options-item">
                <div className="userinfo-content-body-options-item-title">
                  <div className="round bubble">
                    <FaBook color="white" size={20} />
                  </div>
                  <h3>Les livres favoris</h3>
                </div>
                <p>
                  Voir la liste des différents livres favoris de l'utilisateur
                  séléctionné
                </p>
              </div>
              <div className="userinfo-content-body-options-item">
                <div className="userinfo-content-body-options-item-title">
                  <div className="round bubble">
                    <FaBook color="white" size={20} />
                  </div>
                  <h3>Les livres recommandés</h3>
                </div>
                <p>
                  Voir la liste des différents livres récommandés pour
                  l'utilisateur séléctionné
                </p>
              </div>
            </div>
            <div className="userinfo-content-body-books">
              <h4>Liste livres : </h4>
              <div className="userinfo-content-body-books-list">
                <BookList books={books} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty">
          <h3>
            Utilisateur vide <br />
            Séléctionné un utilisateur
          </h3>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
