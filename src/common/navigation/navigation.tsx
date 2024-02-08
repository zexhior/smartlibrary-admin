import { useState } from "react";
import SearchBar from "../../widgets/searchbar/searchbar";
import "./navigation.scss";

const Navigation = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="navigation-container">
      <SearchBar />
    </div>
  );
};

export default Navigation;
