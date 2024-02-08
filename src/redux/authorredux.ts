import { createSlice } from "@reduxjs/toolkit";
import { Authors } from "../modules/models/authors";

export const authorSlice = createSlice({
  name: "author",
  initialState: {
    createauthor: {
      _id: "",
      first_name: "",
      last_name: "",
      star: 0,
      description: "",
      photo: "",
    },
    updateauthor: {
      _id: "",
      first_name: "",
      last_name: "",
      star: 0,
      description: "",
      photo: "",
    },
    authors: new Array<Authors>(),
    newauthors: new Array<Authors>(),
    bestauthors: new Array<Authors>(),
    searchauthors: new Array<Authors>(),
    page: 1,
  },
  reducers: {
    setUpdateAuthor: (state, action) => {
      state.updateauthor = action.payload;
    },
    setListAuthors: (state, action) => {
      state.authors = action.payload;
    },
    setListNewAuthors: (state, action) => {
      state.newauthors = action.payload;
    },
    setListBestAuthors: (state, action) => {
      state.bestauthors = action.payload;
    },
    setSearchAuthors: (state, action) => {
      state.searchauthors = action.payload;
    },
  },
});

export const {
  setUpdateAuthor,
  setListAuthors,
  setListNewAuthors,
  setListBestAuthors,
  setSearchAuthors,
} = authorSlice.actions;
