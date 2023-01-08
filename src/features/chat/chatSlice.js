import { getMessages, sendMessage } from "./chatAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    value: [],
    error: null
};

export const doGetMessages = createAsyncThunk(
    'chat/getMessages',
    getMessages
);

export const doSendMessage = createAsyncThunk(
    'chat/sendMessage',
    sendMessage
);

export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(doGetMessages.pending, state => {
                state.loading = true;
                state.value = [];
                state.error = null;
            })
            .addCase(doGetMessages.fulfilled, (state, action) => {
                state.loading = false;
                state.value = action.payload;
            })
            .addCase(doGetMessages.rejected, (state, action) => {
                state.loading = false;
                state.value = {};
                state.error = action.error.message;
            })
            .addCase(doSendMessage.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(doSendMessage.fulfilled, (state, action) => {
                state.loading = false;
                state.value.push(action.meta.arg);
            })
            .addCase(doSendMessage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const selectChatValue = state => state.chat.value;
export const selectChatLoading = state => state.chat.loading;
export const selectChatError = state => state.chat.error;
export default chatSlice.reducer;
