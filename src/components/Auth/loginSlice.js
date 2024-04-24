import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account: {
    accessToken: null,
    refreshToken: null,
    user: null,
    email: null,
    image: null,
    role: null,
  },
  isAuth: false,
};

export const userSlice = createSlice({
  name: "LOGIN",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    fetchData: (state, action) => {
      state.account.accessToken = action.payload.access_token;
      state.account.refreshToken = action.payload.refresh_token;
      state.account.user = action.payload.username;
      state.account.email = action.payload.email;
      state.account.role = action.payload.role;
      state.account.image = action.payload.image;
      state.isAuth = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, fetchData } =
  userSlice.actions;

export default userSlice.reducer;
