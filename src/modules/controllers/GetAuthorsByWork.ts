import { useDispatch, useSelector } from "react-redux";
import { Work } from "./../models/work";
import { useState, useEffect } from "react";
import { Authors } from "../models/authors";
import { Api } from "../../utils/api";
import { setBookAuthor } from "../../redux/bookredux";
import { setSelectedWorks } from "../../redux/workredux";

const GetAuthorsByWork = (id: string | undefined) => {
  const [authors, setAuthors] = useState<Array<Authors>>([]);
  const [lastAuthors, setLastAuthors] = useState<number>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetch() {
      if (id) {
        const works = await Api.get(`works?book=${id}`);
        setLastAuthors(works.data.data.length);
        dispatch(setSelectedWorks(works.data.data));
        if (works.data.data) {
          const temp: Array<Authors> = [];
          works?.data.data.forEach(async (work: Work) => {
            Api.get(`authors/${work.author}`).then((data) => {
              temp.push({ ...data.data.data });
              setAuthors(temp);
              dispatch(setBookAuthor([...temp]));
            });
          });
        }
      }
    }
    fetch();
  }, [id]);

  return { authors, setAuthors, lastAuthors };
};

export default GetAuthorsByWork;
