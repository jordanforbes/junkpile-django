import { configureStore } from "@reduxjs/toolkit";
import viewSelectorReducer from "./features/viewSelectorSlice/viewSelectorSlice";
import detailSelectorReducer from "./features/detailSelectorSlice/detailSelectorSlice";
import projectListSelectorReducer from "./features/projectListSelectorSlice/projectListSelectorSlice";
import dataSelectorReducer from "./features/dataSelectorSlice/dataSelectorSlice";

export default configureStore({
  reducer: {
    viewSelector: viewSelectorReducer,
    detailSelector: detailSelectorReducer,
    projectListSelector: projectListSelectorReducer,
    dataSelector: dataSelectorReducer,
  },
});
