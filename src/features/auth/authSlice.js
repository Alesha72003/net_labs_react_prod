import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login, logout } from "./authAPI";

const initialState = {
  me: [].
  status: "unknow"
};

export const doLogin = createAsyncThunk(
  'auth/login',
  login
);

export const doLogout = createAsyncThunk(
  'auth/logout',
  logout
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(doLogin.pending, state => {
        state.status = "loading"
      })
      .addCase(doLogin.fulfilled, state => {
        state.status = "logined"
      })
  }
})
