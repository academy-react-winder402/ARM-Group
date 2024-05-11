import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  DeleteAll: false,
  CardView: "GridView",
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

    SetCardView: (state, actions) => {
      state.CardView = actions.payload;
    },
  },
});

export const { toggleDeleteAll, SetCardView } = CourseFilterSlice.actions;
export default CourseFilterSlice.reducer;
