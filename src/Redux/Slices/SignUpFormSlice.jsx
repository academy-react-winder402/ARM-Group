import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Step: 1,
  PhoneNumber: null,
};

const SignUpFormSlice = createSlice({
  name: "SignUpForm",
  initialState,
  reducers: {
    SetLevel: (state, action) => {
      state.Step = action.payload;
    },
    SetPhoneNumberRedux: (state, action) => {
      state.PhoneNumber = action.payload;
    },
  },
});

export const { SetLevel, SetPhoneNumberRedux } = SignUpFormSlice.actions;
export default SignUpFormSlice.reducer;
