import { useEffect, useState } from "react";
import { User } from "../../../../../models/users";
import UserInfo from "../userinfo/userinfo";
import "./userpage.scss";
import { useParams } from "react-router-dom";
import { UsersData } from "../../../../../../mock/database";
import { useSelector } from "react-redux";
import GetOneElement from "../../../../../controllers/GetOneElement";
import { setUpdateUser } from "../../../../../../redux/userredux";

const UserPage = () => {
  const { id } = useParams();
  const user = GetOneElement<User>("users/", id, setUpdateUser);

  useEffect(() => {
    // const selectedUser: User | undefined = UsersData.find(
    //   (user: User) => user._id === id?.toString()
    // );
    // selectedUser ? setUser(selectedUser) : setUser(null);
    console.log(user.element);
  }, [user]);

  return (
    <div className="userpage">
      <UserInfo user={user.element} />
    </div>
  );
};

export default UserPage;
