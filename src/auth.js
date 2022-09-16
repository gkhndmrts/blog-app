import { createSlice } from "@reduxjs/toolkit";
import authService from "./service";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: authService.getToken() ? true : false,
  },
  reducers: {
    login: (state) => {
      state.status = true;
    },
    logout: (state) => {
      state.status = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
