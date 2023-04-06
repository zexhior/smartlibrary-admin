import { createSlice } from "@reduxjs/toolkit";

const Element = (<div>
        zavatra
    </div>);

export const modalSlice = createSlice({
    name: "modal",
    initialState: {activation : false, content: Element},
    reducers: {
        changeModal: (state,action)=>{
            if(state.activation)
                state.activation = false;
            else
                state.activation = true;
        },
        changeContent : (state,action)=>{
            state.content = action.payload;
        },
        closeModal : (state, action)=>{
            state.activation = false;
        }
    }
});

export const {changeModal, changeContent, closeModal} = modalSlice.actions;