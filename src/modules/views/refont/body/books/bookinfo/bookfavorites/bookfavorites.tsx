import { SetStateAction, useState } from "react";
import "./bookfavorites.scss";
import { User } from "../../../../../../models/users";
import { UsersData } from "../../../../../../../mock/database";
import Stars from "../../../../../../../widgets/stars/stars";
import { FaPhone } from "react-icons/fa";

const BookFavorites = () => {
  const [users, setUsers] = useState<Array<User>>(UsersData.slice(0, 4));
  return (
    <div className="bookfavorites">
      <h4>Les utilisateurs adorant le livre</h4>
      <div className="userlist">
        {users.map((user: User, key: number) => (
          <div key={key} className="user border-radius box-shadow">
            <div className="user-header">
              <img src={user.photo} alt="user" className="border-radius" />
            </div>
            <div className="user-content">
              <h4>{user.name}</h4>
              <h5>{user.first_name}</h5>
              <div className="user-content-item">
                <FaPhone color="gray" size={10} />
                <p>{user.phone_number}</p>
              </div>
              <Stars star={3} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookFavorites;
