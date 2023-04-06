import { createSlice } from '@reduxjs/toolkit';

const myAccountSlice = createSlice({
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
        getUser: (state, action)=>{
            
        }
    }
})