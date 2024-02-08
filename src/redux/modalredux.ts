import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    show: false,
    place: 0,
    page: "",
  },
  reducers: {
    setShowModal: (state, action) => {
      state.show = action.payload;
    },
    setUpdatePlace: (state, action) => {
      state.place = action.payload;
    },
    setUpdatePage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setShowModal, setUpdatePlace, setUpdatePage } =
  modalSlice.actions;
