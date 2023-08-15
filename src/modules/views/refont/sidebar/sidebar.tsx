import { FaBook, FaEdit, FaHome, FaPowerOff, FaUser } from "react-icons/fa";
import "./sidebar.scss";
import ISPM from "../../../../common/images/logo/ispm.png";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <Link to="/" className="no-style">
          <div className="sidebar-section-element">
            <FaHome color="#464646" size={20} className="icon" />
            <p>Accueil</p>
          </div>
        </Link>
        <Link to="users" className="no-style">
          <div className="sidebar-section-element">
            <FaUser color="#464646" size={20} className="icon" />
            <p>Utilisateurs</p>
          </div>
        </Link>
        <Link to="books" className="no-style">
          <div className="sidebar-section-element">
            <FaBook color="#464646" size={20} className="icon" />
            <p>Livres</p>
          </div>
        </Link>
        <Link to="authors" className="no-style">
          <div className="sidebar-section-element">
            <FaEdit color="#464646" size={20} />
            <p>Auteurs</p>
          </div>
        </Link>
      </div>
      <div id="ISPM" className="sidebar-section">
        <img src={ISPM} alt="ISPM" />
        <h5>Institut Supérieur Polytéchnique de Madagascar</h5>
        <p>Fahaizana-Fampandrosona-Fihavanana</p>
      </div>
      <div id="deconnexion" className="sidebar-section">
        <FaPowerOff color="#464646" size={20} className="deconnexion-button" />
      </div>
    </div>
  );
};

export default SideBar;
