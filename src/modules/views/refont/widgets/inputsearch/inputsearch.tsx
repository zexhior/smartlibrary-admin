import "./inputsearch.scss";
import { FaSearch } from "react-icons/fa";

interface InputSearchProps {
  search: string;
  fonction: Function;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const InputSearch: React.FC<InputSearchProps> = ({
  search,
  fonction,
  setSearch,
}) => {
  const HandlerChange = (value: string) => {
    setSearch(value);
  };

  return (
    <div className="search border-radius2">
      <input
        type="text"
        className="custom-input"
        placeholder="Recherche"
        onChange={(e) => HandlerChange(e.target.value)}
      />
      <button className="button-search" onClick={(e) => fonction(search)}>
        <FaSearch size={15} color="white" />
      </button>
    </div>
  );
};

export default InputSearch;
