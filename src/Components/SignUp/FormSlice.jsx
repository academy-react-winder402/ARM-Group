import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  PhoneNumber: null,
  Validation_1: false,
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
  },
});

export const { SetPhoneNumber } = FormSlice.actions;
export default FormSlice.reducer;
