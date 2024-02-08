import { Classification } from "./../models/classification";
import { Api } from "./../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { Category } from "./../models/category";
import { useState, useEffect } from "react";
import { setBookAuthor, setBookCategory } from "../../redux/bookredux";
import { setSelectedClassification } from "../../redux/classificationredux";

const GetCategoriesByClassification = (url: string, id: string | undefined) => {
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [lastCategories, setLastCategories] = useState<number>(0);
  const dispatch = useDispatch();
  const last = useSelector((state: any) => state.book.sizecategories);

  useEffect(() => {
    async function fetch() {
      if (id) {
        const classifications = await Api.get(`classifications?book=${id}`);
        setLastCategories(classifications.data.data.length);
        if (classifications.data.data && last === 0) {
          dispatch(setSelectedClassification(classifications.data.data));
          let temp: Array<Category> = [];
          classifications.data.data.forEach(
            async (classification: Classification) => {
              Api.get(`categories/${classification.category}`).then((data) => {
                temp.push({ ...data.data.data });
                setCategories(temp);
                dispatch(setBookCategory([...temp]));
              });
            }
          );
        }
      }
    }
    fetch();
  }, [url, id]);

  return { categories, setCategories, lastCategories };
};

export default GetCategoriesByClassification;
