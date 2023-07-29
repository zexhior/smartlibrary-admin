import { FaBook, FaEdit, FaHome, FaPowerOff, FaUser } from "react-icons/fa";
import "./sidebar.scss";
import ISPM from "../../../../common/images/logo/ispm.png";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-section-element">
          <FaHome color="#464646" size={20} className="icon" />
          <p>Accueil</p>
        </div>
        <div className="sidebar-section-element">
          <FaUser color="#464646" size={20} className="icon" />
          <p>Utilisateurs</p>
        </div>
        <div className="sidebar-section-element">
          <FaBook color="#464646" size={20} className="icon" />
          <p>Livres</p>
        </div>
        <div className="sidebar-section-element">
          <FaEdit color="#464646" size={20} />
          <p>Auteurs</p>
        </div>
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
