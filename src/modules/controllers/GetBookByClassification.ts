import { Classification } from "./../models/classification";
import { useState, useEffect } from "react";
import { Api } from "../../utils/api";
import { Book } from "./../models/books";
import { ConvertDate } from "../../utils/convertdate";

const GetBookByClassification = (id: string | undefined) => {
  const [books, setBooks] = useState<Array<Book>>([]);

  useEffect(() => {
    async function fetch() {
      if (id) {
        const classification = await Api.get(`classifications?category=${id}`);
        setBooks([]);
        if (classification.data.data) {
          classification.data.data.forEach(async (element: Classification) => {
            const bookObj = await Api.get(`books/${element.book}`);
            const data = [...books, ConvertDate(bookObj.data.data)];
            setBooks(data);
          });
        }
      }
    }
    fetch();
  }, [id]);

  return { books, setBooks };
};

export default GetBookByClassification;
