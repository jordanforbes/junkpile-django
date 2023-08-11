import { configureStore } from "@reduxjs/toolkit";
import appSelectorReducer from "./features/appSelectorSlice/appSelectorSlice";


export default configureStore({
  reducer: {
    appSelector: appSelectorReducer,
  },
});
