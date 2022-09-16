import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth.js";

export default configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
