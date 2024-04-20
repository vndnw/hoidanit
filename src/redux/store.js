import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../components/Auth/loginSlice";

export const store = configureStore({
  reducer: {
    user: loginReducer,
  },
});
