import "./newuser.scss";
import Image2 from "../../../../../../common/images/zelda/2.webp";
import Image3 from "../../../../../../common/images/zelda/3.webp";
import Image4 from "../../../../../../common/images/zelda/4.jpg";
import { User } from "../../../../../models/users";

interface NewUserProps {
  users: User[];
}

const NewUser: React.FC<NewUserProps> = ({ users }) => {
  return (
    <div className="new-user">
      <div className="users-body-header-list">
        {users.map((user: User, key: number) => (
          <div key={key} className="users-body-header-list-user">
            <div className="new-user">
              <img src={user.photo} alt="new-user" />
            </div>
            <div className="users-body-header-list-user-mirror">
              <div className="name">
                <h3>{user.name}</h3>
                <h5>{user.first_name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewUser;
