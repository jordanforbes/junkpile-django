import { configureStore } from "@reduxjs/toolkit";
import viewSelectorReducer from "./features/viewSelectorSlice/viewSelectorSlice";
import detailSelectorReducer from "./features/detailSelectorSlice/detailSelectorSlice";

export default configureStore({
  reducer: {
    viewSelector: viewSelectorReducer,
    detailSelector: detailSelectorReducer,
  },
});
