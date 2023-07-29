import "./users.scss";
import Image2 from "../../../../../common/images/zelda/2.png";
import Image3 from "../../../../../common/images/zelda/3.webp";
import Image4 from "../../../../../common/images/zelda/4.jpg";
import { FaUser } from "react-icons/fa";

const Users = () => {
  return (
    <div className="users">
      <div className="users-body">
        <div className="users-body-header">
          <h4 className="title">Les nouveaux utilisateurs</h4>
          <div className="users-body-header-list">
            <div className="users-body-header-list-user">
              <div className="new-user">
                <img src={Image2} alt="new-user" />
              </div>
              <div className="users-body-header-list-user-mirror">
                <div className="name">
                  <h3>John</h3>
                  <h5>Wick</h5>
                </div>
              </div>
            </div>
            <div className="users-body-header-list-user">
              <div className="new-user">
                <img src={Image3} alt="new-user" />
              </div>
              <div className="users-body-header-list-user-mirror">
                <div className="name">
                  <h3>John</h3>
                  <h5>Wick</h5>
                </div>
              </div>
            </div>
            <div className="users-body-header-list-user">
              <div className="new-user">
                <img src={Image4} alt="new-user" />
              </div>
              <div className="users-body-header-list-user-mirror">
                <div className="name">
                  <h3>John</h3>
                  <h5>Wick</h5>
                </div>
              </div>
            </div>
            <div className="users-body-header-list-user">
              <div className="new-user">
                <img src={Image2} alt="new-user" />
              </div>
              <div className="users-body-header-list-user-mirror">
                <div className="name">
                  <h3>John</h3>
                  <h5>Wick</h5>
                </div>
              </div>
            </div>
            <div className="users-body-header-list-user">
              <div className="new-user">
                <img src={Image3} alt="new-user" />
              </div>
              <div className="users-body-header-list-user-mirror">
                <div className="name">
                  <h3>John</h3>
                  <h5>Wick</h5>
                </div>
              </div>
            </div>
            <div className="users-body-header-list-user">
              <div className="new-user">
                <img src={Image4} alt="new-user" />
              </div>
              <div className="users-body-header-list-user-mirror">
                <div className="name">
                  <h3>John</h3>
                  <h5>Wick</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="users-body">
          <h4 className="title">La liste des utilisateurs</h4>
        </div>
      </div>
      <div className="users-sidebar">
        <div className="users-sidebar-total">
          <div className="users-sidebar-total-icon">
            <FaUser color="white" size={100} />
          </div>
          <div className="users-sidebar-total-text">
            <h3>124</h3>
            <p>Utilisateurs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
