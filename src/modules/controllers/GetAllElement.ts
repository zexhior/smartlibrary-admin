import { useDispatch, useSelector } from "react-redux";
import { ConvertListDate } from "./../../utils/convertlistdate";
import { useEffect, useState } from "react";
import { Api } from "../../utils/api";
import { setShowModal, setUpdatePlace } from "../../redux/modalredux";

const useGetAllElement = <Type>(url: string, page: number, reducer: any) => {
  const [elements, setElements] = useState<Array<Type>>(new Array<Type>());
  const [size, setSize] = useState<number>(0);
  const dispatch = useDispatch();
  const activated = useSelector((state: any) => state.search.activated);

  useEffect(() => {
    async function getAll() {
      let path = url;
      if (page !== 0) path = `${path}?page=${page}&limit=${8}`;
      Api.get(path)
        .then((data: any) => {
          data.data.data = ConvertListDate(data.data.data);
          setSize(data.data.results);
          setElements(data.data.data);
        })
        .catch((error) => {
          if (error.message === "Network Error") {
            dispatch(setUpdatePlace(8));
            dispatch(setShowModal(true));
          } else {
            dispatch(setShowModal(false));
          }
          console.log(error);
        });
    }
    getAll();
  }, [url, page]);

  if (!activated && reducer) dispatch(reducer(elements));

  return { elements, setElements, size };
};

export default useGetAllElement;
