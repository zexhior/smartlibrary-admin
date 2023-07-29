import { createSlice } from "@reduxjs/toolkit";
import { Authors } from "../modules/models/authors";

export const authorSlice = createSlice({
    name: 'author',
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
            photo: ""
        },
        authors: new Array<Authors>,
        page: 1
    },
    reducers: {
        setUpdateAuthor: (state,action)=>{
            state.updateauthor = action.payload;
        },
        setListAuthors: (state,action)=>{
            state.authors = action.payload;
        }
    }
})

export const {setUpdateAuthor,setListAuthors} = authorSlice.actions;