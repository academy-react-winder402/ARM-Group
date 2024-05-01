import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  PhoneNumber: null,
  Validation_1: false,

  NameAndFamily: null,
};

const FormSlice = createSlice({
  name: "FormNumber",
  initialState,
  reducers: {
    SetPhoneNumber: (state, action) => {
      state.PhoneNumber = action.payload;
    },
    SetValidation_1: (state, action) => {
      state.Validation_1 = action.payload;
    },

    SetNameAndFamily: (state, action) => {
      state.NameAndFamily = action.payload;
    },
  },
});

export const { SetPhoneNumber, SetNameAndFamily } = FormSlice.actions;
export default FormSlice.reducer;
