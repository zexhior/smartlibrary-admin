import SideBar from "./sidebar/sidebar";
import Header from "./header/header";
import "./refont.scss";
import Body from "./body/body";

const ReFont = () => {
  return (
    <div className="main">
      <Header />
      <div className="main-content">
        <SideBar />
        <Body />
      </div>
    </div>
  );
};

export default ReFont;
