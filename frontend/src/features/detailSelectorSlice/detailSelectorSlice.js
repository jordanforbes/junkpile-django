import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: false,
  title: false,
  githubURL: false,
  projectURL: false,
  description: false,
  technologies: false,
  mediums: false,
  type: false,
  images: [],
};

export const detailSelectorSlice = createSlice({
  name: "detailSelector",
  initialState,
  reducers: {
    reset: (state) => {
      state.selected = false;
      state.title = false;
      state.githubURL = false;
      state.projectURL = false;
      state.description = false;
      state.technologies = false;
      state.mediums = false;
      state.type = false;
      state.images = [];
    },
    setArt: (state, action) => {
      state.selected = true;
      state.type = "art";
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.mediums = action.payload.mediums;
      state.images = action.payload.images;
    },
    setApp: (state, action) => {
      state.selected = true;
      state.type = "app";
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.githubURL = action.payload.githubURL
        ? action.payload.githubURL
        : false;
      state.projectURL = action.payload.projectURL
        ? action.payload.projectURL
        : false;
      state.technologies = action.payload.technoliges;
      state.images = action.payload.images;
    },
    getDetails: (state) => {
      return state;
    },
  },
});

export const { reset, setArt, setApp, getDetails } =
  detailSelectorSlice.actions;

export default detailSelectorSlice.reducer;
