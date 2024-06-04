import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  DeleteAll: false,
  ShowDeleteAllBut: false,
  CardView: "GridView",
  Search: "",
  CourseLevel: 0,
  Teacher: 0,
  Sorting: "",
  Category: [],
  Type: 0,
  PriceFilter: [],
  ItemPerPage: 24,
  PageNumber: 1,
  ItemsCount: null,
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

    SetItemPerPage: (state, actions) => {
      state.ItemPerPage = actions.payload;
    },

    SetPageNumber: (state, actions) => {
      state.PageNumber = actions.payload;
    },

    SetCourseLevel: (state, actions) => {
      state.CourseLevel = actions.payload;
    },

    SetTeacher: (state, actions) => {
      state.Teacher = actions.payload;
    },

    SetSorting: (state, actions) => {
      state.Sorting = actions.payload;
    },

    SetCategory: (state, actions) => {
      state.Category = actions.payload;
    },

    SetType: (state, actions) => {
      state.Type = actions.payload;
    },

    SetPriceFilter: (state, actions) => {
      state.PriceFilter = actions.payload;
    },

    SetItemsCount: (state, actions) => {
      state.ItemsCount = actions.payload;
    },
  },
});

export const {
  toggleDeleteAll,
  SetShowDeleteAllBut,
  SetCardView,
  SetSearch,
  SetCourseLevel,
  SetPriceFilter,
  SetItemsCount,
  SetItemPerPage,
  SetPageNumber,
  SetTeacher,
  SetSorting,
  SetCategory,
  SetType,
} = CourseFilterSlice.actions;
export default CourseFilterSlice.reducer;
