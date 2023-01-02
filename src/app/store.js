import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import listReducer from '../features/list/listSlice';
import filterReducer from "../features/list/filterSlice";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/auth/userSlice";

export const store = configureStore({
  reducer: {
    list: listReducer,
    filter: filterReducer,
    auth: authReducer,
    user: userReducer,
  },
});
