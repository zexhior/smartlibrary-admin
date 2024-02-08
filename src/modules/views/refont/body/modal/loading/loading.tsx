import { useEffect } from "react";
import Load from "../../../../../../common/load/load";
import Loading from "../../../../../../common/loading/loading";
import "./loading.scss";

const LoadingModal = () => {
  return (
    <div className="loading-modal">
      <Load />
    </div>
  );
};

export default LoadingModal;
