import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Step: 1,
};

const SignUpFormSlice = createSlice({
  name: "SignUpForm",
  initialState,
  reducers: {
    SetLevel: (state, action) => {
      state.Step = action.payload;
    },
  },
});

export const { SetLevel } = SignUpFormSlice.actions;
export default SignUpFormSlice.reducer;
