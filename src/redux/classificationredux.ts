import { createSlice } from "@reduxjs/toolkit";

export const classificatioSlice = createSlice({
  name: "classification",
  initialState: {
    selectedClassification: [],
  },
  reducers: {
    setSelectedClassification: (state, action) => {
      state.selectedClassification = action.payload;
      return state;
    },
  },
});

export const { setSelectedClassification } = classificatioSlice.actions;
