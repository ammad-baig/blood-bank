import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    personalDetails: {},
  },
  reducers: {
    addUser: (state, action) => {
      console.log(state);
      console.log(action.payload);
      state.isLogin = true;
      state.personalDetails = { ...action.payload };
    },
    edit: () => {},
  },
});

export const { addUser, edit } = userSlice.actions;
export default userSlice.reducer;
