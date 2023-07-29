import "./header.scss";
import Logo from "../../../../common/images/logo/logo-gray.png";
import { FaSearch } from "react-icons/fa";
import User from "../../../../common/images/user.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} alt="header-log" className="logo" />
      </div>
      <div className="header-right">
        <div className="header-right-search">
          <input type="text" placeholder="Rechercher" />
          <button className="button">
            <FaSearch color="white" size={15} />
          </button>
        </div>
        <div className="header-right-user">
          <button className="button">Déconnexion</button>
          <img
            src={User}
            alt="user"
            className="header-right-user-photo bubble"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
