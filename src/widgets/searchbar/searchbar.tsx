import React, { ChangeEvent, useState } from "react";
import "./searchbar.scss";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeText } from "../../redux/searchredux";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const HandlerChangeText = (value: string) => {
    dispatch(changeText(value));
  };

  const HandlerSearch = () => {
    navigate("/search");
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Rechercher"
        onChange={(e) => HandlerChangeText(e.target.value)}
      />
      <button className="button" onClick={(e) => HandlerSearch()}>
        <FaSearch color="gray" size={15} />
      </button>
    </div>
  );
};

export default SearchBar;
