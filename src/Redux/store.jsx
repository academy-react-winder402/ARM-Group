/* eslint-disable react-refresh/only-export-components */
import { configureStore } from "@reduxjs/toolkit";
import FormReducer from "./Slices/FormSlice";
import CourseFilterReducer from "./Slices/CourseFilter";
import SignUpFormReducer from "./Slices/SignUpFormSlice";
import CourseDetailReduser from "./Slices/CourseDetail";

const store = configureStore({
  reducer: {
    Form: FormReducer,
    CourseFilter: CourseFilterReducer,
    SignUpForm: SignUpFormReducer,
    CourseDetail: CourseDetailReduser,
  },
});

export default store;
