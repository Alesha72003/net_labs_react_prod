import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchData} from "./listAPI";

const initialState = {
    value: [],
    status: idle
}

export const getData = createAsyncThunk(
  'list/fetchData',
  async (where) => {
    const response = await fetchData(where);
    return response.data;
  }
);

// export const listSlice = createSlice({
//   name: "list",
//   initialState,
//   reducers: {
//
//   }
// })
