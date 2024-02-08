import SideBar from "./sidebar/sidebar";
import Header from "./header/header";
import "./refont.scss";
import Body from "./body/body";
import Modal from "./body/modal/modal";

const ReFont = () => {
  return (
    <div className="main">
      <Modal />
      <Header />
      <div className="main-content">
        <SideBar />
        <Body />
      </div>
    </div>
  );
};

export default ReFont;
