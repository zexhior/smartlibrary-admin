import { ConvertListDate } from "../../utils/convertlistdate";
import { Api } from "./../../utils/api";

const SearchElement = (
  url: string,
  query: string,
  reducer: Function | null
) => {
  async function search() {
    const response = await Api.get(`${url}?${query}`);
    return ConvertListDate(response.data.data);
  }
  return search();
};

export default SearchElement;
