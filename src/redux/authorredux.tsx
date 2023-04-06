import { createSlice } from "@reduxjs/toolkit";

export const authorSlice = createSlice({
    name: 'author',
    initialState: {
        createauthor: {
            name: "",
            last_Name: "",
            star: "",
            description: "",
            photo: ""
        },
        updateauthor: {
            name: "",
            last_Name: "",
            star: "",
            description: "",
            photo: ""
        },
    },
    reducers: {
        setUpdateBook: (state,action)=>{
            state.updateauthor = action.payload;
        }
    }
})