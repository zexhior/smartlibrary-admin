import { ReactNode } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import "./sidebar.scss";
//import User from '../../common/images/profil.jpg';
import SideBarContent from "./sidebarcontent/sidebarcontent";
import { LogOut } from "../../modules/controllers/Logout";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface SideBarProps {
  groupelements: ReactNode[];
}

const SideBar: React.FC<SideBarProps> = ({ groupelements }) => {
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.currentUser);

  const HandlerLogOut = () => {
    LogOut();
    navigate("/login");
  };

  return (
    <div className="sidebar-container">
      <Link to={"/profil"} className="no-style">
        <div className="sidebar-profil animation">
          {/*<img
            className="sidebar-profil-img"
            src={user.photo !== "default.jpg" ? user.photo : User}
            alt="profil-user"
          />*/}
          <div className="sidebar-profil-name">
            <p className="sidebar-profil-name-last text-color-white">
              {user.name}
            </p>
            <p className="sidebar-profil-name-first text-color-white">
              {user.first_name}
            </p>
          </div>
        </div>
      </Link>
      {groupelements.map((group, i) => {
        return <span key={i}>{group}</span>;
      })}
      <div className="sidebar-bottom animation" onClick={HandlerLogOut}>
        <SideBarContent
          icon={<FaSignOutAlt fill="#FFFFFF" />}
          element="Deconnexion"
        />
      </div>
    </div>
  );
};

export default SideBar;
