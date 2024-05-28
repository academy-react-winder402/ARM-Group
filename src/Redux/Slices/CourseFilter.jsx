import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  DeleteAll: false,
  CardView: "GridView",
  Search: null,
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

    SetSearch: (state, actions) => {
      state.Search = actions.payload;
    },
  },
});

export const { toggleDeleteAll, SetCardView, SetSearch } =
  CourseFilterSlice.actions;
export default CourseFilterSlice.reducer;
