import { userSlice } from './userredux';
import { myAccountSlice } from './myaccountredux';
import { authorSlice } from './authorredux';
import { bookSlice } from './bookredux';
import { configureStore } from '@reduxjs/toolkit';
import { modalSlice } from './redux';

export const store = configureStore({
    reducer: {
        modal: modalSlice.reducer,
        book: bookSlice.reducer,
        author: authorSlice.reducer,
        currentUser: myAccountSlice.reducer,
        user: userSlice.reducer,
    },
})