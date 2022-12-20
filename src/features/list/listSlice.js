import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchData} from "./listAPI";

const initialState = {
    value: [],
    status: "idle"
}

export const getData = createAsyncThunk(
  'list/fetchData',
  async (where) => {
    const response = await fetchData(where);
    console.log(response)
    const tasks = response.data;
    return Object.keys(tasks).map(a => ({"id": a, ...tasks[a]}));
  }
);

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      });
  },
});

export const selectValue = (state) => state.list.value;
export const selectStatus = (state) => state.list.status;
export const selectLoading = (state) => state.list.status === "loading";
export default listSlice.reducer;
