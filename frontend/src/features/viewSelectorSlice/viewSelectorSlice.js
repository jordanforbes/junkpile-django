import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  view: "ArtList",
};

export const viewSelectorSlice = createSlice({
  name: "viewSelector",
  initialState,
  reducers: {
    selectArtList: (state) => {
      state.view = "ArtList";
    },
    selectArtDetail: (state) => {
      state.view = "ArtDetail";
    },
    selectAppList: (state) => {
      state.view = "AppList";
    },
    selectAppDetail: (state) => {
      state.view = "AppDetail";
    },
  },
});

export const {
  selectArtList,
  selectArtDetail,
  selectAppList,
  selectAppDetail,
} = viewSelectorSlice.actions;
export default viewSelectorSlice.reducer;
