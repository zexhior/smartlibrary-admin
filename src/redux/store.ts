import { userSlice } from "./userredux";
import { authorSlice } from "./authorredux";
import { bookSlice } from "./bookredux";
import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./redux";
import { searchSlice } from "./searchredux";
import { categorySlice } from "./categoryredux";
import { classificatioSlice } from "./classificationredux";
import { workSlice } from "./workredux";

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    book: bookSlice.reducer,
    author: authorSlice.reducer,
    user: userSlice.reducer,
    category: categorySlice.reducer,
    search: searchSlice.reducer,
    classification: classificatioSlice.reducer,
    work: workSlice.reducer,
  },
});
