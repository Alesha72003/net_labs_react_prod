import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchGroup } from "./filterAPI";

const initialState = {
  value: [],
  status: "idle"
};

export const getGroup = createAsyncThunk(
  'filter/fetchGroup',
  async () => {
    const response = await fetchGroup();
    const data = response.data;
    return Object.keys(data).map(el => ({id: el, name: data[el]}));
  }
);

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGroup.pending, state => {
        state.status = "loading";
      })
      .addCase(getGroup.fulfilled, (state, action) => {
        state.status = "loaded";
        state.value = action.payload;
      });
  },
});

export const selectValue = state => state.filter.value;
export const selectStatus = state => state.filter.status;
export const selectLoading = state => state.filter.status === "loading";
export const selectLoaded = state => state.filter.status === "loaded";
export default filterSlice.reducer;
