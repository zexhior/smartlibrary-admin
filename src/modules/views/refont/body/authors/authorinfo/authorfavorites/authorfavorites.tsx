import { useState } from "react";
import { UsersData } from "../../../../../../../mock/database";
import { Authors } from "../../../../../../models/authors";
import { User } from "../../../../../../models/users";
import "./authorfavorites.scss";
import Stars from "../../../../../../../widgets/stars/stars";

interface AuthorFavoritesProps {
  author: Authors | null | undefined;
}

const AuthorFavorites: React.FC<AuthorFavoritesProps> = ({ author }) => {
  const [users, setUsers] = useState<Array<User>>(UsersData.slice(0, 4));

  return (
    <div className="authorfavorites">
      <h4>Les utilisateurs adorant l'auteur</h4>
      <div className="authorfavorites-list">
        {users.length !== 0 ? (
          users.map((user: User,key: number) => (
            <div className="authorfavorites-list-item border-radius box-shadow" key={key}>
              <div className="authorfavorites-list-item-header">
                <img src={user.photo} alt="" />
              </div>
              <div className="authorfavorites-list-item-body">
                <h4>
                  {user.name} {user.first_name}
                </h4>
                <Stars star={3} />
              </div>
            </div>
          ))
        ) : (
          <p>Pas de liste</p>
        )}
      </div>
    </div>
  );
};

export default AuthorFavorites;
