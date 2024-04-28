/* eslint-disable react-refresh/only-export-components */
import { configureStore } from "@reduxjs/toolkit";
import FormReducer from "./Slices/FormSlice";

const store = configureStore({
  reducer: {
    Form: FormReducer,
  },
});

export default store;
