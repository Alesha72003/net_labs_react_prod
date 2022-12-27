import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import listReducer from '../features/list/listSlice';
import filterReducer from "../features/list/filterSlice";
import authReducer from "../tools/auth/authSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    list: listReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
