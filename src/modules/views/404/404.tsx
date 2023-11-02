import "./404.scss";
import Zoro from "../../../common/images/zoro.jpg";

const Page404 = () => {
  return (
    <div className="page404">
      <h1>Vous vous êtes trompés de chemin</h1>
      <img src={Zoro} alt="lost" />
    </div>
  );
};

export default Page404;
