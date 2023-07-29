import { User } from './../modules/models/users';
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: {
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
        updateUser: {
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
        users: new Array<User>(),
        page: 1},
    reducers: {
        setListUser : (state, action)=>{
            state.users = action.payload;
        },
        setUpdateUser : (state, action) => {
            state.updateUser = action.payload;
        },
        setUser : (state,action) => {
            state.currentUser = action.payload
        },
        setPage : (state, action) => {
            state.page = action.payload
        }
    }
})

export const {setListUser, setUser, setUpdateUser} = userSlice.actions;