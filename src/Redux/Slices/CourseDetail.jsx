import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CourseObj: [],
};

const CourseDetail = createSlice({
  name: "CourseDetail",
  initialState,
  reducers: {
    SetCourseObj: (state, action) => {
      state.CourseObj = action.payload;
    },
  },
});

export const { SetCourseObj } = CourseDetail.actions;
export default CourseDetail.reducer;
