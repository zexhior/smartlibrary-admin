import { Category } from "./../modules/models/category";
import { createSlice } from "@reduxjs/toolkit";
import { Authors } from "../modules/models/authors";
import { Book } from "../modules/models/books";

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    createbook: {
      _id: "",
      title: "",
      isbn: "",
      star: 0,
      publishing_date: "",
      cover: "",
      synopsis: "",
      file: "",
      category: [],
      authors: [],
    },
    updatebook: {
      _id: "",
      title: "",
      isbn: "",
      star: 0,
      publishing_date: "",
      cover: "",
      synopsis: "",
      file: "",
    },
    authors: new Array<Authors>(),
    categories: new Array<Category>(),
    sizeauthors: 0,
    sizecategories: 0,
    books: new Array<Book>(),
    newbooks: new Array<Book>(),
    bestbooks: new Array<Book>(),
    newcategories: new Array<Category>(),
    deletecategories: new Array<Category>(),
  },
  reducers: {
    setUpdateBook: (state, action) => {
      state.updatebook = action.payload;
      return state;
    },
    setBookAuthor: (state, action) => {
      state.authors = action.payload;
      state.sizeauthors = action.payload.length;
      return state;
    },
    setBookCategory: (state, action) => {
      // console.log(action.payload);
      state.categories = action.payload;
      state.sizecategories = action.payload.length;
      return state;
    },
    setAddBookCategory: (state, action) => {
      state.categories.push(action.payload);
      return state;
    },
    addAuthorBook: (state, action) => {
      state.authors.push(action.payload);
      return state;
    },
    deleteAuthorBook: (state, action) => {
      state.authors = state.authors.filter((data) => data !== action.payload);
      return state;
    },
    setListBook: (state, action) => {
      state.books = action.payload;
      return state;
    },
    setListNewBook: (state, action) => {
      state.newbooks = action.payload;
      return state;
    },
    setListBestBook: (state, action) => {
      state.bestbooks = action.payload;
      return state;
    },
    setListNewCategories: (state, action) => {
      state.newcategories = action.payload;
      return state;
    },
    setListDeletedCategories: (state, action) => {
      state.deletecategories = action.payload;
      return state;
    },
  },
});

export const {
  setUpdateBook,
  setBookAuthor,
  addAuthorBook,
  setListBook,
  deleteAuthorBook,
  setBookCategory,
  setListNewBook,
  setListDeletedCategories,
  setListNewCategories,
  setListBestBook,
} = bookSlice.actions;
