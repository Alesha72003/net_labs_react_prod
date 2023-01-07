import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getGroup } from "./groupAPI";

const initialState = {
  value: {},
  loading: false,
  error: null
}

export const doGetGroup = createAsyncThunk(
  'group/getGroup',
  getGroup
);

export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(doGetGroup.pending, state => {
        state.loading = true;
        state.error = null;
        state.value = {};
      })
      .addCase(doGetGroup.fulfilled, (state, action) => {
        state.value = action.payload;
        state.loading = false;
      })
      .addCase(doGetGroup.rejected, (state, action) => {
        state.value = null;
        state.loading = false;
        state.error = action.error.message;
      })
  }
});

export default groupSlice.reducer;
export const selectGroupValue = state => state.group.value;
export const selectGroupLoading = state => state.group.loading;
export const selectGroupError = state => state.group.error;

