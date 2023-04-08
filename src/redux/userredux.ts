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
        createUser: {
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
        list: new Array<User>(),
        page: 1},
    reducers: {
        getAllUsers : (state, action)=>{
            state.list = action.payload;
        },
        setUser : (state,action) => {
            state.currentUser = action.payload
        },
        setPage : (state, action) => {
            state.page = action.payload
        }
    }
})

export const {getAllUsers, setUser} = userSlice.actions;