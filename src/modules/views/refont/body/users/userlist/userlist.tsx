import { FaMailBulk, FaPhone } from "react-icons/fa";
import { User } from "../../../../../models/users";
import "./userlist.scss";
import { Link } from "react-router-dom";

interface UserListProps {
  users: User[];
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserList: React.FC<UserListProps> = ({ users, setUser }) => {
  const HandlerSetUser = (user: User) => {
    setUser(user);
  };

  return (
    <>
      <div className="userlist">
        <h4 className="title">La liste des utilisateurs</h4>
        <div className="userlist-items">
          {users.map((user: User, key: number) => (
            <div
              key={key}
              className="userlist-items-item box-shadow border-radius"
              onClick={(e) => HandlerSetUser(user)}
            >
              <img
                src={user.photo}
                className="userlist-items-item-img border-radius"
                alt="user"
              />
              <div className="userlist-items-item-body">
                <h3>{user.name}</h3>
                <h5>{user.first_name}</h5>
                <div className="userlist-items-item-body-text">
                  <FaMailBulk color="gray" size={15} />
                  <p>{user.email}</p>
                </div>
                <div className="userlist-items-item-body-text">
                  <FaPhone color="gray" size={15} />
                  <p>{user.phone_number}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="userlist-items mini">
          {users.map((user: User, key: number) => (
            <Link to={`${user._id}`} className="no-style">
              <div
                key={key}
                className="userlist-items-item box-shadow border-radius"
              >
                <img
                  src={user.photo}
                  className="userlist-items-item-img border-radius"
                  alt="user"
                />
                <div className="userlist-items-item-body">
                  <h3>{user.name}</h3>
                  <h5>{user.first_name}</h5>
                  <div className="userlist-items-item-body-text">
                    <FaMailBulk color="gray" size={15} />
                    <p>{user.email}</p>
                  </div>
                  <div className="userlist-items-item-body-text">
                    <FaPhone color="gray" size={15} />
                    <p>{user.phone_number}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserList;
