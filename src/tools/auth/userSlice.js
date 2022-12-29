import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUser } from './userAPI';

const initialState = {
    user: null,
    groups: null,
    loading: false,
    error: null
}

export const doGetUser = createAsyncThunk(
    "user/getUser",
    getUser
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.groups = action.payload.groups;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(doGetUser.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(doGetUser.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.groups = action.payload.groups;
                state.loading = false;
            })
            .addCase(doGetUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.groups = null;
                state.error = action.error.message;
            })
    }
});

export default userSlice.reducer;
export const selectUser = state => ({user: state.user.user, groups: state.user.groups});
export const selectUserLoading = state => state.user.loading;
export const selectUserError = state => state.user.error;
export const { setUser } = userSlice.actions;