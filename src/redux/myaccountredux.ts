import { createSlice } from '@reduxjs/toolkit';

export const myAccountSlice = createSlice({
    name: "myaccount",
    initialState: {
        _id: "",
        name: "",
        first_name: "",
        address: "",
        birth_date: "",
        phone_number: "",
        email: "",
        password: "",
        passwordConfirm: "",
        role: "",
        photo: "",
    },
    reducers: {
        getCurrentUser: (state, action:any)=>{
            state._id = action.payload._id;
            state.address = action.payload.address;
            state.birth_date = action.payload.birth_date;
            state.email = action.payload.email;
            state.first_name = action.payload.first_name;
            state.name = action.payload.name;
            state.photo = action.payload.photo;
            state.role = action.payload.role;
            state.phone_number = action.payload.phone_number;
        }
    }
})

export const {getCurrentUser} = myAccountSlice.actions;