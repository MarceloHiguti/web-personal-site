import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  app: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});
