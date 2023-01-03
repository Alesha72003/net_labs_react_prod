import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchItem, updateItemAPI } from "./itemAPI";


const initialState = {
  value: {},
  loading: false,
  error: null
};

export const getItem = createAsyncThunk(
  'item/fetchItem',
  fetchItem
);

export const updateItem = createAsyncThunk(
  'item/updateItem',
  updateItemAPI
);

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setPreloaded: (state, action) => {
      if (state.loading) {
        state.value = action.payload;
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getItem.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getItem.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(getItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateItem.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateItem.fulfilled, state => {
        state.loading = false;
      })
      .addCase(updateItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
});

export const selectItemValue = state => state.item.value;
export const selectItemLoading = state => state.item.loading;
export const selectItemError = state => state.item.error;

export const { setPreloaded } = itemSlice.actions;
export default itemSlice.reducer;