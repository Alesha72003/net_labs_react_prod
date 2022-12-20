import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import listReducer from '../features/list/listSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    list: listReducer
  },
});
