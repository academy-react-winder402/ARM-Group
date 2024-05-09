/* eslint-disable react-refresh/only-export-components */
import { configureStore } from "@reduxjs/toolkit";
import FormReducer from "./Slices/FormSlice";
import CourseFilterReducer from "./Slices/CourseFilter";

const store = configureStore({
  reducer: {
    Form: FormReducer,
    CourseFilter: CourseFilterReducer,
  },
});

export default store;
