import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  DeleteAll: false,
  ShowDeleteAllBut: false,
  CardView: "GridView",
  Search: "",
  CourseLevel: 0,
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

    SetShowDeleteAllBut: (state, actions) => {
      state.ShowDeleteAllBut = actions.payload;
    },

    SetCardView: (state, actions) => {
      state.CardView = actions.payload;
    },

    SetSearch: (state, actions) => {
      state.Search = actions.payload;
    },

    SetApiPath: (state, actions) => {
      state.ApiPath = actions.payload;
    },

    SetFilter: (state, actions) => {
      state.Filter = actions.payload;
    },

    SetCourseLevel: (state, actions) => {
      state.CourseLevel = actions.payload;
    },
  },
});

export const {
  toggleDeleteAll,
  SetShowDeleteAllBut,
  SetCardView,
  SetSearch,
  SetApiPath,
  SetFilter,
  SetCourseLevel,
} = CourseFilterSlice.actions;
export default CourseFilterSlice.reducer;
