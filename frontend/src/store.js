import { configureStore } from "@reduxjs/toolkit";
import appSelectorReducer from "./features/appSelectorSlice/appSelectorSlice";
import detailSelectorReducer from "./features/detailSelectorSlice/detailSelectorSlice";

export default configureStore({
  reducer: {
    // appSelector: appSelectorReducer,
    detailSelector: detailSelectorReducer,
  },
});
