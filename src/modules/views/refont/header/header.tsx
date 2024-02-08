import "./header.scss";
import Logo from "../../../../common/images/logo/logo-gray.png";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Profil from "../../../../common/images/profil.jpg";
import GetOneElement from "../../../controllers/GetOneElement";
import { Api } from "../../../../utils/api";
import { User } from "../../../models/users";
import { setCurrentUser } from "../../../../redux/userredux";
import { useEffect, useState } from "react";
import SearchBar from "../../../../widgets/searchbar/searchbar";

const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const { element } = GetOneElement<User>(
    "users/",
    localStorage.getItem("id"),
    setCurrentUser
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
        <div className="header-right-user">
          <SearchBar />
          <button className="button" onClick={(e) => Deconnexion()}>
            Déconnexion
          </button>
          <img
            src={Api.root + element?.photo}
            alt="user"
            className="header-right-user-photo bubble"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
