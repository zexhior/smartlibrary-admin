import { createSlice } from "@reduxjs/toolkit";

export const workSlice = createSlice({
  name: "work",
  initialState: {
    works: [],
    selectedWorks: [],
  },
  reducers: {
    setWorks: (state, action) => {
      state.works = action.payload;
    },
    setSelectedWorks: (state, action) => {
      state.selectedWorks = action.payload;
    },
  },
});

export const { setWorks, setSelectedWorks } = workSlice.actions;
