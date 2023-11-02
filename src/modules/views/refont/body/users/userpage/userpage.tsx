import { useEffect, useState } from "react";
import { User } from "../../../../../models/users";
import UserInfo from "../userinfo/userinfo";
import "./userpage.scss";
import { useParams } from "react-router-dom";
import { UsersData } from "../../../../../../mock/database";

const UserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const selectedUser: User | undefined = UsersData.find(
      (user: User) => user._id === id?.toString()
    );
    selectedUser ? setUser(selectedUser) : setUser(null);
  }, []);

  return (
    <div className="userpage">
      <UserInfo user={user} />
    </div>
  );
};

export default UserPage;
