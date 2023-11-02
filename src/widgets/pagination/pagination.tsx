import { Button } from "../../styles/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./pagination.scss";

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  endPage: number;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  page,
  setPage,
  endPage,
}) => {
  const HandlerChangePage = (action: boolean) => {
    if (action) {
      if (page < endPage) {
        setPage((state: number) => state + 1);
      }
    } else {
      if (page > 1) {
        setPage((state: number) => state - 1);
      }
    }
  };
  return (
    <div className="page-favbook">
      {page > 1 ? (
        <Button
          className="button animation"
          onClick={(e) => HandlerChangePage(false)}
        >
          <FaArrowLeft />
        </Button>
      ) : (
        <div style={{ width: "50px", height: "50px" }}></div>
      )}
      <p>{page}</p>
      {page < endPage ? (
        <Button
          className="button animation"
          onClick={(e) => HandlerChangePage(true)}
        >
          <FaArrowRight />
        </Button>
      ) : (
        <div style={{ width: "50px", height: "50px" }}></div>
      )}
    </div>
  );
};

export default PaginationComponent;
