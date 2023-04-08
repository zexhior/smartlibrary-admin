import { createSlice } from "@reduxjs/toolkit";
import { Authors } from "../modules/models/authors";
import { Book } from "../modules/models/books";

export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        createbook: {
            _id: "",
            title: "",
            isbn: "",
            star: "",
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
            star: "",
            publishing_date: "",
            cover: "",
            synopsis: "",
            file: "",
            category: [],
            authors: new Array<Authors>(),
        },
        list : new Array<Book>(),
        page : 1,
    },
    reducers: {
        setUpdateBook: (state,action)=>{
            state.updatebook = action.payload;
        },
        setPage : (state,action) => {
            state.page = action.payload;
        },
        addAuthor: (state, action)=>{
            state.updatebook.authors.push(action.payload);
        }
    }
})

export const {setUpdateBook,addAuthor} = bookSlice.actions;