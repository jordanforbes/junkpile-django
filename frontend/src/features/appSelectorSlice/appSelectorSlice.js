import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: false,
  title: false,
  githubURL: false,
  projectURL: false,
  description: false,
  technologies: false,
  images: [],
};

export const appSelectorSlice = createSlice({
  name: "appSelector",
  initialState,
  reducers: {
    appToggle: (state) => {
      state.selected = !state.selected;
    },
  },
});

export const { appToggle } = appSelectorSlice.actions;

export default appSelectorSlice.reducer;
