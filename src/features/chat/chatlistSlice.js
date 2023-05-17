import { getChats } from "./chatlistAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
};

export const doGetChats = createAsyncThunk(
  'chatlist/getChats',
  getChats
);

export const chatlistSlice = createSlice({
  name: "chatlist",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(doGetChats.fulfilled, (state, action) => {
        state.value = action.payload;
      })
  }
});

export const selectChats = state => state.chatlist.value;
export default chatlistSlice.reducer;