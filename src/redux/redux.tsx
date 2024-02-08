import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    show: false,
    place: 0,
  },
  reducers: {
    setShowModal: (state, action) => {
      state.show = action.payload;
    },
    setUpdatePlace: (state, action) => {
      state.place = action.payload;
    },
  },
});

export const { setShowModal, setUpdatePlace } = modalSlice.actions;
