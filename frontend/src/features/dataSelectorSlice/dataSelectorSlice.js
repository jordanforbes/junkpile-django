import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const dataSelectorSlice = createSlice({
  name: "dataSelector",
  initialState,
  reducers: {
    reset: (state) => {
      state = {};
    },
    setAllData: (state, action) => {
      state = action.payload;
    },
    getAllData: (state) => {
      return state;
    },
  },
});

export const { reset, setAllData, getAllData } = dataSelectorSlice.actions;

export default dataSelectorSlice.reducer;
