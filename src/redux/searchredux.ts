import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    text: "",
    page: "home",
    activated: false,
  },
  reducers: {
    changeText: (state, action) => {
      state.text = action.payload;
    },
    changePageSearch: (state, action) => {
      state.page = action.payload;
    },
    switchActivation: (state, action) => {
      state.activated = action.payload;
    },
  },
});

export const { changePageSearch, switchActivation, changeText } =
  searchSlice.actions;
