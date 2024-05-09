import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  DeleteAll: false,
};

const CourseFilterSlice = createSlice({
  name: "CourseFilter",
  initialState,
  reducers: {
    toggleDeleteAll: (state) => {
      state.DeleteAll == false
        ? (state.DeleteAll = true)
        : (state.DeleteAll = false);
    },
  },
});

export const { toggleDeleteAll } = CourseFilterSlice.actions;
export default CourseFilterSlice.reducer;
