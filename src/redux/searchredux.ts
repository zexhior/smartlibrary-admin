import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        page: 'home',
        activated: false,
    },
    reducers: {
        changePageSearch: (state, action)=>{
            state.page = action.payload;
        },
        switchActivation: (state,action)=>{
            state.activated = action.payload;
        }
    }
})

export const {changePageSearch, switchActivation} = searchSlice.actions;