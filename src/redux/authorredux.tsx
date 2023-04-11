import { createSlice } from "@reduxjs/toolkit";

export const authorSlice = createSlice({
    name: 'author',
    initialState: {
        createauthor: {
            name: "",
            last_Name: "",
            star: 0,
            description: "",
            photo: ""
        },
        updateauthor: {
            name: "",
            last_Name: "",
            star: 0,
            description: "",
            photo: ""
        },
    },
    reducers: {
        setUpdateAuthor: (state,action)=>{
            state.updateauthor = action.payload;
        }
    }
})

export const {setUpdateAuthor} = authorSlice.actions;