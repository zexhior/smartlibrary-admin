import "./body.scss";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="body">
      <Outlet />
    </div>
  );
};

export default Body;
