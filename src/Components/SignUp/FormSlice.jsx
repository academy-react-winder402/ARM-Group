import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  PhoneNumber: null,
};

const FormSlice = createSlice({
  name: "FormNumber",
  initialState,
  reducers: {
    SetPhoneNumber: (state, action) => {
      state.PhoneNumber = action.payload;
    },
  },
});

export const { SetPhoneNumber } = FormSlice.actions;
export default FormSlice.reducer;
