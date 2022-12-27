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
        state.error = null;
      })
      .addCase(doLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.me = action.payload;
        state.error = null;
      })
      .addCase(doLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(doLogout.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doLogout.fulfilled, state => {
        state.loading = false;
        state.me = null;
      })
  }
});

export const selectAuthLoading = (state) => state.auth.loading;
export const selectMe = (state) => state.auth.me;
export const selectError = (state) => state.auth.error;
export const selectFrom = (state) => state.auth.from;
export const { setFrom } = authSlice.actions;
export default authSlice.reducer;
