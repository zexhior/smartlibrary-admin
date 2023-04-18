import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        createcategory: {
            _id: "",
            wording: ""
        },
        updatecategory: {
            _id: "",
            wording: ""
        },
        categories: []
    },
    reducers: {
        setCreateCategory : (state,action)=>{
            state.createcategory = action.payload;
        },
        setUpdateCategory : (state,action)=>{
            state.updatecategory = action.payload;
        },
        setListCategory : (state,action)=>{
            state.categories = action.payload
        }
    }
})

export const {setCreateCategory,setUpdateCategory,setListCategory} = categorySlice.actions;