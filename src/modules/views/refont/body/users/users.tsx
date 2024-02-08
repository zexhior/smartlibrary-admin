import "./users.scss";
import { FaUser } from "react-icons/fa";
import NewUser from "./newuser/newuser";
import { User } from "../../../../models/users";
import UserList from "./userlist/userlist";
import UserInfo from "./userinfo/userinfo";
import { useState } from "react";
import useGetAllElement from "../../../../controllers/GetAllElement";
import { setUpdateUser } from "../../../../../redux/userredux";

const Users = () => {
  const { elements, setElements, size } = useGetAllElement<User>(
    "users",
    1,
    setUpdateUser
  );
  const [user, setUser] = useState<User | undefined>();

  return (
    <div className="users">
      <div className="users-body">
        <h4 className="title">Les nouveaux utilisateurs</h4>
        <div className="users-body-header">
          <NewUser users={elements} />
          <div className="users-body-header-total border-radius">
            <div className="users-body-header-total-icon">
              <FaUser color="white" size={50} />
            </div>
            <div className="users-body-header-total-text">
              <h5 className="title">{size}</h5>
              <p>Utilisateurs</p>
            </div>
          </div>
        </div>
        <div className="users-body-content">
          <UserList users={elements} setUser={setUser} />
          <UserInfo user={user} />
        </div>
      </div>
    </div>
  );
};

export default Users;
