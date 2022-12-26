import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login, logout } from "./authAPI";

const initialState = {
  me: null,
  loading: false,
  error: null,
  from: "/"
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
  reducers: {
    setFrom: (state, action) => {
      state.from = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(doLogin.pending, state => {
        state.loading = true;
      })
      .addCase(doLogin.fulfilled, (state, payload) => {
        state.loading = false;
        state.me = payload;
        state.error = null;
      })
      .addCase(doLogin.rejected, (state, payload) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(doLogout.pending, state => {
        state.loading = true;
      })
      .addCase(doLogout.fulfilled, state => {
        state.loading = false;
        state.me = null;
      })
  }
});

export const selectAuthLoading = (state) => state.auth.loading;
export const selectMe = (state) => state.auth.me;
export const selectError = (state) => state.error;
export const { setFrom } = authSlice.reducers;
export default authSlice.reducer;
