import { useRef } from "react";
import AddBook from "./addbook/addbook";
import "./modal.scss";
import { ImCross } from "react-icons/im";
import CategoryModal from "../books/bookinfo/bookmodal/categorymodal/categorymodal";
import AuthorModal from "../books/bookinfo/bookmodal/authormodal/authormodal";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../../../../redux/modalredux";
import DeleteBook from "./deletebook/deletebook";
import AddAuthor from "./addauthor/addauthor";
import LoadingModal from "./loading/loading";

const Modal = () => {
  const show = useSelector((state: any) => state.modal.show);
  const place = useSelector((state: any) => state.modal.place);
  const dispatch = useDispatch();
  const modal = useRef<HTMLDivElement>(null);

  const getModal = (place: number) => {
    const element = [
      <AddBook />,
      <CategoryModal />,
      <AuthorModal />,
      <DeleteBook />,
      <DeleteBook />,
      <DeleteBook />,
      <DeleteBook />,
      <AddAuthor />,
      <LoadingModal />,
    ];
    return element[place];
  };

  const HandlerShow = () => {
    dispatch(setShowModal(false));
  };

  return show ? (
    <div className="modal" ref={modal}>
      <div
        className="modal-bg"
        onClick={(e) => {
          HandlerShow();
        }}
      >
        {place !== 8 ? (
          <button className="button cancel">
            <ImCross size={20} color="white" />
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className="modal-content">{getModal(place)}</div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
