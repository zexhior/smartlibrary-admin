import {
  FaBuilding,
  FaCross,
  FaCrosshairs,
  FaDoorClosed,
  FaEdit,
  FaMarker,
  FaNpm,
  FaPen,
} from "react-icons/fa";
import "./maintenance.scss";

const Maintenance = () => {
  return (
    <div className="maintenance">
      <div>
        <FaPen size={200} />
      </div>
      En cours de maintenance
    </div>
  );
};

export default Maintenance;
