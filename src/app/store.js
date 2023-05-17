import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import listReducer from '../features/list/listSlice';
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/auth/userSlice";
import itemReducer from "../features/item/itemSlice";
import groupReducer from "../features/auth/groupSlice";
import chatReducer from "../features/chat/chatSlice";
import websocketReducer from '../features/websocket/websocketSlice';
import chatlistReducer from "../features/chat/chatlistSlice";

export const store = configureStore({
  reducer: {
    list: listReducer,
    auth: authReducer,
    user: userReducer,
    item: itemReducer,
    group: groupReducer,
    chat: chatReducer,
    websocket: websocketReducer,
    chatlist: chatlistReducer,
  },
});
