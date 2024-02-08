import { FaMailBulk, FaPhone, FaSearch } from "react-icons/fa";
import { User } from "../../../../../models/users";
import "./userlist.scss";
import { Link, useNavigate } from "react-router-dom";
import { Api } from "../../../../../../utils/api";
import { useDispatch } from "react-redux";
import { setUpdateUser } from "../../../../../../redux/userredux";
import { useState } from "react";
import SearchBar from "../../../../../../widgets/searchbar/searchbar";
import EmptyList from "../../../../../../widgets/emptylist/emptylist";

interface UserListProps {
  users: User[];
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

const UserList: React.FC<UserListProps> = ({ users, setUser }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
                src={Api.root + user.photo}
                className="userlist-items-item-img border-radius"
                alt="user"
              />
              <div className="userlist-items-item-body">
                <h3 className="title">{user.name}</h3>
                <p className="subtitle">{user.first_name}</p>
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
          {users.length !== 0 ? (
            users.map((user: User, key: number) => (
              <Link to={user._id} className="no-style">
                <div
                  key={key}
                  className="userlist-items-item box-shadow border-radius items-mini"
                >
                  <img
                    src={Api.root + user.photo}
                    className="userlist-items-item-img border-radius"
                    alt="user"
                  />
                  <div className="userlist-items-item-body">
                    <h3 className="title">{user.name}</h3>
                    <p className="subtitle">{user.first_name}</p>
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
            ))
          ) : (
            <EmptyList />
          )}
        </div>
      </div>
    </>
  );
};

export default UserList;
