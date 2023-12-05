import "./header.scss";
import Logo from "../../../../common/images/logo/logo-gray.png";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Profil from "../../../../common/images/profil.jpg";
import GetOneElement from "../../../controllers/GetOneElement";
import { Api } from "../../../../utils/api";
import { User } from "../../../models/users";
import { setCurrentUser } from "../../../../redux/userredux";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { element } = GetOneElement<User>(
    "users/",
    localStorage.getItem("id"),
    setCurrentUser,
  );

  const Deconnexion = () => {
    localStorage.clear();
    navigate("/login");
    console.log(element);
  };

  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} alt="header-log" className="logo" />
      </div>
      <div className="header-right">
        <div className="header-right-search">
          <input type="text" placeholder="Rechercher" />
          <button className="button">
            <FaSearch color="gray" size={15} />
          </button>
        </div>
        <div className="header-right-user">
          <button className="button" onClick={(e) => Deconnexion()}>
            Déconnexion
          </button>
          <img
            src={
              Api.root +
              (element?.photo.startsWith("/")
                ? element?.photo
                : `/${element?.photo.toString()}`)
            }
            alt="user"
            className="header-right-user-photo bubble"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
